
-- Create the main jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  salary TEXT NOT NULL,
  posted TEXT NOT NULL,
  description TEXT NOT NULL,
  complexity TEXT,
  problem_type TEXT,
  team_size TEXT,
  confidence_score INTEGER DEFAULT 50,
  satisfaction_score DECIMAL(2,1) DEFAULT 3.0,
  avg_tenure TEXT,
  diversity_score TEXT,
  mentorship_program BOOLEAN DEFAULT false,
  work_style TEXT,
  vibe TEXT,
  values TEXT[], -- Array of values
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tech stack table for job requirements
CREATE TABLE public.job_tech_stack (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  technologies TEXT[] NOT NULL, -- Array of technologies
  color TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company insights table
CREATE TABLE public.job_company_insights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  details TEXT[] NOT NULL, -- Array of insight details
  color TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create perks table
CREATE TABLE public.job_perks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  icon TEXT NOT NULL,
  label TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create feedback table
CREATE TABLE public.job_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) - making data publicly readable for now
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_tech_stack ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_company_insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_perks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_feedback ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access (no authentication required)
CREATE POLICY "Allow public read access to jobs" ON public.jobs FOR SELECT USING (true);
CREATE POLICY "Allow public read access to tech stack" ON public.job_tech_stack FOR SELECT USING (true);
CREATE POLICY "Allow public read access to company insights" ON public.job_company_insights FOR SELECT USING (true);
CREATE POLICY "Allow public read access to perks" ON public.job_perks FOR SELECT USING (true);
CREATE POLICY "Allow public read access to feedback" ON public.job_feedback FOR SELECT USING (true);

-- Insert sample data from your existing job listings
INSERT INTO public.jobs (id, title, company, location, type, salary, posted, description, complexity, problem_type, team_size, confidence_score, satisfaction_score, avg_tenure, diversity_score, mentorship_program, work_style, vibe, values) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Senior Data Scientist', 'TechCorp Inc.', 'San Francisco, CA', 'Full-time', '$120k - $160k', '2 days ago', 'We''re looking for a senior data scientist to lead our ML initiatives and drive business insights. You''ll work with cross-functional teams to develop predictive models, analyze large datasets, and translate complex findings into actionable business strategies. Experience with deep learning, statistical modeling, and data visualization is essential.', 'Medium', 'Business Analytics', '8-12 people', 75, 4.2, '2.5 years', 'High', true, 'Hybrid - 3 days in office', 'Fast-paced, collaborative', ARRAY['Innovation', 'Work-life balance', 'Growth mindset']),
('550e8400-e29b-41d4-a716-446655440002', 'AI Engineer', 'Innovation Labs', 'Remote', 'Contract', '$80 - $120/hr', '1 week ago', 'Join our team to build cutting-edge AI solutions for enterprise clients. You''ll architect and implement computer vision systems, work with large language models, and optimize AI pipelines for production environments. Strong experience in deep learning research and practical AI deployment required.', 'Very High', 'Computer Vision', '4-6 people', 92, 4.6, '3.2 years', 'Medium', false, 'Fully remote', 'Cutting-edge, research-focused', ARRAY['Innovation', 'Technical excellence', 'Autonomy']),
('550e8400-e29b-41d4-a716-446655440003', 'Data Analytics Manager', 'GrowthCorp', 'New York, NY', 'Full-time', '$100k - $140k', '3 days ago', 'Lead a team of data analysts and drive strategic decision-making through data insights. You''ll oversee dashboard development, establish data governance practices, and collaborate with executive leadership to identify growth opportunities. Strong leadership and business acumen required alongside technical expertise.', 'Medium', 'Business Analytics', '12-15 people', 50, 3.8, '4.1 years', 'Medium', true, 'In-office focused', 'Traditional, structured', ARRAY['Reliability', 'Teamwork', 'Results-driven']);

-- Insert tech stack data
INSERT INTO public.job_tech_stack (job_id, category, technologies, color, description) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Machine Learning', ARRAY['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Keras'], '#3b82f6', 'Advanced ML frameworks for model development and training'),
('550e8400-e29b-41d4-a716-446655440001', 'Data Processing', ARRAY['Python', 'SQL', 'Apache Spark', 'Pandas', 'NumPy'], '#10b981', 'Core data manipulation and analysis tools'),
('550e8400-e29b-41d4-a716-446655440001', 'Cloud & Infrastructure', ARRAY['AWS SageMaker', 'Docker', 'Kubernetes', 'MLflow'], '#f59e0b', 'Scalable deployment and model management platforms'),
('550e8400-e29b-41d4-a716-446655440001', 'Visualization', ARRAY['Tableau', 'PowerBI', 'Matplotlib', 'D3.js'], '#8b5cf6', 'Data visualization and business intelligence tools'),
('550e8400-e29b-41d4-a716-446655440002', 'AI/ML Frameworks', ARRAY['PyTorch', 'OpenCV', 'Transformers', 'CUDA', 'TensorRT'], '#8b5cf6', 'Advanced AI frameworks for computer vision and NLP'),
('550e8400-e29b-41d4-a716-446655440002', 'Backend Systems', ARRAY['FastAPI', 'Docker', 'Redis', 'PostgreSQL'], '#ef4444', 'High-performance backend infrastructure'),
('550e8400-e29b-41d4-a716-446655440002', 'Cloud AI Services', ARRAY['GCP Vertex AI', 'TPU', 'Cloud Storage', 'BigQuery'], '#f59e0b', 'Google Cloud AI and data processing services'),
('550e8400-e29b-41d4-a716-446655440002', 'Development Tools', ARRAY['Git', 'Jupyter', 'Weights & Biases', 'DVC'], '#06b6d4', 'Version control and experiment tracking tools'),
('550e8400-e29b-41d4-a716-446655440003', 'Business Intelligence', ARRAY['Tableau', 'PowerBI', 'Looker', 'Google Analytics'], '#06b6d4', 'Enterprise BI and analytics platforms'),
('550e8400-e29b-41d4-a716-446655440003', 'Data Engineering', ARRAY['SQL', 'Python', 'dbt', 'Apache Airflow'], '#10b981', 'Data transformation and pipeline orchestration'),
('550e8400-e29b-41d4-a716-446655440003', 'Data Warehouse', ARRAY['Snowflake', 'BigQuery', 'Redshift', 'S3'], '#6366f1', 'Cloud data warehousing and storage solutions'),
('550e8400-e29b-41d4-a716-446655440003', 'Collaboration', ARRAY['Git', 'Slack', 'Jira', 'Confluence'], '#84cc16', 'Team collaboration and project management tools');

