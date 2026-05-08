
INSERT INTO storage.buckets (id, name, public) VALUES ('member-photos', 'member-photos', true) ON CONFLICT DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('member-cvs', 'member-cvs', true) ON CONFLICT DO NOTHING;

DO $$ BEGIN
  CREATE POLICY "Member photos publicly readable" ON storage.objects FOR SELECT USING (bucket_id = 'member-photos');
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Members upload their own photo" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'member-photos' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Members update their own photo" ON storage.objects FOR UPDATE USING (bucket_id = 'member-photos' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Members delete their own photo" ON storage.objects FOR DELETE USING (bucket_id = 'member-photos' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Member CVs publicly readable" ON storage.objects FOR SELECT USING (bucket_id = 'member-cvs');
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Members upload their own CV" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'member-cvs' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Members update their own CV" ON storage.objects FOR UPDATE USING (bucket_id = 'member-cvs' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE POLICY "Members delete their own CV" ON storage.objects FOR DELETE USING (bucket_id = 'member-cvs' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN null; END $$;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role TEXT,
  ADD COLUMN IF NOT EXISTS cv_url TEXT,
  ADD COLUMN IF NOT EXISTS availability TEXT DEFAULT 'Disponible';

CREATE TABLE IF NOT EXISTS public.filmography (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role_category TEXT NOT NULL,
  title TEXT NOT NULL,
  year INTEGER,
  details TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.filmography ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN CREATE POLICY "Filmography viewable by everyone" ON public.filmography FOR SELECT USING (true); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE POLICY "Members insert filmography" ON public.filmography FOR INSERT WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE POLICY "Members update filmography" ON public.filmography FOR UPDATE USING (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE POLICY "Members delete filmography" ON public.filmography FOR DELETE USING (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN null; END $$;
DROP TRIGGER IF EXISTS update_filmography_updated_at ON public.filmography;
CREATE TRIGGER update_filmography_updated_at BEFORE UPDATE ON public.filmography FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.member_news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  published_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.member_news ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN CREATE POLICY "Member news viewable by everyone" ON public.member_news FOR SELECT USING (true); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE POLICY "Members create news" ON public.member_news FOR INSERT WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE POLICY "Members update news" ON public.member_news FOR UPDATE USING (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE POLICY "Members delete news" ON public.member_news FOR DELETE USING (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN null; END $$;
DROP TRIGGER IF EXISTS update_member_news_updated_at ON public.member_news;
CREATE TRIGGER update_member_news_updated_at BEFORE UPDATE ON public.member_news FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
