import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X, Upload, Loader2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type NewsRow = Database["public"]["Tables"]["news"]["Row"];
type NewsInsert = Database["public"]["Tables"]["news"]["Insert"];

const CATEGORIES = ["Новости", "Статьи", "Видео", "Мероприятия", "СМИ о нас"];

const emptyForm: Partial<NewsInsert> = {
  title: "",
  category: "Новости",
  excerpt: "",
  content: "",
  image_url: "",
  is_published: false,
};

const Admin = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<NewsInsert>>(emptyForm);
  const [isCreating, setIsCreating] = useState(false);
  const [uploading, setUploading] = useState(false);

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
      queryClient.invalidateQueries({ queryKey: ["news-preview"] });
      queryClient.invalidateQueries({ queryKey: ["news-public"] });
      cancel();
      toast.success("Сохранено");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("news").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-news"] });
      queryClient.invalidateQueries({ queryKey: ["news-preview"] });
      queryClient.invalidateQueries({ queryKey: ["news-public"] });
      toast.success("Удалено");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const startEdit = (item: NewsRow) => {
    setEditing(item.id);
    setForm({
      title: item.title,
      category: item.category,
      excerpt: item.excerpt,
      content: item.content,
      image_url: item.image_url,
      is_published: item.is_published,
    });
    setIsCreating(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditing(null);
    setForm(emptyForm);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = () => {
    if (!form.title?.trim()) {
      toast.error("Введите заголовок");
      return;
    }
    if (!form.category) {
      toast.error("Выберите категорию");
      return;
    }
    const payload = { ...form } as NewsInsert;
    if (editing) {
      upsertMutation.mutate({ ...payload, id: editing });
    } else {
      upsertMutation.mutate(payload);
    }
  };

  const cancel = () => {
    setEditing(null);
    setIsCreating(false);
    setForm(emptyForm);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Только изображения");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from("news-images").upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from("news-images").getPublicUrl(path);
      setForm((f) => ({ ...f, image_url: data.publicUrl }));
      toast.success("Изображение загружено");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Ошибка загрузки");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-heading tracking-tight">Управление новостями</h1>
              <p className="text-sm text-muted-foreground mt-1">{news.length} материалов в базе</p>
            </div>
            <Button onClick={startCreate} className="gap-2">
              <Plus className="w-4 h-4" /> Добавить
            </Button>
          </div>

          {/* Create / Edit form */}
          {(isCreating || editing) && (
            <div className="mb-8 p-6 md:p-8 rounded-2xl border border-border bg-card space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl">
                  {editing ? "Редактировать материал" : "Новый материал"}
                </h3>
                <Button variant="ghost" size="icon" onClick={cancel}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-[1fr_200px] gap-4">
                <div className="space-y-2">
                  <Label>Заголовок *</Label>
                  <Input
                    placeholder="Например: Новая коллекция Соларис"
                    value={form.title || ""}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Категория *</Label>
                  <Select
                    value={form.category || "Новости"}
                    onValueChange={(v) => setForm({ ...form, category: v })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Краткое описание</Label>
                <Textarea
                  placeholder="1-2 предложения для превью"
                  rows={2}
                  value={form.excerpt || ""}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Полный текст</Label>
                <Textarea
                  placeholder="Основной текст материала"
                  rows={6}
                  value={form.content || ""}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Обложка</Label>
                <div className="flex gap-3 items-start">
                  <Input
                    placeholder="URL изображения или загрузите файл"
                    value={form.image_url || ""}
                    onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="gap-2 flex-shrink-0"
                  >
                    {uploading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )}
                    Загрузить
                  </Button>
                </div>
                {form.image_url && (
                  <img
                    src={form.image_url}
                    alt=""
                    className="mt-3 w-full max-w-xs h-32 object-cover rounded-lg border border-border"
                  />
                )}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Switch
                  checked={form.is_published || false}
                  onCheckedChange={(v) => setForm({ ...form, is_published: v })}
                />
                <span className="text-sm">
                  {form.is_published ? "Опубликовано" : "Черновик"}
                </span>
              </div>

              <div className="flex gap-3 pt-2 border-t border-border">
                <Button onClick={handleSave} className="gap-2" disabled={upsertMutation.isPending}>
                  <Save className="w-4 h-4" /> Сохранить
                </Button>
                <Button variant="outline" onClick={cancel} className="gap-2">
                  Отмена
                </Button>
              </div>
            </div>
          )}

          {/* List */}
          {isLoading ? (
            <p className="text-muted-foreground">Загрузка...</p>
          ) : news.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">
              Пока нет материалов. Нажмите «Добавить», чтобы создать первый.
            </p>
          ) : (
            <div className="space-y-3">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
                >
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt=""
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 text-xs text-muted-foreground">
                      Без фото
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.published_at
                          ? new Date(item.published_at).toLocaleDateString("ru-RU")
                          : "—"}
                      </span>
                    </div>
                    <h4 className="font-medium truncate">{item.title}</h4>
                    {item.excerpt && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{item.excerpt}</p>
                    )}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                      item.is_published
                        ? "bg-green-100 text-green-700"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {item.is_published ? "Опубл." : "Черновик"}
                  </span>
                  <Button variant="ghost" size="icon" onClick={() => startEdit(item)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (confirm("Удалить этот материал?")) deleteMutation.mutate(item.id);
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
