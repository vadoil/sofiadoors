const steps = [
  { num: "01", title: "Присылаете проект", desc: "Визуализации, планировки, референсы — всё, что поможет понять задачу" },
  { num: "02", title: "Подбираем решения", desc: "Коллекции, отделки, фурнитура — собираем комплектацию под интерьер" },
  { num: "03", title: "Согласуем детали", desc: "Чертежи, технические узлы, стыковки со стенами и полами" },
  { num: "04", title: "Поставка и монтаж", desc: "Доставка в Самару, контроль качества, сопровождение до результата" },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Процесс
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-16">
          От идеи до установки
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-border pt-6">
              <span className="text-sm text-muted-foreground font-medium">{step.num}</span>
              <h3 className="text-lg font-medium mt-3 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
