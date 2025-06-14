
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  complexity?: string;
  problem_type?: string;
  team_size?: string;
  confidence_score: number;
  satisfaction_score: number;
  mentorship_program: boolean;
  avg_tenure?: string;
  diversity_score?: string;
  work_style?: string;
  vibe?: string;
  values?: string[];
  techStack: {
    category: string;
    technologies: string[];
    color: string;
    description?: string;
  }[];
  companyStats: {
    totalPosted?: number;
    totalFilled?: number;
    confidenceScore: number;
  };
  companyProfile: {
    culture: {
      workStyle?: string;
      vibe?: string;
      values?: string[];
    };
    companyInsights: {
      category: string;
      details: string[];
      color: string;
      description?: string;
    }[];
    perks: {
      icon: string;
      label: string;
    }[];
    teamInsights: {
      avgTenure?: string;
      satisfactionScore: number;
      diversityScore?: string;
      mentorshipProgram: boolean;
    };
    recentFeedback: {
      text: string;
      rating: number;
    }[];
  };
}

export const useJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: async (): Promise<JobListing[]> => {
      console.log('Fetching jobs from Supabase...');
      
      // Fetch main job data
      const { data: jobs, error: jobsError } = await supabase
        .from('jobs')
        .select('*');

      if (jobsError) {
        console.error('Error fetching jobs:', jobsError);
        throw jobsError;
      }

      console.log('Jobs fetched:', jobs);

      // Fetch related data for all jobs
      const jobIds = jobs.map(job => job.id);

      const [techStackData, companyInsightsData, perksData, feedbackData] = await Promise.all([
        supabase.from('job_tech_stack').select('*').in('job_id', jobIds),
        supabase.from('job_company_insights').select('*').in('job_id', jobIds),
        supabase.from('job_perks').select('*').in('job_id', jobIds),
        supabase.from('job_feedback').select('*').in('job_id', jobIds),
      ]);

      if (techStackData.error) throw techStackData.error;
      if (companyInsightsData.error) throw companyInsightsData.error;
      if (perksData.error) throw perksData.error;
      if (feedbackData.error) throw feedbackData.error;

      console.log('Related data fetched successfully');

      // Transform data to match the expected format
      const transformedJobs: JobListing[] = jobs.map(job => ({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        type: job.type,
        salary: job.salary,
        posted: job.posted,
        description: job.description,
        complexity: job.complexity,
        problem_type: job.problem_type,
        team_size: job.team_size,
        confidence_score: job.confidence_score || 50,
        satisfaction_score: job.satisfaction_score || 3.0,
        mentorship_program: job.mentorship_program || false,
        avg_tenure: job.avg_tenure,
        diversity_score: job.diversity_score,
        work_style: job.work_style,
        vibe: job.vibe,
        values: job.values,
        techStack: techStackData.data
          ?.filter(ts => ts.job_id === job.id)
          .map(ts => ({
            category: ts.category,
            technologies: ts.technologies,
            color: ts.color,
            description: ts.description,
          })) || [],
        companyStats: {
          confidenceScore: job.confidence_score || 50,
        },
        companyProfile: {
          culture: {
            workStyle: job.work_style,
            vibe: job.vibe,
            values: job.values,
          },
          companyInsights: companyInsightsData.data
            ?.filter(ci => ci.job_id === job.id)
            .map(ci => ({
              category: ci.category,
              details: ci.details,
              color: ci.color,
              description: ci.description,
            })) || [],
          perks: perksData.data
            ?.filter(p => p.job_id === job.id)
            .map(p => ({
              icon: p.icon,
              label: p.label,
            })) || [],
          teamInsights: {
            avgTenure: job.avg_tenure,
            satisfactionScore: job.satisfaction_score || 3.0,
            diversityScore: job.diversity_score,
            mentorshipProgram: job.mentorship_program || false,
          },
          recentFeedback: feedbackData.data
            ?.filter(f => f.job_id === job.id)
            .map(f => ({
              text: f.text,
              rating: f.rating,
            })) || [],
        },
      }));

      console.log('Transformed jobs:', transformedJobs);
      return transformedJobs;
    },
  });
};
