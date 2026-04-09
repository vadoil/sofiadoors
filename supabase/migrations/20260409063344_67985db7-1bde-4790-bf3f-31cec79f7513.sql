CREATE POLICY "Allow all insert on news" ON public.news FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all update on news" ON public.news FOR UPDATE USING (true);
CREATE POLICY "Allow all delete on news" ON public.news FOR DELETE USING (true);
-- Also allow selecting drafts for admin
DROP POLICY "Published news are viewable by everyone" ON public.news;
CREATE POLICY "Anyone can view news" ON public.news FOR SELECT USING (true);