import { Home, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import scenarioResidence from "@/assets/scenario-residence.jpg";
import scenarioHotel from "@/assets/scenario-hotel.jpg";

const scenarios = [
  {
    icon: Home,
    tag: "Жилые пространства, которые дышат",
    title: "Частные резиденции",
    description:
      "От пентхаусов до загородных домов — двери, которые дополняют архитектуру и подчёркивают каждый день.",
    image: scenarioResidence,
    animation: "animate-slide-in-left",
  },
  {
    icon: Building2,
    tag: "Первое впечатление в масштабе",
    title: "Гостиницы и коммерция",
    description:
      "Отели, бутики и офисы, где каждая точка контакта должна транслировать качество и намерение.",
    image: scenarioHotel,
    animation: "animate-slide-in-right",
  },
];

const ProjectScenariosSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-primary mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Вдохновение
        </p>
        <h2 className={`text-3xl md:text-5xl tracking-tight mb-16 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Сценарии проектов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((scenario, i) => (
            <div
              key={scenario.title}
              className={`group opacity-0 ${isVisible ? scenario.animation : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mb-6">
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <scenario.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  {scenario.tag}
                </p>
              </div>
              <h3 className="text-2xl tracking-tight mb-3">{scenario.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectScenariosSection;
