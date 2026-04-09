import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import doorFokus from "@/assets/door-fokus-hero.png";
import doorSkyline from "@/assets/door-skyline.jpg";
import doorSkylineHero from "@/assets/door-skyline-hero.png";
import doorOriginalHero from "@/assets/door-original-hero.png";
import doorOriginal from "@/assets/door-original.jpg";
import doorElegant from "@/assets/door-elegant-hero.png";
import doorHidden from "@/assets/door-hidden-hero.png";
import doorGlass from "@/assets/door-glass.jpg";
import doorMetamorfoza from "@/assets/door-metamorfoza-hero.png";
import doorAcoustica from "@/assets/door-acoustica-hero.png";
import doorShoji from "@/assets/door-shoji-hero.png";
import scenarioResidence from "@/assets/scenario-residence.jpg";
import scenarioHotel from "@/assets/scenario-hotel.jpg";

const slides = [
  {
    image: scenarioResidence,
    title: "Элегант",
    subtitle: "Классика для современных интерьеров",
  },
  {
    image: doorOriginalHero,
    title: "Оригинал",
    subtitle: "Золотые пропорции и архитектурный «рассвет»",
  },
  {
    image: doorSkylineHero,
    title: "Скайлайн",
    subtitle: "Двери в потолок — новый образ пространства",
  },
  {
    image: doorFokus,
    title: "Фокус",
    subtitle: "Базовая элегантность, доведённая до идеала",
  },
  {
    image: doorHidden,
    title: "Скрытые двери",
    subtitle: "Двери высотой до 6 м, повышенная шумоизоляция",
  },
  {
    image: doorGlass,
    title: "Стеклянные перегородки",
    subtitle: "Лёгкость и прозрачность пространства",
  },
  {
    image: doorMetamorfoza,
    title: "Метаморфоза",
    subtitle: "Аскетично элегантное прочтение классических форм",
  },
  {
    image: doorAcoustica,
    title: "Акустика",
    subtitle: "Полотно 60 мм, повышенная шумоизоляция",
  },
  {
    image: doorShoji,
    title: "Сёдзи",
    subtitle: "Современная интерпретация японских перегородок",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // How many slides visible depends on screen width — we use CSS for layout
  // but need to know for offset calculation
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getVisibleCount]);

  const maxIndex = Math.max(0, slides.length - visibleCount);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [maxIndex, isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [maxIndex, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Each slide width as percentage
  const slideWidth = 100 / visibleCount;
  const gap = 8; // px gap between slides

  return (
    <section className="relative pt-24 md:pt-28 pb-8 px-4 md:px-12 lg:px-20 bg-background">
      {/* Carousel container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(calc(-${current * slideWidth}% - ${current * gap}px))`,
            gap: `${gap}px`,
            transitionDuration: "600ms",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ width: `calc(${slideWidth}% - ${((visibleCount - 1) * gap) / visibleCount}px)` }}
            >
              <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground tracking-tight font-heading leading-tight">
                    {slide.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                    <span className="text-sm md:text-base">{slide.subtitle}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-lg z-10"
          aria-label="Назад"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-lg z-10"
          aria-label="Вперёд"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-foreground w-6" : "bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
