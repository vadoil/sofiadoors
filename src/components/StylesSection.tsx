const finishes = [
  {
    category: "Покрытия",
    items: [
      { name: "Под покраску", desc: "Базовое полотно для любого цвета" },
      { name: "Кортекс", desc: "Текстурное покрытие: дуб, орех, ясень" },
      { name: "Монохромный кортекс", desc: "Улун, топлёное молоко, пепел, кашемир" },
      { name: "Акриловая эмаль", desc: "Какао, дымка — матовое покрытие" },
    ],
  },
  {
    category: "Шпон и покраска",
    items: [
      { name: "Натуральный шпон", desc: "Дуб, орех, венге — европейская коллекция" },
      { name: "Итальянский шпон", desc: "Дуб лесной, лукоморье, беленый" },
      { name: "Окрашенный шпон", desc: "Белый, кашемировый, дымчатый, чёрный ясень" },
      { name: "Покраска по RAL/NCS", desc: "Любой цвет по каталогу" },
    ],
  },
  {
    category: "Стекло",
    items: [
      { name: "Триплекс 6–8 мм", desc: "Прозрачное, матовое, просветлённое" },
      { name: "Флоат-стекло", desc: "Белое люкс, бронзовое, чёрное" },
      { name: "Зеркало", desc: "Зеркальные вставки в полотно" },
      { name: "Серое стекло", desc: "Прозрачное, матовое, непрозрачное" },
    ],
  },
];

const StylesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
          Облицовки и отделки
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
          Материалы и покрытия
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mb-16 leading-relaxed">
          Более 50 вариантов облицовок для каждой коллекции. Кортекс, шпон, эмаль, покраска по RAL — подберём точное решение под ваш проект.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
          {finishes.map((group) => (
            <div key={group.category} className="bg-primary p-8">
              <h3 className="text-xl tracking-tight mb-6 text-primary-foreground/90">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <p className="text-sm font-medium text-primary-foreground/80">{item.name}</p>
                    <p className="text-xs text-primary-foreground/50 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pogonazh section */}
        <div className="mt-16 rounded-2xl border border-primary-foreground/10 p-8">
          <h3 className="text-xl tracking-tight mb-6">Дверной погонаж</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Короб ЭКТ (круглый)",
              "Моноблок",
              "Моноблок ОТ СЕБЯ",
              "Короб МДФ",
              "Короб МДФ 60",
              "Скрытый короб 35",
              "Скрытый короб 60",
              "Наличник ЭКТ",
              "Наличник МДФ 132 мм",
              "Наличник круглый",
              "Карниз фигурный",
              "Добор / Накладка",
            ].map((item) => (
              <p key={item} className="text-sm text-primary-foreground/60 py-2 border-b border-primary-foreground/10">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
