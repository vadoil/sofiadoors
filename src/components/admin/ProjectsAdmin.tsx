import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X, Upload, Loader2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
type ProjectInsert = Database["public"]["Tables"]["projects"]["Insert"];

const STYLES = ["Современные", "Классические", "Неоклассические", "Дизайнерские", "Скрытые"];
const ROOMS = ["Квартира", "Дом", "Гостиная", "Спальня", "Ванная", "Офис", "Коммерческое"];

const emptyForm: Partial<ProjectInsert> = {
  title: "",
  designer: "",
  style: "Современные",
  room: "Квартира",
  collection: "",
  image_url: "",
  description: "",
  is_published: true,
  sort_order: 0,
};

const ProjectsAdmin = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<ProjectInsert>>(emptyForm);
  const [isCreating, setIsCreating] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async (item: ProjectInsert & { id?: string }) => {
      if (item.id) {
        const { error } = await supabase.from("projects").update(item).eq("id", item.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("projects").insert(item);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects-public"] });
      queryClient.invalidateQueries({ queryKey: ["projects-preview"] });
      cancel();
      toast.success("Сохранено");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects-public"] });
      queryClient.invalidateQueries({ queryKey: ["projects-preview"] });
      toast.success("Удалено");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const startEdit = (item: ProjectRow) => {
    setEditing(item.id);
    setForm({
      title: item.title,
      designer: item.designer,
      style: item.style,
      room: item.room,
      collection: item.collection,
      image_url: item.image_url,
      description: item.description,
      is_published: item.is_published,
      sort_order: item.sort_order,
    });
    setIsCreating(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditing(null);
    setForm({ ...emptyForm, sort_order: (projects[projects.length - 1]?.sort_order ?? 0) + 10 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = () => {
    if (!form.title?.trim()) {
      toast.error("Введите название проекта");
      return;
    }
    const payload = { ...form } as ProjectInsert;
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
      const { error } = await supabase.storage.from("portfolio-images").upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from("portfolio-images").getPublicUrl(path);
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
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <p className="text-sm text-muted-foreground">{projects.length} проектов в базе</p>
        <Button onClick={startCreate} className="gap-2">
          <Plus className="w-4 h-4" /> Добавить проект
        </Button>
      </div>

      {(isCreating || editing) && (
        <div className="mb-8 p-6 md:p-8 rounded-2xl border border-border bg-card space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl">
              {editing ? "Редактировать проект" : "Новый проект"}
            </h3>
            <Button variant="ghost" size="icon" onClick={cancel}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Название проекта *</Label>
              <Input
                placeholder="Например: ЖК «Светлана парк»"
                value={form.title || ""}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Дизайнер / студия</Label>
              <Input
                placeholder="Например: Студия DSGN HUB"
                value={form.designer || ""}
                onChange={(e) => setForm({ ...form, designer: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Стиль</Label>
              <Select
                value={form.style || "Современные"}
                onValueChange={(v) => setForm({ ...form, style: v })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {STYLES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Тип помещения</Label>
              <Select
                value={form.room || "Квартира"}
                onValueChange={(v) => setForm({ ...form, room: v })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {ROOMS.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Коллекция</Label>
              <Input
                placeholder="Например: Прайм"
                value={form.collection || ""}
                onChange={(e) => setForm({ ...form, collection: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Описание</Label>
            <Textarea
              placeholder="Краткий рассказ о проекте"
              rows={3}
              value={form.description || ""}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Фото проекта</Label>
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
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
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

          <div className="grid md:grid-cols-2 gap-4 items-end">
            <div className="space-y-2">
              <Label>Порядок (меньше = выше)</Label>
              <Input
                type="number"
                value={form.sort_order ?? 0}
                onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })}
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={form.is_published ?? true}
                onCheckedChange={(v) => setForm({ ...form, is_published: v })}
              />
              <span className="text-sm">
                {form.is_published ? "Опубликовано" : "Черновик"}
              </span>
            </div>
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

      {isLoading ? (
        <p className="text-muted-foreground">Загрузка...</p>
      ) : projects.length === 0 ? (
        <p className="text-muted-foreground text-center py-20">
          Пока нет проектов. Нажмите «Добавить проект».
        </p>
      ) : (
        <div className="space-y-3">
          {projects.map((item) => (
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
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                    {item.style}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.room}</span>
                  {item.collection && (
                    <span className="text-xs text-muted-foreground">
                      · «{item.collection}»
                    </span>
                  )}
                </div>
                <h4 className="font-medium truncate">{item.title}</h4>
                {item.designer && (
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{item.designer}</p>
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
                  if (confirm("Удалить этот проект?")) deleteMutation.mutate(item.id);
                }}
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsAdmin;
