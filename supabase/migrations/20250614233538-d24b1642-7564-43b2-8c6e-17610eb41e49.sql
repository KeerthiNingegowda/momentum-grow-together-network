
-- Create a table to store user YouTube channel preferences
CREATE TABLE public.user_youtube_channels (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  channel_name TEXT NOT NULL,
  channel_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, channel_name)
);

-- Add Row Level Security (RLS)
ALTER TABLE public.user_youtube_channels ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own YouTube channels" 
  ON public.user_youtube_channels 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own YouTube channels" 
  ON public.user_youtube_channels 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own YouTube channels" 
  ON public.user_youtube_channels 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own YouTube channels" 
  ON public.user_youtube_channels 
  FOR DELETE 
  USING (auth.uid() = user_id);
