
-- Insert additional sample profiles
INSERT INTO public.profiles (name, title, company, location, initials, mutual_connections) VALUES
('Priya Sharma', 'Principal Data Scientist', 'Netflix', 'Los Gatos, CA', 'PS', 9),
('Alex Thompson', 'Senior DevOps Engineer', 'Stripe', 'Remote', 'AT', 11),
('Dr. Mohammed Hassan', 'AI Research Director', 'Meta', 'Menlo Park, CA', 'MH', 18),
('Lisa Wang', 'Product Manager', 'Figma', 'San Francisco, CA', 'LW', 7),
('Carlos Rivera', 'Full Stack Engineer', 'Vercel', 'New York, NY', 'CR', 5),
('Dr. Rachel Green', 'Machine Learning Engineer', 'Spotify', 'Stockholm, Sweden', 'RG', 13),
('Jordan Kim', 'Cloud Architect', 'AWS', 'Seattle, WA', 'JK', 16),
('Sofia Martinez', 'UX Research Lead', 'Airbnb', 'San Francisco, CA', 'SM', 10);

-- Insert skills for the new profiles
INSERT INTO public.profile_skills (profile_id, skill) 
SELECT p.id, unnest(skills) FROM (
  SELECT id, ARRAY['Data Science', 'Python', 'SQL'] as skills FROM public.profiles WHERE name = 'Priya Sharma'
  UNION ALL
  SELECT id, ARRAY['DevOps', 'Kubernetes', 'AWS'] FROM public.profiles WHERE name = 'Alex Thompson'
  UNION ALL
  SELECT id, ARRAY['Computer Vision', 'NLP', 'Research'] FROM public.profiles WHERE name = 'Dr. Mohammed Hassan'
  UNION ALL
  SELECT id, ARRAY['Product Strategy', 'Design Systems', 'Analytics'] FROM public.profiles WHERE name = 'Lisa Wang'
  UNION ALL
  SELECT id, ARRAY['React', 'Node.js', 'TypeScript'] FROM public.profiles WHERE name = 'Carlos Rivera'
  UNION ALL
  SELECT id, ARRAY['TensorFlow', 'Audio Processing', 'Scala'] FROM public.profiles WHERE name = 'Dr. Rachel Green'
  UNION ALL
  SELECT id, ARRAY['Cloud Architecture', 'Microservices', 'Infrastructure'] FROM public.profiles WHERE name = 'Jordan Kim'
  UNION ALL
  SELECT id, ARRAY['User Research', 'Design Thinking', 'Prototyping'] FROM public.profiles WHERE name = 'Sofia Martinez'
) p;

-- Insert past companies for the new profiles
INSERT INTO public.profile_past_companies (profile_id, company)
SELECT p.id, unnest(companies) FROM (
  SELECT id, ARRAY['ex-Uber', 'ex-Lyft'] as companies FROM public.profiles WHERE name = 'Priya Sharma'
  UNION ALL
  SELECT id, ARRAY['ex-Docker', 'ex-GitLab'] FROM public.profiles WHERE name = 'Alex Thompson'
  UNION ALL
  SELECT id, ARRAY['ex-DeepMind', 'ex-Stanford'] FROM public.profiles WHERE name = 'Dr. Mohammed Hassan'
  UNION ALL
  SELECT id, ARRAY['ex-Google', 'ex-Dropbox'] FROM public.profiles WHERE name = 'Lisa Wang'
  UNION ALL
  SELECT id, ARRAY['ex-Shopify', 'ex-GitHub'] FROM public.profiles WHERE name = 'Carlos Rivera'
  UNION ALL
  SELECT id, ARRAY['ex-SoundCloud', 'ex-MIT'] FROM public.profiles WHERE name = 'Dr. Rachel Green'
  UNION ALL
  SELECT id, ARRAY['ex-Microsoft', 'ex-VMware'] FROM public.profiles WHERE name = 'Jordan Kim'
  UNION ALL
  SELECT id, ARRAY['ex-IDEO', 'ex-Apple'] FROM public.profiles WHERE name = 'Sofia Martinez'
) p;
