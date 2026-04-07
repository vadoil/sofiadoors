import { Truck, Ruler, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Доставка и оплата",
    items: [
      "Доставка по Самаре и области",
      "Подъём на этаж",
      "Безналичный расчёт для юрлиц",
      "Рассрочка до 12 месяцев",
      "Оплата по факту получения",
    ],
  },
  {
    icon: Ruler,
    title: "Замер и монтаж",
    items: [
      "Бесплатный выезд замерщика",
      "Точные обмеры проёмов лазером",
      "Профессиональный монтаж",
      "Согласование с отделочной бригадой",
      "Контроль качества на каждом этапе",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    items: [
      "Гарантия фабрики Sofia — 5 лет",
      "Гарантия на монтаж — 2 года",
      "Сервисное обслуживание",
      "Регулировка петель и фурнитуры",
      "Оперативный выезд мастера",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-background/50 mb-4">
          Сервис
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-16">
          Полный цикл — от замера до гарантии
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-background/15 rounded-2xl p-8 hover:border-background/30 transition-colors duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl tracking-tight mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-background/60 leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
