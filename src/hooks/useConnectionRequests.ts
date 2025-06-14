
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ConnectionRequest {
  id: string;
  sender_profile_id: string;
  receiver_profile_id: string;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
  updated_at: string;
  sender_profile?: {
    id: string;
    name: string;
    title: string;
    company: string;
    initials: string;
    image_url: string | null;
  };
}

export const useConnectionRequests = () => {
  return useQuery({
    queryKey: ['connectionRequests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('connection_requests')
        .select(`
          *,
          sender_profile:profiles!sender_profile_id(
            id,
            name,
            title,
            company,
            initials,
            image_url
          )
        `)
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching connection requests:', error);
        throw error;
      }

      return data as ConnectionRequest[];
    },
  });
};

export const useUpdateConnectionRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: 'accepted' | 'declined' }) => {
      const { data, error } = await supabase
        .from('connection_requests')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating connection request:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['connectionRequests'] });
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
  });
};

export const useSendConnectionRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      receiver_profile_id, 
      message, 
      sender_profile_id 
    }: { 
      receiver_profile_id: string; 
      message: string;
      sender_profile_id: string;
    }) => {
      const { data, error } = await supabase
        .from('connection_requests')
        .insert({
          sender_profile_id,
          receiver_profile_id,
          message,
        })
        .select()
        .single();

      if (error) {
        console.error('Error sending connection request:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['connectionRequests'] });
    },
  });
};
