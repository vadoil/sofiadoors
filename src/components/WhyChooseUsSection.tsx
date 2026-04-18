import { Factory, Layers, Wrench, ShieldCheck, Truck, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const cards = [
  {
    icon: Factory,
    title: "Собственная фабрика",
    desc: "Двери Фрамир производятся на одной из крупнейших фабрик России — с современным оборудованием и контролем качества на каждом этапе.",
  },
  {
    icon: Layers,
    title: "8 видов покрытий",
    desc: "Шпон, эмаль, нанотекс, стекло, зеркало, ПВХ, экошпон. Подбираем материал под архитектуру помещения и бюджет проекта.",
  },
  {
    icon: Wrench,
    title: "Полная комплектация",
    desc: "Полотно, короб, наличники, фурнитура, доборы — собираем дверной комплект под ключ в едином стиле.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 5 лет",
    desc: "Уверены в материалах и сборке: даём расширенную гарантию на полотно и фурнитуру наших дверей.",
  },
  {
    icon: Truck,
    title: "Доставка и монтаж",
    desc: "Свои бригады замерщиков и установщиков по Самаре и области. Чисто, точно, в согласованные сроки.",
  },
  {
    icon: HeartHandshake,
    title: "Сопровождение проекта",
    desc: "От первого визита в шоурум до сдачи объекта — один менеджер ведёт ваш заказ и держит вас в курсе.",
  },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="advantages" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Почему Фрамир
        </p>
        <h2
          className={`font-heading text-3xl md:text-5xl tracking-tight leading-tight mb-14 md:mb-16 max-w-2xl opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Шесть причин выбрать наши двери
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group bg-warm-white border border-stone/60 rounded-2xl p-7 md:p-8 hover:border-graphite/30 hover:shadow-lg transition-all duration-300 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-graphite/5 flex items-center justify-center mb-5 group-hover:bg-graphite group-hover:text-warm-white transition-colors">
                <card.icon className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-3">{card.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
