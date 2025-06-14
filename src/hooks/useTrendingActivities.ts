
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface TrendingActivity {
  id: string;
  activity: string;
  context: string;
  participant_count: number;
  created_at: string;
  is_active: boolean;
}

export const useTrendingActivities = () => {
  return useQuery({
    queryKey: ['trending-activities'],
    queryFn: async (): Promise<TrendingActivity[]> => {
      console.log('Fetching trending activities from database...');
      
      const { data, error } = await supabase
        .from('trending_activities')
        .select('*')
        .eq('is_active', true)
        .order('participant_count', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching trending activities:', error);
        throw error;
      }

      return data || [];
    },
  });
};

export const useJoinActivity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (activityId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { data, error } = await supabase
        .from('user_activity_participation')
        .insert({
          user_id: user.id,
          activity_id: activityId,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trending-activities'] });
    },
  });
};

export const useLeaveActivity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (activityId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { error } = await supabase
        .from('user_activity_participation')
        .delete()
        .eq('user_id', user.id)
        .eq('activity_id', activityId);

      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trending-activities'] });
    },
  });
};
