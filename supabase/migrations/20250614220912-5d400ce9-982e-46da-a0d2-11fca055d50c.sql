
-- First, let's insert some sample profiles to have conversations with
INSERT INTO public.profiles (id, name, title, company, initials, location) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Sarah Chen', 'AI Research Scientist', 'DeepMind', 'SC', 'London, UK'),
('550e8400-e29b-41d4-a716-446655440002', 'Marcus Johnson', 'Machine Learning Engineer', 'OpenAI', 'MJ', 'San Francisco, CA'),
('550e8400-e29b-41d4-a716-446655440003', 'Elena Rodriguez', 'Data Science Lead', 'Meta', 'ER', 'Menlo Park, CA'),
('550e8400-e29b-41d4-a716-446655440004', 'David Kim', 'AI Product Manager', 'Google', 'DK', 'Mountain View, CA');

-- Create conversations between the main profile and these users
-- Note: We'll use the first profile ID from the existing profiles table as the main user
INSERT INTO public.conversations (id, profile1_id, profile2_id, created_at, last_message_at) VALUES
('660e8400-e29b-41d4-a716-446655440001', 
 (SELECT id FROM public.profiles LIMIT 1), 
 '550e8400-e29b-41d4-a716-446655440001', 
 NOW() - INTERVAL '2 days', 
 NOW() - INTERVAL '1 hour'),
('660e8400-e29b-41d4-a716-446655440002', 
 (SELECT id FROM public.profiles LIMIT 1), 
 '550e8400-e29b-41d4-a716-446655440002', 
 NOW() - INTERVAL '5 days', 
 NOW() - INTERVAL '3 hours'),
('660e8400-e29b-41d4-a716-446655440003', 
 (SELECT id FROM public.profiles LIMIT 1), 
 '550e8400-e29b-41d4-a716-446655440003', 
 NOW() - INTERVAL '1 week', 
 NOW() - INTERVAL '2 days');

-- Add some sample messages to these conversations
INSERT INTO public.messages (conversation_id, sender_profile_id, content, created_at) VALUES
-- Conversation with Sarah Chen
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 
 'Hi! I saw your work on neural architecture search. Really impressive results on the CIFAR-10 benchmarks!', 
 NOW() - INTERVAL '2 days'),
('660e8400-e29b-41d4-a716-446655440001', (SELECT id FROM public.profiles LIMIT 1), 
 'Thank you! Your research on transformer efficiency caught my attention too. Would love to discuss potential collaboration opportunities.', 
 NOW() - INTERVAL '2 days' + INTERVAL '30 minutes'),
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 
 'Absolutely! I''m particularly interested in how we might apply your pruning techniques to our latest models.', 
 NOW() - INTERVAL '1 hour'),

-- Conversation with Marcus Johnson
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 
 'Hey! Loved your presentation at NeurIPS. The section on distributed training was especially insightful.', 
 NOW() - INTERVAL '5 days'),
('660e8400-e29b-41d4-a716-446655440002', (SELECT id FROM public.profiles LIMIT 1), 
 'Thanks Marcus! Your work on model parallelization is groundbreaking. How are you handling the communication overhead?', 
 NOW() - INTERVAL '5 days' + INTERVAL '2 hours'),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 
 'We''ve been experimenting with gradient compression and asynchronous updates. Happy to share our findings!', 
 NOW() - INTERVAL '3 hours'),

-- Conversation with Elena Rodriguez
('660e8400-e29b-41d4-a716-446655440003', (SELECT id FROM public.profiles LIMIT 1), 
 'Elena, I noticed we both worked on similar problems with recommendation systems. Would you be interested in comparing approaches?', 
 NOW() - INTERVAL '1 week'),
('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', 
 'Definitely! I''d love to hear about your approach to handling cold start problems.', 
 NOW() - INTERVAL '1 week' + INTERVAL '4 hours'),
('660e8400-e29b-41d4-a716-446655440003', (SELECT id FROM public.profiles LIMIT 1), 
 'We''ve been using a hybrid approach combining collaborative filtering with content-based methods. Works quite well for new users.', 
 NOW() - INTERVAL '2 days');

-- Add a pending connection request from David Kim
INSERT INTO public.connection_requests (sender_profile_id, receiver_profile_id, message, created_at) VALUES
('550e8400-e29b-41d4-a716-446655440004', 
 (SELECT id FROM public.profiles LIMIT 1), 
 'Hi! I''m working on AI product strategy and would love to connect. Your technical insights would be invaluable for our roadmap planning.', 
 NOW() - INTERVAL '1 day');
