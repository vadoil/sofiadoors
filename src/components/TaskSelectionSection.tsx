import { Sun, Flame, Crown, EyeOff, PenTool, Home } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tasks = [
  { icon: Sun, title: "Для светлого минимализма", desc: "Лаконичные формы, светлые покрытия, чистые линии" },
  { icon: Flame, title: "Для тёплого современного интерьера", desc: "Натуральные текстуры, шпон, спокойная палитра" },
  { icon: Crown, title: "Для неоклассики", desc: "Филёнки, фигурные наличники, классические пропорции" },
  { icon: EyeOff, title: "Скрытые двери", desc: "Невидимый короб, покраска в цвет стены" },
  { icon: PenTool, title: "Двери под проект дизайнера", desc: "Подбор под визуализации и чертежи" },
  { icon: Home, title: "Решения для квартиры и дома", desc: "Комплексная поставка на весь объект" },
];

const TaskSelectionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Подбор по задаче
        </p>
        <h2
          className={`text-3xl md:text-5xl tracking-tight mb-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Какую задачу решаете?
        </h2>
        <p
          className={`text-muted-foreground max-w-xl mb-14 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.15s" }}
        >
          Выберите сценарий — покажем подходящие коллекции и поможем определиться с решением
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task, i) => (
            <a
              key={task.title}
              href="#help"
              className={`group rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 cursor-pointer opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <task.icon className="w-6 h-6 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="text-lg tracking-tight mb-2 font-heading">{task.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{task.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskSelectionSection;
