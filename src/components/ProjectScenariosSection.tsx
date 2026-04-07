import scenarioResidence from "@/assets/scenario-residence.jpg";
import scenarioHotel from "@/assets/scenario-hotel.jpg";

const scenarios = [
  {
    tag: "Жилые пространства, которые дышат",
    title: "Частные резиденции",
    description:
      "От пентхаусов до загородных домов — двери, которые дополняют архитектуру и подчёркивают каждый день.",
    image: scenarioResidence,
  },
  {
    tag: "Первое впечатление в масштабе",
    title: "Гостиницы и коммерция",
    description:
      "Отели, бутики и офисы, где каждая точка контакта должна транслировать качество и намерение.",
    image: scenarioHotel,
  },
];

const ProjectScenariosSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
          Вдохновение
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-16">
          Сценарии проектов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((scenario) => (
            <div key={scenario.title} className="group">
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
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                {scenario.tag}
              </p>
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
