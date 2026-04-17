import { Compass, Palette, Award, Lightbulb, Handshake, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Compass,
    title: "Точная инженерия",
    description:
      "Каждая дверь изготавливается с архитектурными допусками, обеспечивая безупречную интеграцию в ваш проект.",
  },
  {
    icon: Palette,
    title: "Подход для дизайнеров",
    description:
      "Мы говорим на вашем языке — индивидуальные отделки, подбор цвета по RAL, нестандартные размеры. Ваше видение, наше исполнение.",
  },
  {
    icon: Award,
    title: "Сертифицированные характеристики",
    description:
      "Акустика до 42 дБ, огнестойкость EI 60, полная сертификация и техническая документация.",
  },
  {
    icon: Lightbulb,
    title: "Нестандартные решения",
    description:
      "Двери до потолка, скрытые конструкции, интеграция с мебелью — воплощаем самые смелые идеи.",
  },
  {
    icon: Handshake,
    title: "Партнёрская программа",
    description:
      "Скидки до 15%, персональный менеджер, приоритетные сроки изготовления для студий и бюро.",
  },
  {
    icon: Layers,
    title: "Полная комплектация",
    description:
      "Двери, погонаж, фурнитура, декор стен — всё от одного производителя. Единый стиль, единая гарантия.",
  },
];

const DesignerFeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-primary mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Для дизайнеров и архитекторов
        </p>
        <h2 className={`text-3xl md:text-5xl tracking-tight leading-[1.15] mb-4 max-w-3xl opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Двери, спроектированные для тех, кто проектирует пространства
        </h2>
        <p className={`text-muted-foreground max-w-2xl mb-16 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          Фрамир работает с профессионалами, которые понимают: дверь — это не просто фурнитура, 
          а элемент дизайна, определяющий пространственный опыт.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`rounded-2xl bg-secondary/50 p-8 md:p-10 hover:bg-secondary hover:shadow-lg transition-all duration-500 group opacity-0 ${isVisible ? "animate-fade-in-scale" : ""}`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon
                  className="w-6 h-6 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg md:text-xl tracking-tight mb-3 font-medium">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerFeaturesSection;
