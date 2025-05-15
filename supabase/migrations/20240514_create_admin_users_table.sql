
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Add Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow admins to see other admin users
CREATE POLICY "Admins can see admin users" 
ON public.admin_users 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()
  )
);

-- Allow service role to manage admin users
CREATE POLICY "Service role can manage admin users" 
ON public.admin_users 
USING (true)
WITH CHECK (true);
