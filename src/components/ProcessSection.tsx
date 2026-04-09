import { Send, Search, ClipboardCheck, Handshake, PackageCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { icon: Send, num: "01", title: "Оставляете заявку", desc: "Расскажите, что нужно — ответим в течение часа" },
  { icon: Search, num: "02", title: "Уточняем задачу и стиль", desc: "Разберёмся в вашем интерьере, предпочтениях и бюджете" },
  { icon: ClipboardCheck, num: "03", title: "Подбираем коллекции", desc: "Предложим варианты с покрытиями и комплектацией" },
  { icon: Handshake, num: "04", title: "Согласуем решение", desc: "Финализируем выбор, рассчитаем точную стоимость" },
  { icon: PackageCheck, num: "05", title: "Оформляем заказ", desc: "Запускаем в производство, контролируем сроки" },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Как это работает
        </p>
        <h2
          className={`text-3xl md:text-5xl tracking-tight mb-16 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Пять простых шагов до ваших дверей
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="border-t-2 border-border pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{step.num}</span>
                <h3 className="text-base font-medium mt-1 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
