
-- Insert additional job postings
INSERT INTO public.jobs (id, title, company, location, type, salary, posted, description, complexity, problem_type, team_size, confidence_score, satisfaction_score, avg_tenure, diversity_score, mentorship_program, work_style, vibe, values) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'Machine Learning Engineer', 'DataFlow Systems', 'Seattle, WA', 'Full-time', '$140k - $180k', '5 days ago', 'Join our ML team to build and deploy scalable machine learning models for real-time data processing. You''ll work on computer vision, NLP, and recommendation systems that serve millions of users daily. Experience with MLOps, model deployment, and distributed systems required.', 'High', 'Machine Learning', '6-8 people', 88, 4.4, '2.8 years', 'High', true, 'Hybrid - 2 days in office', 'Innovation-driven, collaborative', ARRAY['Innovation', 'Learning', 'Impact']),
('550e8400-e29b-41d4-a716-446655440005', 'Data Engineer', 'CloudTech Solutions', 'Austin, TX', 'Full-time', '$110k - $150k', '1 day ago', 'Build and maintain data pipelines that process petabytes of data daily. You''ll design ETL processes, optimize data warehouses, and ensure data quality across our platform. Strong experience with cloud platforms, streaming technologies, and data modeling required.', 'Medium', 'Data Engineering', '10-12 people', 72, 4.1, '3.5 years', 'Medium', true, 'In-office focused', 'Results-oriented, team-first', ARRAY['Growth', 'Collaboration', 'Excellence']);

-- Insert tech stack data for new jobs
INSERT INTO public.job_tech_stack (job_id, category, technologies, color, description) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'ML Frameworks', ARRAY['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'MLflow'], '#8b5cf6', 'Advanced ML frameworks and model management'),
('550e8400-e29b-41d4-a716-446655440004', 'Programming', ARRAY['Python', 'Scala', 'SQL', 'Go'], '#10b981', 'Core programming languages for ML and backend'),
('550e8400-e29b-41d4-a716-446655440004', 'Cloud & MLOps', ARRAY['AWS SageMaker', 'Kubernetes', 'Docker', 'Airflow', 'Terraform'], '#f59e0b', 'Cloud infrastructure and ML operations'),
('550e8400-e29b-41d4-a716-446655440004', 'Data & Monitoring', ARRAY['Kafka', 'Redis', 'Prometheus', 'Grafana'], '#ef4444', 'Real-time data processing and monitoring'),
('550e8400-e29b-41d4-a716-446655440005', 'Data Processing', ARRAY['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Pandas'], '#06b6d4', 'Big data processing and orchestration'),
('550e8400-e29b-41d4-a716-446655440005', 'Cloud Platforms', ARRAY['AWS', 'Snowflake', 'Redshift', 'S3', 'Lambda'], '#f59e0b', 'Cloud data infrastructure and storage'),
('550e8400-e29b-41d4-a716-446655440005', 'Programming', ARRAY['Python', 'SQL', 'Java', 'Scala'], '#10b981', 'Programming languages for data engineering'),
('550e8400-e29b-41d4-a716-446655440005', 'Monitoring', ARRAY['DataDog', 'New Relic', 'Grafana', 'PagerDuty'], '#8b5cf6', 'Data pipeline monitoring and alerting');

-- Insert company insights for new jobs
INSERT INTO public.job_company_insights (job_id, category, details, color, description) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'Employee Satisfaction', ARRAY['4.4/5 employee rating', '95% retention rate', 'Strong learning culture'], '#10b981', 'High employee satisfaction and retention'),
('550e8400-e29b-41d4-a716-446655440004', 'Culture & Management', ARRAY['Agile methodology', 'Weekly 1:1s', 'Innovation time 20%', 'Flat structure'], '#3b82f6', 'Modern management and development practices'),
('550e8400-e29b-41d4-a716-446655440004', 'Company Health', ARRAY['Series B funded ($25M)', '150% revenue growth', 'Fortune 500 clients'], '#f59e0b', 'Strong financial position and growth'),
('550e8400-e29b-41d4-a716-446655440004', 'Benefits & Perks', ARRAY['Stock options', '$3k education budget', 'Flexible hours', 'Mental health support'], '#8b5cf6', 'Comprehensive benefits and wellness focus'),
('550e8400-e29b-41d4-a716-446655440005', 'Employee Satisfaction', ARRAY['4.1/5 Glassdoor rating', 'Good work-life balance', 'Career advancement opportunities'], '#10b981', 'Solid employee satisfaction and growth opportunities'),
('550e8400-e29b-41d4-a716-446655440005', 'Culture & Management', ARRAY['Collaborative teams', 'Monthly reviews', 'Mentorship program', 'Cross-training'], '#3b82f6', 'Team-focused culture with development support'),
('550e8400-e29b-41d4-a716-446655440005', 'Company Health', ARRAY['Profitable for 5+ years', 'Enterprise clients', 'Expanding internationally'], '#f59e0b', 'Stable and expanding business'),
('550e8400-e29b-41d4-a716-446655440005', 'Benefits & Perks', ARRAY['401k with match', 'Health & dental', '$2k conference budget', 'Remote work stipend'], '#8b5cf6', 'Standard benefits with professional development');

-- Insert perks for new jobs
INSERT INTO public.job_perks (job_id, icon, label) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'Zap', 'Innovation time 20%'),
('550e8400-e29b-41d4-a716-446655440004', 'Heart', 'Mental health support'),
('550e8400-e29b-41d4-a716-446655440004', 'Users', '$3k education budget'),
('550e8400-e29b-41d4-a716-446655440005', 'Coffee', 'Remote work stipend'),
('550e8400-e29b-41d4-a716-446655440005', 'Heart', 'Health & dental coverage'),
('550e8400-e29b-41d4-a716-446655440005', 'Users', '$2k conference budget');

-- Insert feedback for new jobs
INSERT INTO public.job_feedback (job_id, text, rating) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'Amazing learning opportunities and cutting-edge projects', 5),
('550e8400-e29b-41d4-a716-446655440004', 'Great team culture and work-life balance', 4),
('550e8400-e29b-41d4-a716-446655440005', 'Solid company with good growth opportunities', 4),
('550e8400-e29b-41d4-a716-446655440005', 'Collaborative environment, good for learning', 4);
