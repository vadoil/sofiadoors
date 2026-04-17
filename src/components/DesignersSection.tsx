import { PenTool, Layers, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import architectCollab from "@/assets/architect-collab.jpg";

const features = [
  { icon: PenTool, text: "Помощь в подборе решений под проект" },
  { icon: Layers, text: "Единый стиль интерьера — двери, наличники, плинтусы" },
  { icon: MessageSquare, text: "Консультации по моделям, покрытиям и конструкциям" },
];

const DesignersSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className={`rounded-2xl overflow-hidden aspect-[4/5] opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          >
            <img
              src={architectCollab}
              alt="Работа с дизайнером над проектом"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
              Для профессионалов
            </p>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Работаем с дизайнерами и архитекторами
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-10 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.15s" }}
            >
              Поможем интегрировать двери Фрамир в ваш проект — от первых визуализаций до финальной комплектации.
            </p>

            <div className={`space-y-5 mb-10 opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
              {features.map((f) => (
                <div key={f.text} className="flex items-start gap-3">
                  <f.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm leading-relaxed">{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#help"
              className={`inline-flex items-center rounded-2xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-95 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.25s" }}
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignersSection;
