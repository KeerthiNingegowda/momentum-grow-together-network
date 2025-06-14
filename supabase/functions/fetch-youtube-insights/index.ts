
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface YouTubeVideo {
  id: { videoId: string }
  snippet: {
    title: string
    channelTitle: string
    publishedAt: string
    description: string
    thumbnails: {
      default: { url: string }
    }
  }
  contentDetails?: {
    duration: string
  }
  statistics?: {
    viewCount: string
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get the current user
    const {
      data: { user },
    } = await supabaseClient.auth.getUser()

    if (!user) {
      return new Response('Unauthorized', { status: 401, headers: corsHeaders })
    }

    const youtubeApiKey = Deno.env.get('YOUTUBE_API_KEY')
    if (!youtubeApiKey) {
      throw new Error('YouTube API key not configured')
    }

    // Get user's interests/skills from their profile to personalize search
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    // Define search terms based on user profile or default to tech topics
    const searchTerms = [
      'machine learning tutorial',
      'data science',
      'artificial intelligence',
      'programming tutorial',
      'tech career advice',
      'software engineering'
    ]

    const videos: any[] = []

    // Search for recent videos from educational channels
    for (const term of searchTerms.slice(0, 3)) { // Limit to avoid API quota issues
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(term)}&type=video&publishedAfter=${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()}&maxResults=2&order=relevance&key=${youtubeApiKey}`
      
      const response = await fetch(searchUrl)
      const data = await response.json()

      if (data.items) {
        videos.push(...data.items)
      }
    }

    // Get additional details for videos (duration, view count)
    if (videos.length > 0) {
      const videoIds = videos.map((v: YouTubeVideo) => v.id.videoId).join(',')
      const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${youtubeApiKey}`
      
      const detailsResponse = await fetch(detailsUrl)
      const detailsData = await detailsResponse.json()

      // Merge details with video data
      videos.forEach((video: YouTubeVideo, index) => {
        const details = detailsData.items?.find((item: any) => item.id === video.id.videoId)
        if (details) {
          video.contentDetails = details.contentDetails
          video.statistics = details.statistics
        }
      })
    }

    // Extract topics from video titles and descriptions
    const extractTopics = (title: string, description: string): string[] => {
      const techKeywords = [
        'Machine Learning', 'AI', 'Python', 'JavaScript', 'React', 'Node.js',
        'Data Science', 'TensorFlow', 'PyTorch', 'Cloud', 'DevOps', 'API',
        'Database', 'SQL', 'NoSQL', 'Kubernetes', 'Docker', 'AWS', 'Azure',
        'Frontend', 'Backend', 'Full Stack', 'Mobile', 'Web Development'
      ]
      
      const text = `${title} ${description}`.toLowerCase()
      return techKeywords.filter(keyword => 
        text.includes(keyword.toLowerCase())
      ).slice(0, 3) // Limit to 3 topics per video
    }

    // Format duration from ISO 8601 to readable format
    const formatDuration = (isoDuration: string): string => {
      const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
      if (!match) return '0:00'
      
      const hours = parseInt(match[1] || '0')
      const minutes = parseInt(match[2] || '0')
      const seconds = parseInt(match[3] || '0')
      
      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      }
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    // Format view count
    const formatViewCount = (count: string): string => {
      const num = parseInt(count)
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M views`
      if (num >= 1000) return `${(num / 1000).toFixed(1)}K views`
      return `${num} views`
    }

    // Insert new insights into database
    const insertPromises = videos.slice(0, 6).map((video: YouTubeVideo) => {
      const topics = extractTopics(video.snippet.title, video.snippet.description)
      
      return supabaseClient
        .from('youtube_insights')
        .insert({
          user_id: user.id,
          channel_name: video.snippet.channelTitle,
          video_title: video.snippet.title,
          video_url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          upload_time: video.snippet.publishedAt,
          duration: video.contentDetails ? formatDuration(video.contentDetails.duration) : null,
          view_count: video.statistics ? formatViewCount(video.statistics.viewCount) : null,
          topics: topics
        })
    })

    await Promise.all(insertPromises)

    // Fetch the latest insights from database to return
    const { data: insights, error } = await supabaseClient
      .from('youtube_insights')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(6)

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ insights }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error fetching YouTube insights:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
