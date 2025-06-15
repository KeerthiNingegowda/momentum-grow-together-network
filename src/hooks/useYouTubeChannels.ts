
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface YouTubeChannel {
  id: string;
  channel_name: string;
  channel_id: string | null;
  created_at: string;
  updated_at: string;
}

export const useYouTubeChannels = () => {
  return useQuery({
    queryKey: ['youtube-channels'],
    queryFn: async (): Promise<YouTubeChannel[]> => {
      console.log('Fetching YouTube channels from database...');
      
      const { data, error } = await supabase
        .from('youtube_channels')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching YouTube channels:', error);
        throw error;
      }

      return data || [];
    },
  });
};
