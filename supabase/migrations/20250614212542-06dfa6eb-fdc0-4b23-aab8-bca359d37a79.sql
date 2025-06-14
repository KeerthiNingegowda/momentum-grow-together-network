
-- Create profiles table for network users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  initials TEXT NOT NULL,
  image_url TEXT,
  mutual_connections INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE public.profile_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  skill TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create past companies table
CREATE TABLE public.profile_past_companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create connections table to track who is connected to whom
CREATE TABLE public.user_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  connected_profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  is_connected BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, connected_profile_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_past_companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_connections ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles (everyone can view profiles for networking)
CREATE POLICY "Anyone can view profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for skills
CREATE POLICY "Anyone can view skills" ON public.profile_skills FOR SELECT USING (true);
CREATE POLICY "Users can manage own skills" ON public.profile_skills FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = profile_id AND user_id = auth.uid())
);

-- RLS Policies for past companies
CREATE POLICY "Anyone can view past companies" ON public.profile_past_companies FOR SELECT USING (true);
CREATE POLICY "Users can manage own past companies" ON public.profile_past_companies FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = profile_id AND user_id = auth.uid())
);

-- RLS Policies for connections
CREATE POLICY "Users can view their connections" ON public.user_connections FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their connections" ON public.user_connections FOR ALL USING (auth.uid() = user_id);

-- Insert sample data
INSERT INTO public.profiles (name, title, company, location, initials, image_url, mutual_connections) VALUES
('Dr. Sarah Chen', 'Senior AI Research Scientist', 'Google DeepMind', 'London, UK', 'SC', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face', 12),
('Marcus Rodriguez', 'Principal ML Engineer', 'Tesla', 'Austin, TX', 'MR', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', 8),
('Dr. Aisha Patel', 'Head of AI Ethics', 'Microsoft', 'Seattle, WA', 'AP', 'https://images.unsplash.com/photo-1594736797933-d0a71abcbe5a?w=400&h=400&fit=crop&crop=face', 15),
('James Liu', 'Staff Software Engineer', 'OpenAI', 'San Francisco, CA', 'JL', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', 6),
('Dr. Elena Kowalski', 'Robotics Research Lead', 'Boston Dynamics', 'Boston, MA', 'EK', 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face', 4),
('David Kim', 'VP of Engineering', 'Anthropic', 'San Francisco, CA', 'DK', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face', 22);

-- Insert skills for each profile
INSERT INTO public.profile_skills (profile_id, skill) 
SELECT p.id, unnest(skills) FROM (
  SELECT id, ARRAY['Machine Learning', 'Computer Vision', 'PyTorch'] as skills FROM public.profiles WHERE name = 'Dr. Sarah Chen'
  UNION ALL
  SELECT id, ARRAY['Autonomous Systems', 'Deep Learning', 'Python'] FROM public.profiles WHERE name = 'Marcus Rodriguez'
  UNION ALL
  SELECT id, ARRAY['AI Ethics', 'Policy', 'Research'] FROM public.profiles WHERE name = 'Dr. Aisha Patel'
  UNION ALL
  SELECT id, ARRAY['LLMs', 'Distributed Systems', 'Rust'] FROM public.profiles WHERE name = 'James Liu'
  UNION ALL
  SELECT id, ARRAY['Robotics', 'Control Systems', 'C++'] FROM public.profiles WHERE name = 'Dr. Elena Kowalski'
  UNION ALL
  SELECT id, ARRAY['Leadership', 'AI Safety', 'Scaling'] FROM public.profiles WHERE name = 'David Kim'
) p;

-- Insert past companies
INSERT INTO public.profile_past_companies (profile_id, company)
SELECT p.id, unnest(companies) FROM (
  SELECT id, ARRAY['ex-OpenAI', 'ex-Stanford'] as companies FROM public.profiles WHERE name = 'Dr. Sarah Chen'
  UNION ALL
  SELECT id, ARRAY['ex-Waymo', 'ex-Uber'] FROM public.profiles WHERE name = 'Marcus Rodriguez'
  UNION ALL
  SELECT id, ARRAY['ex-Google', 'ex-MIT'] FROM public.profiles WHERE name = 'Dr. Aisha Patel'
  UNION ALL
  SELECT id, ARRAY['ex-Anthropic'] FROM public.profiles WHERE name = 'James Liu'
  UNION ALL
  SELECT id, ARRAY['ex-iRobot', 'ex-NASA'] FROM public.profiles WHERE name = 'Dr. Elena Kowalski'
  UNION ALL
  SELECT id, ARRAY['ex-Lovable', 'ex-Meta'] FROM public.profiles WHERE name = 'David Kim'
) p;
