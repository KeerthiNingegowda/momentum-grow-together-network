
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Profile {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  initials: string;
  image_url: string | null;
  mutual_connections: number;
  skills: string[];
  pastCompanies: string[];
  isConnected: boolean;
}

export const useProfiles = () => {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: async (): Promise<Profile[]> => {
      console.log('Fetching profiles from database...');
      
      // Fetch profiles with their skills and past companies
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          name,
          title,
          company,
          location,
          initials,
          image_url,
          mutual_connections,
          profile_skills(skill),
          profile_past_companies(company)
        `);

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw profilesError;
      }

      console.log('Profiles fetched:', profilesData);

      // Transform the data to match the expected format
      const profiles: Profile[] = profilesData.map((profile: any) => ({
        id: profile.id,
        name: profile.name,
        title: profile.title,
        company: profile.company,
        location: profile.location,
        initials: profile.initials,
        image_url: profile.image_url,
        mutual_connections: profile.mutual_connections || 0,
        skills: profile.profile_skills?.map((skill: any) => skill.skill) || [],
        pastCompanies: profile.profile_past_companies?.map((pc: any) => pc.company) || [],
        isConnected: false // We'll implement connection status later
      }));

      return profiles;
    },
  });
};
