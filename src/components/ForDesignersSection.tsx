const ForDesignersSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 animate-reveal">
          Для дизайнеров и архитекторов
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.15] animate-reveal animate-reveal-delay-1">
          Мы не продаём двери.
          <br />
          <span className="text-muted-foreground">
            Мы помогаем встроить их в&nbsp;архитектуру пространства.
          </span>
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-reveal animate-reveal-delay-2">
          {[
            { title: "Подбор по проекту", desc: "Присылайте визуализации — подберём коллекции, отделки и фурнитуру под стилистику" },
            { title: "Техническое сопровождение", desc: "Чертежи, замеры, интеграция со стенами и нишами — берём на себя" },
            { title: "Партнёрские условия", desc: "Специальные цены и приоритет в поставках для студий и бюро" },
          ].map((item) => (
            <div key={item.title} className="border-t border-border pt-6">
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForDesignersSection;
