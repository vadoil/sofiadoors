import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsAdmin from "@/components/admin/NewsAdmin";
import ProjectsAdmin from "@/components/admin/ProjectsAdmin";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading tracking-tight">Админка</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Управление контентом сайта
            </p>
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
