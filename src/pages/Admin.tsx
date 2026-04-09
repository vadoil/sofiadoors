import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type NewsRow = Database["public"]["Tables"]["news"]["Row"];
type NewsInsert = Database["public"]["Tables"]["news"]["Insert"];

const Admin = () => {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<NewsInsert>>({});
  const [isCreating, setIsCreating] = useState(false);

  const { data: news = [], isLoading } = useQuery({
    queryKey: ["admin-news"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async (item: NewsInsert & { id?: string }) => {
      if (item.id) {
        const { error } = await supabase.from("news").update(item).eq("id", item.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("news").insert(item);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-news"] });
      setEditing(null);
      setIsCreating(false);
      setForm({});
      toast.success("Сохранено");
    },
    onError: (e) => toast.error(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("news").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-news"] });
      toast.success("Удалено");
    },
    onError: (e) => toast.error(e.message),
  });

  const startEdit = (item: NewsRow) => {
    setEditing(item.id);
    setForm({ title: item.title, excerpt: item.excerpt, image_url: item.image_url, is_published: item.is_published });
    setIsCreating(false);
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditing(null);
    setForm({ title: "", excerpt: "", image_url: "", is_published: false });
  };

  const handleSave = () => {
    if (!form.title?.trim()) {
      toast.error("Введите заголовок");
      return;
    }
    if (editing) {
      upsertMutation.mutate({ ...form, id: editing } as any);
    } else {
      upsertMutation.mutate(form as NewsInsert);
    }
  };

  const cancel = () => {
    setEditing(null);
    setIsCreating(false);
    setForm({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-heading tracking-tight">Управление новостями</h1>
            <Button onClick={startCreate} className="gap-2">
              <Plus className="w-4 h-4" /> Добавить
            </Button>
          </div>

          {/* Create / Edit form */}
          {(isCreating || editing) && (
            <div className="mb-8 p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-heading text-lg">{editing ? "Редактировать" : "Новая новость"}</h3>
              <Input
                placeholder="Заголовок"
                value={form.title || ""}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <Textarea
                placeholder="Краткое описание"
                value={form.excerpt || ""}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              />
              <Input
                placeholder="URL изображения"
                value={form.image_url || ""}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              />
              <div className="flex items-center gap-3">
                <Switch
                  checked={form.is_published || false}
                  onCheckedChange={(v) => setForm({ ...form, is_published: v })}
                />
                <span className="text-sm text-muted-foreground">Опубликовано</span>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSave} className="gap-2" disabled={upsertMutation.isPending}>
                  <Save className="w-4 h-4" /> Сохранить
                </Button>
                <Button variant="outline" onClick={cancel} className="gap-2">
                  <X className="w-4 h-4" /> Отмена
                </Button>
              </div>
            </div>
          )}

          {/* List */}
          {isLoading ? (
            <p className="text-muted-foreground">Загрузка...</p>
          ) : (
            <div className="space-y-3">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
                >
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.title}</h4>
                    <p className="text-xs text-muted-foreground truncate">{item.excerpt}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.is_published
                        ? "bg-green-100 text-green-700"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {item.is_published ? "Опубликовано" : "Черновик"}
                  </span>
                  <Button variant="ghost" size="icon" onClick={() => startEdit(item)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (confirm("Удалить эту новость?")) deleteMutation.mutate(item.id);
                    }}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
