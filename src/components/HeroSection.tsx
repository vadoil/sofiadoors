import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorkshop from "@/assets/hero-workshop.webp";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="w-full">
        <div className="relative overflow-hidden h-screen min-h-[640px]">
          {/* Background image */}
          <img
            src={heroWorkshop}
            alt="Мастерская Фрамир — двери ручной работы в Самаре"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />

          {/* Layered gradients for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/85 via-graphite/55 to-graphite/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-8 px-6 md:px-14 lg:px-20 pt-28 md:pt-32 pb-16 md:pb-24 h-full">
            <div className="flex flex-col justify-center text-warm-white animate-reveal">
              {/* Attention */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-2 mb-6 rounded-full bg-warm-white/10 backdrop-blur-md border border-warm-white/20">
                <Sparkles className="w-4 h-4 text-bronze" />
                <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-warm-white/90">
                  Фабрика Фрамир · Самара
                </span>
              </div>

              {/* Interest — заголовок */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
                Двери, которые<br />
                <span className="italic text-bronze-foreground/95">формируют</span> пространство
              </h1>

              {/* Desire — выгоды */}
              <p className="text-base md:text-lg text-warm-white/85 max-w-xl mb-4 leading-relaxed">
                Полотна высотой до 6 метров, скрытый монтаж, шумоизоляция 60 мм
                и 40+ авторских коллекций — производим под ваш проект на собственной
                фабрике в Самаре.
              </p>

              <ul className="space-y-2 mb-8 text-sm md:text-base text-warm-white/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                  Замер и 3D-визуализация — бесплатно
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                  Гарантия 5 лет, монтаж «под ключ»
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                  Срок изготовления от 14 дней
                </li>
              </ul>

              {/* Action */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() => scrollTo("help")}
                  className="bg-warm-white text-graphite hover:bg-warm-white/90 rounded-full px-8 h-14 text-base group shadow-xl"
                >
                  Получить расчёт за 15 минут
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("collections")}
                  className="border-warm-white/40 bg-warm-white/5 backdrop-blur-md text-warm-white hover:bg-warm-white/15 hover:text-warm-white rounded-full px-8 h-14 text-base"
                >
                  Смотреть коллекции
                </Button>
              </div>

            </div>

            {/* Right side intentionally empty — let the photo breathe */}
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
