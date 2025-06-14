
-- First, let's create some sample conversations with the existing profiles
INSERT INTO conversations (id, profile1_id, profile2_id, created_at, last_message_at)
VALUES 
  (gen_random_uuid(), 
   (SELECT id FROM profiles LIMIT 1), 
   (SELECT id FROM profiles OFFSET 1 LIMIT 1),
   NOW() - INTERVAL '2 hours',
   NOW() - INTERVAL '1 hour'
  ),
  (gen_random_uuid(), 
   (SELECT id FROM profiles LIMIT 1), 
   (SELECT id FROM profiles OFFSET 2 LIMIT 1),
   NOW() - INTERVAL '1 day',
   NOW() - INTERVAL '3 hours'
  );

-- Now let's add some sample messages to these conversations
INSERT INTO messages (id, conversation_id, sender_profile_id, content, created_at)
VALUES 
  (gen_random_uuid(),
   (SELECT id FROM conversations LIMIT 1),
   (SELECT profile2_id FROM conversations LIMIT 1),
   'Hi! I saw your work on AI research and would love to connect.',
   NOW() - INTERVAL '1 hour'
  ),
  (gen_random_uuid(),
   (SELECT id FROM conversations LIMIT 1),
   (SELECT profile1_id FROM conversations LIMIT 1),
   'Thanks for reaching out! I''d be happy to discuss our research.',
   NOW() - INTERVAL '30 minutes'
  ),
  (gen_random_uuid(),
   (SELECT id FROM conversations OFFSET 1 LIMIT 1),
   (SELECT profile2_id FROM conversations OFFSET 1 LIMIT 1),
   'Hello! I''m interested in collaborating on machine learning projects.',
   NOW() - INTERVAL '3 hours'
  );

-- Also let's add a sample connection request
INSERT INTO connection_requests (id, sender_profile_id, receiver_profile_id, message, status, created_at)
VALUES 
  (gen_random_uuid(),
   (SELECT id FROM profiles OFFSET 3 LIMIT 1),
   (SELECT id FROM profiles LIMIT 1),
   'I''d love to connect and discuss AI ethics research.',
   'pending',
   NOW() - INTERVAL '4 hours'
  );
