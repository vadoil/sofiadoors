DELETE FROM public.projects WHERE image_url IS NULL OR image_url NOT LIKE 'https://framyr.ru/%';
DELETE FROM public.news WHERE image_url IS NULL OR image_url NOT LIKE 'https://framyr.ru/%';