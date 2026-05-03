
-- Roles enum + table
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Lock down news mutations
DROP POLICY IF EXISTS "Allow all insert on news" ON public.news;
DROP POLICY IF EXISTS "Allow all update on news" ON public.news;
DROP POLICY IF EXISTS "Allow all delete on news" ON public.news;

CREATE POLICY "Admins insert news"
  ON public.news FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update news"
  ON public.news FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete news"
  ON public.news FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Lock down projects mutations
DROP POLICY IF EXISTS "Allow all insert on projects" ON public.projects;
DROP POLICY IF EXISTS "Allow all update on projects" ON public.projects;
DROP POLICY IF EXISTS "Allow all delete on projects" ON public.projects;

CREATE POLICY "Admins insert projects"
  ON public.projects FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update projects"
  ON public.projects FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete projects"
  ON public.projects FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Storage policies: only admin can write to news-images / portfolio-images
CREATE POLICY "Admins upload news-images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update news-images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete news-images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins upload portfolio-images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'portfolio-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update portfolio-images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'portfolio-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete portfolio-images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'portfolio-images' AND public.has_role(auth.uid(), 'admin'));
