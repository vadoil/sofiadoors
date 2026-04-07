import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import doorFokus from "@/assets/door-fokus.jpg";
import doorSkyline from "@/assets/door-skyline.jpg";
import doorOriginal from "@/assets/door-original.jpg";
import doorElegant from "@/assets/door-elegant.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorHidden from "@/assets/door-hidden.jpg";
import doorSliding from "@/assets/door-sliding.jpg";
import doorPartition from "@/assets/door-partition.jpg";
import doorAcoustic from "@/assets/door-acoustic.jpg";
import scenarioResidence from "@/assets/scenario-residence.jpg";
import scenarioHotel from "@/assets/scenario-hotel.jpg";

const slides = [
  { image: scenarioResidence, caption: "Частная резиденция — коллекция Элегант" },
  { image: scenarioHotel, caption: "Гостиничный проект — коллекция Оригинал" },
  { image: doorFokus, caption: "Коллекция Фокус — базовая элегантность" },
  { image: doorSkyline, caption: "Коллекция Скайлайн — до потолка" },
  { image: doorOriginal, caption: "Коллекция Оригинал — стекло и дерево" },
  { image: doorElegant, caption: "Коллекция Элегант — классические формы" },
  { image: doorGlass, caption: "Стеклянные перегородки — лёгкость пространства" },
  { image: doorHidden, caption: "Скрытые двери — невидимая интеграция" },
  { image: doorSliding, caption: "Сдвижные системы — Мэджик, Компак" },
  { image: doorPartition, caption: "Реечные перегородки — Сёдзи" },
  { image: doorAcoustic, caption: "Акустика — шумоизоляция 42 дБ" },
];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Галерея
        </p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-5xl tracking-tight">
            Наши решения в интерьерах
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Назад"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Вперёд"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full">
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caption & dots */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {slides[current].caption}
          </p>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
