import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsAdmin from "@/components/admin/NewsAdmin";
import ProjectsAdmin from "@/components/admin/ProjectsAdmin";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "ok" | "no-auth" | "no-admin">("loading");

  useEffect(() => {
    const check = async (session: any) => {
      if (!session) {
        setStatus("no-auth");
        navigate("/auth", { replace: true });
        return;
      }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (error || !data) setStatus("no-admin");
      else setStatus("ok");
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      check(session);
    });
    supabase.auth.getSession().then(({ data: { session } }) => check(session));
    return () => subscription.unsubscribe();
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Вы вышли");
    navigate("/auth", { replace: true });
  };

  if (status === "loading" || status === "no-auth") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 px-6 text-center text-muted-foreground">Загрузка…</main>
      </div>
    );
  }

  if (status === "no-admin") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 px-6 max-w-md mx-auto text-center space-y-4">
          <h1 className="text-2xl font-heading">Нет доступа</h1>
          <p className="text-sm text-muted-foreground">У вашего аккаунта нет прав администратора.</p>
          <Button variant="outline" onClick={signOut}>Выйти</Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-heading tracking-tight">Админка</h1>
              <p className="text-sm text-muted-foreground mt-1">Управление контентом сайта</p>
            </div>
            <Button variant="outline" size="sm" onClick={signOut}>Выйти</Button>
          </div>

          <Tabs defaultValue="news" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="news">Новости</TabsTrigger>
              <TabsTrigger value="projects">Портфолио</TabsTrigger>
            </TabsList>
            <TabsContent value="news">
              <NewsAdmin />
            </TabsContent>
            <TabsContent value="projects">
              <ProjectsAdmin />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
