import { Palette, Package, Building2, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const cards = [
  {
    icon: Palette,
    title: "Подбор под стиль интерьера",
    desc: "Поможем выбрать коллекцию и покрытие, которые точно впишутся в ваш дизайн — минимализм, неоклассика, тёплый современный стиль.",
  },
  {
    icon: Package,
    title: "Полная комплектация",
    desc: "Полотно, короб, наличники, фурнитура — подберём всё в едином стиле. Не нужно искать каждый элемент отдельно.",
  },
  {
    icon: Building2,
    title: "Для квартиры, дома и коммерции",
    desc: "Решения для любого типа объекта: от студии до загородного дома и гостиничного проекта.",
  },
  {
    icon: HeartHandshake,
    title: "Сопровождение от выбора до заказа",
    desc: "Консультируем, помогаем с замерами, согласовываем комплектацию. Вы не останетесь один на один с выбором.",
  },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Почему выбирают нас
        </p>
        <h2
          className={`text-3xl md:text-5xl tracking-tight mb-16 max-w-2xl opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Не просто магазин дверей, а экспертный подбор под ваш интерьер
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group rounded-2xl border border-border p-8 md:p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/15">
                <card.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight mb-3 font-heading">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
