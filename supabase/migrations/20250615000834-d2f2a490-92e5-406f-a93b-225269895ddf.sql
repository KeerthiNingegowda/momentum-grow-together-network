
-- Drop existing RLS policies that depend on user_id
DROP POLICY IF EXISTS "Users can view their own youtube insights" ON public.youtube_insights;
DROP POLICY IF EXISTS "Users can create their own youtube insights" ON public.youtube_insights;
DROP POLICY IF EXISTS "Users can update their own youtube insights" ON public.youtube_insights;
DROP POLICY IF EXISTS "Users can delete their own youtube insights" ON public.youtube_insights;

-- Remove the foreign key constraint and user_id column from youtube_insights
ALTER TABLE public.youtube_insights DROP CONSTRAINT IF EXISTS youtube_insights_user_id_fkey;
ALTER TABLE public.youtube_insights DROP COLUMN IF EXISTS user_id;

-- Remove user-specific constraints and make it a global channels table
DROP TABLE IF EXISTS public.user_youtube_channels;

-- Create a global YouTube channels table
CREATE TABLE public.youtube_channels (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  channel_name TEXT NOT NULL UNIQUE,
  channel_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert the recommended channels
INSERT INTO public.youtube_channels (channel_name) VALUES 
  ('@aiDotEngineer'),
  ('@3blue1brown'), 
  ('@statquest');

-- Add ai_summary column to existing youtube_insights table if it doesn't exist
ALTER TABLE public.youtube_insights ADD COLUMN IF NOT EXISTS ai_summary TEXT;

-- Clear existing data and insert sample content for demonstration
DELETE FROM public.youtube_insights;
INSERT INTO public.youtube_insights (channel_name, video_title, video_url, upload_time, duration, view_count, topics, ai_summary) VALUES 
  ('@aiDotEngineer', 'Building AI Applications with React and OpenAI', 'https://youtube.com/watch?v=example1', NOW() - INTERVAL '2 days', '28:45', '45K views', ARRAY['AI', 'React', 'OpenAI'], 'A comprehensive guide on integrating AI capabilities into React applications, covering API integration, state management, and best practices for production deployment.'),
  ('@3blue1brown', 'Neural Networks Explained Visually', 'https://youtube.com/watch?v=example2', NOW() - INTERVAL '1 day', '32:15', '125K views', ARRAY['Machine Learning', 'Neural Networks'], 'An intuitive visual explanation of how neural networks work, from basic perceptrons to deep learning architectures, using beautiful animations and mathematical insights.'),
  ('@statquest', 'Statistics Fundamentals for Data Science', 'https://youtube.com/watch?v=example3', NOW() - INTERVAL '3 hours', '18:30', '67K views', ARRAY['Statistics', 'Data Science'], 'Clear explanations of essential statistical concepts every data scientist should know, including hypothesis testing, confidence intervals, and statistical significance.');

-- Make the tables publicly readable (no authentication required)
ALTER TABLE public.youtube_channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.youtube_insights ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can view YouTube channels" ON public.youtube_channels FOR SELECT USING (true);
CREATE POLICY "Anyone can view YouTube insights" ON public.youtube_insights FOR SELECT USING (true);
