-- Add category and content fields to news
ALTER TABLE public.news 
  ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'Статьи',
  ADD COLUMN IF NOT EXISTS content TEXT;

-- Trigger for updated_at
DROP TRIGGER IF EXISTS news_updated_at ON public.news;
CREATE TRIGGER news_updated_at
BEFORE UPDATE ON public.news
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for news images
INSERT INTO storage.buckets (id, name, public)
VALUES ('news-images', 'news-images', true)
ON CONFLICT (id) DO NOTHING;

-- Public read, public write (admin panel is unprotected as per current setup)
DROP POLICY IF EXISTS "Public can read news images" ON storage.objects;
CREATE POLICY "Public can read news images"
ON storage.objects FOR SELECT
USING (bucket_id = 'news-images');

DROP POLICY IF EXISTS "Public can upload news images" ON storage.objects;
CREATE POLICY "Public can upload news images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'news-images');

DROP POLICY IF EXISTS "Public can update news images" ON storage.objects;
CREATE POLICY "Public can update news images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'news-images');

DROP POLICY IF EXISTS "Public can delete news images" ON storage.objects;
CREATE POLICY "Public can delete news images"
ON storage.objects FOR DELETE
USING (bucket_id = 'news-images');