
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface UserYouTubeChannel {
  id: string;
  user_id: string;
  channel_name: string;
  channel_id: string | null;
  created_at: string;
  updated_at: string;
}

export const useUserYouTubeChannels = () => {
  return useQuery({
    queryKey: ['user-youtube-channels'],
    queryFn: async (): Promise<UserYouTubeChannel[]> => {
      console.log('Fetching user YouTube channels...');
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        return [];
      }

      const { data, error } = await supabase
        .from('user_youtube_channels')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user YouTube channels:', error);
        throw error;
      }

      return data || [];
    },
  });
};

export const useAddYouTubeChannel = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (channelName: string) => {
      console.log('Adding YouTube channel:', channelName);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('User not authenticated');
      }

      const { data, error } = await supabase
        .from('user_youtube_channels')
        .insert({
          user_id: session.user.id,
          channel_name: channelName.trim(),
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-youtube-channels'] });
      toast({
        title: "Success",
        description: "YouTube channel added to your preferences",
      });
    },
    onError: (error: any) => {
      console.error('Error adding YouTube channel:', error);
      toast({
        title: "Error",
        description: error.message.includes('duplicate') 
          ? "This channel is already in your preferences" 
          : "Failed to add YouTube channel",
        variant: "destructive",
      });
    },
  });
};

export const useRemoveYouTubeChannel = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (channelId: string) => {
      console.log('Removing YouTube channel:', channelId);
      
      const { error } = await supabase
        .from('user_youtube_channels')
        .delete()
        .eq('id', channelId);

      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-youtube-channels'] });
      toast({
        title: "Success",
        description: "YouTube channel removed from your preferences",
      });
    },
    onError: (error: any) => {
      console.error('Error removing YouTube channel:', error);
      toast({
        title: "Error",
        description: "Failed to remove YouTube channel",
        variant: "destructive",
      });
    },
  });
};
