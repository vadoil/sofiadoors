-- Таблица проектов портфолио
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  designer TEXT NOT NULL DEFAULT '',
  style TEXT NOT NULL DEFAULT 'Современные',
  room TEXT NOT NULL DEFAULT 'Квартира',
  collection TEXT NOT NULL DEFAULT '',
  image_url TEXT,
  description TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON public.projects FOR SELECT
  USING (true);

CREATE POLICY "Allow all insert on projects"
  ON public.projects FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow all update on projects"
  ON public.projects FOR UPDATE
  USING (true);

CREATE POLICY "Allow all delete on projects"
  ON public.projects FOR DELETE
  USING (true);

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket для фото портфолио
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-images', 'portfolio-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Portfolio images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Anyone can upload portfolio images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'portfolio-images');

CREATE POLICY "Anyone can update portfolio images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Anyone can delete portfolio images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'portfolio-images');