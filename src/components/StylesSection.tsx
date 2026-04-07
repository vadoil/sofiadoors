const styles = [
  { name: "Japandi", desc: "Натуральные текстуры, тёплое дерево, скрытые решения" },
  { name: "Minimal", desc: "Чистые плоскости, интеграция в стену, невидимые петли" },
  { name: "Soft Luxury", desc: "Выразительные отделки, бронза, тактильные поверхности" },
  { name: "Коммерция", desc: "Акустика, пожаробезопасность, надёжная фурнитура" },
];

const StylesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
          Стили интерьера
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-16">
          Подберём двери
          <br />
          под стилистику проекта
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
          {styles.map((style) => (
            <div
              key={style.name}
              className="bg-primary p-8 flex flex-col justify-between min-h-[200px] transition-colors duration-300 hover:bg-primary-foreground/5"
            >
              <h3 className="text-2xl tracking-tight">{style.name}</h3>
              <p className="mt-4 text-primary-foreground/60 text-sm leading-relaxed">
                {style.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
