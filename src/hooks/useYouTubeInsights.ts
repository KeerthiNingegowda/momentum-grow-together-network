
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
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('User not authenticated');
      }

      const response = await supabase.functions.invoke('fetch-youtube-insights', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (response.error) {
        throw response.error;
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['youtube-insights'] });
    },
  });
};
