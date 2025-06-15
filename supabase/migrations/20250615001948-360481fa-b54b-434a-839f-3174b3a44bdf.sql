
-- Clear existing sample data and add new realistic trending activities with better participant counts
DELETE FROM public.trending_activities;

INSERT INTO public.trending_activities (activity, context, participant_count, is_active) VALUES
('Exploring prompt engineering techniques', 'Learning advanced strategies for getting better results from AI models like GPT-4, Claude, and local LLMs', 342, true),
('Building full-stack applications with Next.js 14', 'Diving deep into App Router, Server Components, and modern React patterns for production apps', 287, true),
('Mastering data visualization with D3.js', 'Creating interactive charts and dashboards that tell compelling stories with complex datasets', 156, true),
('Understanding microservices architecture patterns', 'Breaking down monoliths and designing scalable distributed systems with proper service boundaries', 423, true),
('Learning Rust for systems programming', 'Exploring memory safety, performance optimization, and building high-performance applications', 198, true),
('Implementing OAuth 2.0 and JWT authentication', 'Securing modern web applications with proper token-based authentication and authorization flows', 234, true),
('Deep diving into PostgreSQL performance tuning', 'Optimizing queries, indexing strategies, and database design for high-traffic applications', 167, true),
('Building AI-powered chatbots with RAG', 'Integrating retrieval-augmented generation for context-aware conversational AI applications', 389, true),
('Exploring Kubernetes deployment strategies', 'Container orchestration, rolling updates, and managing production workloads at scale', 445, true),
('Understanding TypeScript advanced patterns', 'Leveraging generics, conditional types, and mapped types for type-safe application development', 312, true);
