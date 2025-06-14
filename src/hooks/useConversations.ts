
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Conversation {
  id: string;
  profile1_id: string;
  profile2_id: string;
  created_at: string;
  last_message_at: string;
  archived_by_profile1: boolean;
  archived_by_profile2: boolean;
  other_profile?: {
    id: string;
    name: string;
    title: string;
    company: string;
    initials: string;
    image_url: string | null;
  };
  last_message?: {
    content: string;
    created_at: string;
    sender_profile_id: string;
  };
}

export const useConversations = () => {
  return useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      // Get current user's profile first
      const { data: userProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
        .single();

      if (!userProfile) {
        throw new Error('User profile not found');
      }

      const { data, error } = await supabase
        .from('conversations')
        .select(`
          *,
          profile1:profiles!profile1_id(id, name, title, company, initials, image_url),
          profile2:profiles!profile2_id(id, name, title, company, initials, image_url)
        `)
        .or(`profile1_id.eq.${userProfile.id},profile2_id.eq.${userProfile.id}`)
        .order('last_message_at', { ascending: false });

      if (error) {
        console.error('Error fetching conversations:', error);
        throw error;
      }

      // Get last message for each conversation
      const conversationsWithMessages = await Promise.all(
        data.map(async (conversation: any) => {
          const { data: lastMessage } = await supabase
            .from('messages')
            .select('content, created_at, sender_profile_id')
            .eq('conversation_id', conversation.id)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

          // Determine which profile is the "other" profile
          const otherProfile = conversation.profile1_id === userProfile.id 
            ? conversation.profile2 
            : conversation.profile1;

          return {
            ...conversation,
            other_profile: otherProfile,
            last_message: lastMessage,
          };
        })
      );

      return conversationsWithMessages as Conversation[];
    },
  });
};

export const useCreateConversation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ profile1_id, profile2_id }: { profile1_id: string; profile2_id: string }) => {
      // Ensure consistent ordering (smaller UUID first)
      const [firstId, secondId] = [profile1_id, profile2_id].sort();
      
      const { data, error } = await supabase
        .from('conversations')
        .insert({
          profile1_id: firstId,
          profile2_id: secondId,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating conversation:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
  });
};

export const useArchiveConversation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ conversationId, profileId }: { conversationId: string; profileId: string }) => {
      // First get the conversation to determine which archive field to update
      const { data: conversation } = await supabase
        .from('conversations')
        .select('profile1_id, profile2_id')
        .eq('id', conversationId)
        .single();

      if (!conversation) {
        throw new Error('Conversation not found');
      }

      const archiveField = conversation.profile1_id === profileId 
        ? 'archived_by_profile1' 
        : 'archived_by_profile2';

      const { data, error } = await supabase
        .from('conversations')
        .update({ [archiveField]: true })
        .eq('id', conversationId)
        .select()
        .single();

      if (error) {
        console.error('Error archiving conversation:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
  });
};
