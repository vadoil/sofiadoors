UPDATE public.news
SET image_url = REPLACE(image_url, 'https://hzkamwrrxcsywbpsgcsd.supabase.co', 'https://api.framyr-samara.ru')
WHERE image_url LIKE 'https://hzkamwrrxcsywbpsgcsd.supabase.co%';

UPDATE public.projects
SET image_url = REPLACE(image_url, 'https://hzkamwrrxcsywbpsgcsd.supabase.co', 'https://api.framyr-samara.ru')
WHERE image_url LIKE 'https://hzkamwrrxcsywbpsgcsd.supabase.co%';