-- Insert company insights data
INSERT INTO public.job_company_insights (job_id, category, details, color, description) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Employee Satisfaction', ARRAY['4.2/5 Glassdoor rating', '92% would recommend to friend', 'Strong career growth opportunities'], '#10b981', 'Overall employee satisfaction and workplace ratings'),
('550e8400-e29b-41d4-a716-446655440001', 'Culture & Management', ARRAY['Flat hierarchy', 'Quarterly 1:1s', 'Transparent communication', 'Results-focused'], '#3b82f6', 'Management style and company culture characteristics'),
('550e8400-e29b-41d4-a716-446655440001', 'Company Health', ARRAY['Series C funded ($50M)', '200% revenue growth YoY', 'Expanding to 3 new markets'], '#f59e0b', 'Recent funding, growth metrics, and business trajectory'),
('550e8400-e29b-41d4-a716-446655440001', 'Benefits & Perks', ARRAY['Equity package included', 'Free meals & snacks', '$2k learning budget', '4 weeks PTO'], '#8b5cf6', 'Compensation benefits and workplace perks'),
('550e8400-e29b-41d4-a716-446655440002', 'Employee Satisfaction', ARRAY['4.6/5 internal rating', 'High technical autonomy', 'Challenging projects'], '#10b981', 'Employee satisfaction and work environment quality'),
('550e8400-e29b-41d4-a716-446655440002', 'Culture & Management', ARRAY['Self-managing teams', 'Quarterly reviews only', 'Research-first mindset', 'Remote-native'], '#3b82f6', 'Management approach and cultural characteristics'),
('550e8400-e29b-41d4-a716-446655440002', 'Company Health', ARRAY['Bootstrap profitable', '40+ enterprise clients', 'AI consulting leader'], '#f59e0b', 'Financial stability and market position'),
('550e8400-e29b-41d4-a716-446655440002', 'Benefits & Perks', ARRAY['Top-tier equipment', '$5k conference budget', 'Flexible PTO', 'Performance bonuses'], '#8b5cf6', 'Compensation and professional development benefits'),
('550e8400-e29b-41d4-a716-446655440003', 'Employee Satisfaction', ARRAY['3.8/5 Glassdoor rating', 'Stable work environment', 'Good for work-life balance'], '#10b981', 'Employee satisfaction and workplace stability'),
('550e8400-e29b-41d4-a716-446655440003', 'Culture & Management', ARRAY['Traditional hierarchy', 'Monthly team meetings', 'Process-oriented', 'Structured reviews'], '#3b82f6', 'Management structure and organizational culture'),
('550e8400-e29b-41d4-a716-446655440003', 'Company Health', ARRAY['Public company (NYSE: GROW)', 'Stock: $45.20 (+2.1%)', 'Dividend paying', 'Fortune 500'], '#f59e0b', 'Public company status and financial performance'),
('550e8400-e29b-41d4-a716-446655440003', 'Benefits & Perks', ARRAY['401k matching 6%', 'On-site gym & cafe', 'Health insurance', 'Team events'], '#8b5cf6', 'Traditional corporate benefits package');

-- Insert perks data
INSERT INTO public.job_perks (job_id, icon, label) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Coffee', 'Free meals & snacks'),
('550e8400-e29b-41d4-a716-446655440001', 'Heart', 'Comprehensive health coverage'),
('550e8400-e29b-41d4-a716-446655440001', 'Zap', 'Learning stipend $2k/year'),
('550e8400-e29b-41d4-a716-446655440002', 'Zap', 'Top-tier equipment provided'),
('550e8400-e29b-41d4-a716-446655440002', 'Users', 'Conference budget $5k/year'),
('550e8400-e29b-41d4-a716-446655440002', 'Heart', 'Flexible PTO policy'),
('550e8400-e29b-41d4-a716-446655440003', 'Heart', '401k matching 6%'),
('550e8400-e29b-41d4-a716-446655440003', 'Coffee', 'On-site gym & cafe'),
('550e8400-e29b-41d4-a716-446655440003', 'Users', 'Team building events');

-- Insert feedback data
INSERT INTO public.job_feedback (job_id, text, rating) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Great mentorship and learning opportunities', 5),
('550e8400-e29b-41d4-a716-446655440001', 'Good work-life balance, flexible hours', 4),
('550e8400-e29b-41d4-a716-446655440002', 'Incredible technical challenges and growth', 5),
('550e8400-e29b-41d4-a716-446655440002', 'Very autonomous, great for self-starters', 4),
('550e8400-e29b-41d4-a716-446655440003', 'Stable environment, good for families', 4),
('550e8400-e29b-41d4-a716-446655440003', 'Process-heavy, slower pace of innovation', 3);
