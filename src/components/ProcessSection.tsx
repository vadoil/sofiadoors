import { Send, Search, ClipboardCheck, PackageCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { icon: Send, num: "01", title: "Присылаете проект", desc: "Визуализации, планировки, референсы — всё, что поможет понять задачу" },
  { icon: Search, num: "02", title: "Подбираем решения", desc: "Коллекции, отделки, фурнитура — собираем комплектацию под интерьер" },
  { icon: ClipboardCheck, num: "03", title: "Согласуем детали", desc: "Чертежи, технические узлы, стыковки со стенами и полами" },
  { icon: PackageCheck, num: "04", title: "Поставка и монтаж", desc: "Доставка в Самару, контроль качества, сопровождение до результата" },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Процесс
        </p>
        <h2 className={`text-3xl md:text-5xl tracking-tight mb-16 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          От идеи до установки
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`border-t border-border pt-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-muted-foreground font-medium">{step.num}</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
