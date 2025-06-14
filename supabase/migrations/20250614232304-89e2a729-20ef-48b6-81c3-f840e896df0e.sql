
-- Create posts table for the post creator functionality
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  post_type TEXT NOT NULL DEFAULT 'general', -- 'general', 'moment', 'checkin'
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create trending_activities table
CREATE TABLE public.trending_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  activity TEXT NOT NULL,
  context TEXT NOT NULL,
  participant_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create user_activity_participation table to track who's participating
CREATE TABLE public.user_activity_participation (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  activity_id UUID REFERENCES public.trending_activities(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, activity_id)
);

-- Create career_moments table for the Real Career Moments section
CREATE TABLE public.career_moments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create career_checkins table for personal reflections
CREATE TABLE public.career_checkins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  mood TEXT, -- optional mood indicator
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create youtube_insights table to track learning content
CREATE TABLE public.youtube_insights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  channel_name TEXT NOT NULL,
  video_title TEXT NOT NULL,
  video_url TEXT,
  upload_time TIMESTAMP WITH TIME ZONE NOT NULL,
  duration TEXT,
  view_count TEXT,
  topics TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trending_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_activity_participation ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_moments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.youtube_insights ENABLE ROW LEVEL SECURITY;

-- RLS Policies for posts
CREATE POLICY "Users can view all posts" ON public.posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can create their own posts" ON public.posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own posts" ON public.posts FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own posts" ON public.posts FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for trending_activities (public read, admin write)
CREATE POLICY "Anyone can view trending activities" ON public.trending_activities FOR SELECT TO authenticated USING (true);
CREATE POLICY "Anyone can insert trending activities" ON public.trending_activities FOR INSERT TO authenticated WITH CHECK (true);

-- RLS Policies for user_activity_participation
CREATE POLICY "Users can view all participation" ON public.user_activity_participation FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can join activities" ON public.user_activity_participation FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can leave activities" ON public.user_activity_participation FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for career_moments
CREATE POLICY "Users can view all career moments" ON public.career_moments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can create their own career moments" ON public.career_moments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own career moments" ON public.career_moments FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own career moments" ON public.career_moments FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for career_checkins (private to user)
CREATE POLICY "Users can view their own checkins" ON public.career_checkins FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own checkins" ON public.career_checkins FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own checkins" ON public.career_checkins FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own checkins" ON public.career_checkins FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for youtube_insights
CREATE POLICY "Users can view their own youtube insights" ON public.youtube_insights FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own youtube insights" ON public.youtube_insights FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Insert some sample trending activities
INSERT INTO public.trending_activities (activity, context, participant_count) VALUES
('Deep-diving into Transformer architectures', 'Understanding attention mechanisms for NLP projects', 127),
('Exploring ethical AI frameworks', 'Building responsible AI systems in production', 89),
('Mastering MLOps best practices', 'Streamlining model deployment and monitoring', 156),
('Customer journey mapping with AI insights', 'Leveraging ML to understand user behavior patterns', 73);

-- Create function to update participant count
CREATE OR REPLACE FUNCTION update_activity_participant_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.trending_activities 
    SET participant_count = participant_count + 1 
    WHERE id = NEW.activity_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.trending_activities 
    SET participant_count = participant_count - 1 
    WHERE id = OLD.activity_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update participant counts
CREATE TRIGGER update_participant_count_trigger
  AFTER INSERT OR DELETE ON public.user_activity_participation
  FOR EACH ROW EXECUTE FUNCTION update_activity_participant_count();
