
-- Create connection_requests table to store pending connection requests
CREATE TABLE public.connection_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  receiver_profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create conversations table to store accepted conversations
CREATE TABLE public.conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile1_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  profile2_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_message_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  archived_by_profile1 BOOLEAN NOT NULL DEFAULT false,
  archived_by_profile2 BOOLEAN NOT NULL DEFAULT false,
  UNIQUE(profile1_id, profile2_id)
);

-- Create messages table to store individual messages
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_read BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS on all tables
ALTER TABLE public.connection_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS policies for connection_requests
CREATE POLICY "Users can view connection requests they sent or received" 
  ON public.connection_requests 
  FOR SELECT 
  USING (
    sender_profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) OR
    receiver_profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can create connection requests" 
  ON public.connection_requests 
  FOR INSERT 
  WITH CHECK (sender_profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Users can update connection requests they received" 
  ON public.connection_requests 
  FOR UPDATE 
  USING (receiver_profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- RLS policies for conversations
CREATE POLICY "Users can view their own conversations" 
  ON public.conversations 
  FOR SELECT 
  USING (
    profile1_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) OR
    profile2_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can create conversations" 
  ON public.conversations 
  FOR INSERT 
  WITH CHECK (
    profile1_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) OR
    profile2_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can update their own conversations" 
  ON public.conversations 
  FOR UPDATE 
  USING (
    profile1_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) OR
    profile2_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  );

-- RLS policies for messages
CREATE POLICY "Users can view messages in their conversations" 
  ON public.messages 
  FOR SELECT 
  USING (
    conversation_id IN (
      SELECT id FROM public.conversations 
      WHERE profile1_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) 
         OR profile2_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
    )
  );

CREATE POLICY "Users can create messages in their conversations" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (
    sender_profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) AND
    conversation_id IN (
      SELECT id FROM public.conversations 
      WHERE profile1_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) 
         OR profile2_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
    )
  );

CREATE POLICY "Users can update messages in their conversations" 
  ON public.messages 
  FOR UPDATE 
  USING (
    conversation_id IN (
      SELECT id FROM public.conversations 
      WHERE profile1_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()) 
         OR profile2_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
    )
  );

-- Create function to update last_message_at when new message is sent
CREATE OR REPLACE FUNCTION update_conversation_last_message()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.conversations 
  SET last_message_at = NEW.created_at 
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update last_message_at
CREATE TRIGGER update_conversation_last_message_trigger
  AFTER INSERT ON public.messages
  FOR EACH ROW
  EXECUTE FUNCTION update_conversation_last_message();
