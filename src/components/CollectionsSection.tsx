import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import promoElegant from "@/assets/promo-elegant.jpg";
import promoFokus from "@/assets/promo-fokus.jpg";
import promoOriginal from "@/assets/promo-original.jpg";
import promoHidden from "@/assets/promo-hidden.jpg";
import promoSolid from "@/assets/promo-solid.jpg";
import promoGlass from "@/assets/promo-glass.jpg";

const promos = [
  {
    image: promoElegant,
    title: "Двери Элегант",
    oldPrice: "57 391 р.",
    newPrice: "45 699 р.",
    badge: "−40%",
    badgeLabel: "На полотно",
    deadline: "13 апреля",
  },
  {
    image: promoOriginal,
    title: "Двери Оригинал в любой отделке",
    oldPrice: "70 368 р.",
    newPrice: "49 264 р.",
    badge: "−50%",
    badgeLabel: "На полотно",
    deadline: "13 апреля",
  },
  {
    image: promoFokus,
    title: "Коллекция Фокус",
    oldPrice: null,
    newPrice: "32 650 р.",
    badge: null,
    badgeLabel: null,
    deadline: "13 апреля",
  },
  {
    image: promoHidden,
    title: "Скрытая дверь под покраску",
    oldPrice: null,
    newPrice: "49 116 р.",
    badge: null,
    badgeLabel: null,
    deadline: "13 апреля",
  },
  {
    image: promoSolid,
    title: "Межкомнатные двери",
    oldPrice: "56 032 р.",
    newPrice: "42 096 р.",
    badge: "−50%",
    badgeLabel: "На полотно",
    deadline: "13 апреля",
  },
  {
    image: promoGlass,
    title: "Стеклянные перегородки и двери",
    oldPrice: "58 339 р.",
    newPrice: "40 837 р.",
    badge: "−30%",
    badgeLabel: "Комплимент",
    deadline: "13 апреля",
  },
];

const CollectionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="collections" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p
          className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
        >
          Акции Sofia
        </p>
        <h2
          className={`text-3xl md:text-5xl tracking-tight mb-6 opacity-0 font-heading ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Специальные предложения
        </h2>
        <p
          className={`text-muted-foreground max-w-2xl mb-14 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.15s" }}
        >
          Успейте приобрести двери Sofia по специальным ценам. Акции действуют до указанной даты.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, i) => (
            <div
              key={promo.title}
              className={`group rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer 
                transition-all duration-500 hover:shadow-lg hover:-translate-y-1 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {promo.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-3 py-1.5 rounded-lg">
                    {promo.badge}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-heading tracking-tight mb-3">
                  {promo.title}
                </h3>
                <div className="flex items-baseline gap-3 mb-4">
                  {promo.oldPrice && (
                    <span className="text-muted-foreground line-through text-sm">
                      от {promo.oldPrice}
                    </span>
                  )}
                  <span className="text-foreground font-semibold text-lg">
                    от {promo.newPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  {promo.badgeLabel && (
                    <span>
                      {promo.badgeLabel}{" "}
                      <span className="text-accent font-bold">{promo.badge}</span>
                    </span>
                  )}
                  <span>До {promo.deadline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
