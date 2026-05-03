DELETE FROM public.projects WHERE image_url NOT LIKE '%dev2fun.imagecompress%';

ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS source_url TEXT;
ALTER TABLE public.news ADD COLUMN IF NOT EXISTS source_url TEXT;