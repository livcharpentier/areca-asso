-- Fix critical security issues on profiles table

-- Drop the overly permissive public policy
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

-- Only allow authenticated users to view profiles
CREATE POLICY "Authenticated users can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

-- Allow users to delete their own profile (GDPR compliance)
CREATE POLICY "Users can delete their own profile"
ON public.profiles
FOR DELETE
TO authenticated
USING (auth.uid() = id);