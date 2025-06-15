
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface YouTubeInsight {
  id: string;
  channel_name: string;
  video_title: string;
  video_url: string | null;
  upload_time: string;
  duration: string | null;
  view_count: string | null;
  topics: string[];
  ai_summary: string | null;
  created_at: string;
}

export const useYouTubeInsights = () => {
  return useQuery({
    queryKey: ['youtube-insights'],
    queryFn: async (): Promise<YouTubeInsight[]> => {
      console.log('Fetching YouTube insights from database...');
      
      const { data, error } = await supabase
        .from('youtube_insights')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching YouTube insights:', error);
        throw error;
      }

      return data || [];
    },
  });
};

export const useFetchFreshYouTubeInsights = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      console.log('Fetching fresh YouTube insights...');
      
      // For now, just refresh the existing data
      // In a real implementation, this would call an API to fetch new content
      return { success: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['youtube-insights'] });
    },
  });
};
