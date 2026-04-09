import { Shield, Ruler, Users, PenTool } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const trustBadges = [
  { icon: Shield, text: "Официальная продукция Sofia" },
  { icon: PenTool, text: "Подбор под дизайн-проект" },
  { icon: Ruler, text: "Консультация по размерам и комплектации" },
  { icon: Users, text: "Помощь архитекторам и частным клиентам" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-end">
      <img
        src={heroImage}
        alt="Современный интерьер с дверями Sofia"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/40 to-graphite/10" />
      
      <div className="relative z-10 w-full pb-16 md:pb-24 pt-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-primary-foreground leading-[1.05] animate-reveal font-heading">
            Двери Sofia для современных интерьеров в&nbsp;Самаре
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl animate-reveal animate-reveal-delay-1">
            Подберём коллекцию, покрытие и конструкцию под ваш интерьер, бюджет и сроки. Поможем выбрать без ошибок и перегруза.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3 animate-reveal animate-reveal-delay-2">
            <a
              href="#help"
              className="inline-flex items-center rounded-2xl bg-primary-foreground px-7 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:bg-primary-foreground/90 active:scale-95"
            >
              Получить подборку дверей
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10 active:scale-95"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#collections"
              className="inline-flex items-center rounded-2xl border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10 active:scale-95"
            >
              Смотреть коллекции
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-reveal animate-reveal-delay-3">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-primary-foreground/60">
                <badge.icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                <span className="text-xs md:text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
