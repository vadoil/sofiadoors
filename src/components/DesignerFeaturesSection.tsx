import { Pen, Smile, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Pen,
    title: "Точная инженерия",
    description:
      "Каждая дверь изготавливается с архитектурными допусками, обеспечивая безупречную интеграцию в ваш проект.",
  },
  {
    icon: Smile,
    title: "Подход для дизайнеров",
    description:
      "Мы говорим на вашем языке — индивидуальные отделки, подбор цвета по RAL, нестандартные размеры. Ваше видение, наше исполнение.",
  },
  {
    icon: ShieldCheck,
    title: "Сертифицированные характеристики",
    description:
      "Акустика до 42 дБ, огнестойкость EI 60, полная сертификация и техническая документация.",
  },
];

const DesignerFeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
          Для дизайнеров и архитекторов
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.15] mb-4 max-w-3xl">
          Двери, спроектированные для тех, кто проектирует пространства
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          Sofia работает с профессионалами, которые понимают: дверь — это не просто фурнитура, 
          а элемент дизайна, определяющий пространственный опыт.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-secondary/50 p-8 md:p-10 hover:bg-secondary transition-colors duration-300"
            >
              <feature.icon
                className="w-8 h-8 text-primary mb-6"
                strokeWidth={1.5}
              />
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
