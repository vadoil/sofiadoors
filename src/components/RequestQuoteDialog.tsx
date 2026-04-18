import { useState, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface RequestQuoteDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  source?: string;
}

const RequestQuoteDialog = ({
  trigger,
  title = "Обсудить проект",
  description = "Оставьте контакты — менеджер свяжется в течение рабочего дня, поможет с подбором и расчётом.",
  source = "portfolio_cta",
}: RequestQuoteDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Заполните имя и телефон");
      return;
    }
    setLoading(true);
    try {
      // TODO: подключить отправку заявки в backend / CRM
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Заявка отправлена — мы свяжемся с вами в ближайшее время");
      setForm({ name: "", phone: "", message: "" });
      setOpen(false);
      console.info("[lead]", { ...form, source });
    } catch (err) {
      toast.error("Не удалось отправить. Попробуйте позже или позвоните нам.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            type="tel"
            placeholder="Телефон"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <Textarea
            placeholder="Коротко о задаче (необязательно)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
          />
          <Button type="submit" disabled={loading} className="w-full rounded-full h-12">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Отправляем…
              </>
            ) : (
              "Отправить заявку"
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestQuoteDialog;
