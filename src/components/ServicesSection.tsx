import { Truck, Ruler, ShieldCheck, CreditCard, PackageCheck, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Truck,
    title: "Доставка и оплата",
    items: [
      { icon: PackageCheck, text: "Доставка по Самаре и области" },
      { icon: PackageCheck, text: "Подъём на этаж" },
      { icon: CreditCard, text: "Безналичный расчёт для юрлиц" },
      { icon: CreditCard, text: "Рассрочка до 12 месяцев" },
      { icon: CreditCard, text: "Оплата по факту получения" },
    ],
  },
  {
    icon: Ruler,
    title: "Замер и монтаж",
    items: [
      { icon: Ruler, text: "Бесплатный выезд замерщика" },
      { icon: Ruler, text: "Точные обмеры проёмов лазером" },
      { icon: Wrench, text: "Профессиональный монтаж" },
      { icon: Wrench, text: "Согласование с отделочной бригадой" },
      { icon: ShieldCheck, text: "Контроль качества на каждом этапе" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    items: [
      { icon: ShieldCheck, text: "Гарантия фабрики Sofia — 5 лет" },
      { icon: ShieldCheck, text: "Гарантия на монтаж — 2 года" },
      { icon: Wrench, text: "Сервисное обслуживание" },
      { icon: Wrench, text: "Регулировка петель и фурнитуры" },
      { icon: Wrench, text: "Оперативный выезд мастера" },
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-foreground text-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-background/50 mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Сервис
        </p>
        <h2 className={`text-3xl md:text-5xl tracking-tight mb-16 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Полный цикл — от замера до гарантии
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`border border-background/15 rounded-2xl p-8 hover:border-background/30 hover:bg-background/5 transition-all duration-500 opacity-0 ${isVisible ? "animate-fade-up-slow" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl tracking-tight mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item.text}
                    className="text-sm text-background/60 leading-relaxed flex items-start gap-3"
                  >
                    <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    {item.text}
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
