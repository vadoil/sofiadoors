import { useRef, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";

import doorElegant from "@/assets/door-elegant-hero-new.png";
import doorOriginal from "@/assets/door-original-hero.png";
import doorSkyline from "@/assets/door-skyline-hero.png";
import doorFokus from "@/assets/door-fokus-hero.png";
import doorHidden from "@/assets/door-hidden-hero.png";
import doorMetamorfoza from "@/assets/door-metamorfoza-hero.png";
import doorAcoustica from "@/assets/door-acoustica-hero.png";
import doorShoji from "@/assets/door-shoji-hero.png";
import doorRein from "@/assets/door-rein-hero.png";
import doorFireproof from "@/assets/door-fireproof-hero.png";
import doorListva from "@/assets/door-listva-hero.png";
import doorIstok from "@/assets/door-istok-hero.png";
import door1000lines from "@/assets/door-1000lines-hero.png";
import doorGrafika from "@/assets/door-grafika-hero.png";
import doorSolyaris from "@/assets/door-solyaris-hero.png";
import doorManiliona from "@/assets/door-maniliona-hero.png";

const row1 = [
  { image: doorElegant, title: "Элегант", subtitle: "Вечные ценности в элегантном переосмыслении" },
  { image: doorOriginal, title: "Оригинал", subtitle: "Золотые пропорции и архитектурный «рассвет»" },
  { image: doorSkyline, title: "Скайлайн", subtitle: "Двери в потолок — новый образ пространства" },
  { image: doorFokus, title: "Фокус", subtitle: "Базовая элегантность, доведённая до идеала" },
  { image: doorHidden, title: "Скрытые двери", subtitle: "Двери высотой до 6 м, повышенная шумоизоляция" },
  { image: doorMetamorfoza, title: "Метаморфоза", subtitle: "Аскетично элегантное прочтение классических форм" },
  { image: doorAcoustica, title: "Акустика", subtitle: "Полотно 60 мм, повышенная шумоизоляция" },
  { image: doorShoji, title: "Сёдзи", subtitle: "Современная интерпретация японских перегородок" },
];

const row2 = [
  { image: doorRein, title: "Рейн", subtitle: "Вдохновлён струями дождя по стеклу" },
  { image: doorFireproof, title: "Противопожарные EI", subtitle: "Защита от огня 30 и 60 минут" },
  { image: doorListva, title: "Листва", subtitle: "Форма листвы в современных линиях" },
  { image: doorIstok, title: "Исток", subtitle: "Русла рек и изгибы ручьёв" },
  { image: door1000lines, title: "1000 линий", subtitle: "Авторский линейный рельеф в профиле" },
  { image: doorGrafika, title: "Графика", subtitle: "Многообразие дизайна и качество материалов" },
  { image: doorSolyaris, title: "Солярис", subtitle: "Мягкие формы и сотни сочетаний" },
  { image: doorManiliona, title: "Манильона", subtitle: "Арт-объект с ручкой из массива" },
];

const MarqueeRow = ({
  slides,
  direction,
}: {
  slides: typeof row1;
  direction: "left" | "right";
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);
  const rafRef = useRef<number>(0);
  const dragRef = useRef({ isDragging: false, startX: 0, startTime: 0 });

  const items = [...slides, ...slides];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const keyframes =
      direction === "left"
        ? [{ transform: "translateX(0)" }, { transform: `translateX(-${halfWidth}px)` }]
        : [{ transform: `translateX(-${halfWidth}px)` }, { transform: "translateX(0)" }];

    const anim = track.animate(keyframes, {
      duration: 80000,
      iterations: Infinity,
      easing: "linear",
    });

    animRef.current = anim;

    return () => {
      anim.cancel();
    };
  }, [direction]);

  const pauseAndResume = useCallback(() => {
    const anim = animRef.current;
    if (!anim) return;
    anim.pause();
    clearTimeout(rafRef.current);
    rafRef.current = window.setTimeout(() => {
      anim.play();
    }, 800) as unknown as number;
  }, []);

  const shiftTime = useCallback((delta: number) => {
    const anim = animRef.current;
    if (!anim || anim.currentTime == null) return;
    const multiplier = direction === "left" ? 1 : -1;
    const newTime = (anim.currentTime as number) + delta * multiplier;
    anim.currentTime = Math.max(0, newTime);
  }, [direction]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      shiftTime(delta * 8);
      pauseAndResume();
    },
    [shiftTime, pauseAndResume]
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current = { isDragging: true, startX: e.clientX, startTime: (animRef.current?.currentTime as number) || 0 };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    animRef.current?.pause();
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const multiplier = direction === "left" ? -1 : 1;
    const anim = animRef.current;
    if (anim) {
      anim.currentTime = Math.max(0, dragRef.current.startTime + dx * 8 * multiplier);
    }
  }, [direction]);

  const handlePointerUp = useCallback(() => {
    dragRef.current.isDragging = false;
    pauseAndResume();
  }, [pauseAndResume]);

  return (
    <div
      className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        ref={trackRef}
        className="flex gap-4 pointer-events-none"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {items.map((slide, i) => (
          <div
            key={`${slide.title}-${i}`}
            className="shrink-0 relative overflow-hidden rounded-xl cursor-pointer group"
            style={{ width: "clamp(420px, 34vw, 680px)" }}
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading={i < 8 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground tracking-tight font-heading leading-tight">
                  {slide.title}
                </h2>
                <div className="flex items-center gap-2 mt-1.5 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                  <span className="text-sm md:text-base">{slide.subtitle}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CollectionsMarquee = () => {
  return (
    <section id="collections" className="relative py-16 md:py-24 px-0 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Каталог Фрамир
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mt-3 max-w-2xl leading-[1.05]">
              Коллекции, в которых хочется жить
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            От строгой классики до арт-объектов. Полистайте подборку — каждое
            полотно можно адаптировать под ваш проект.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MarqueeRow slides={row1} direction="left" />
        <MarqueeRow slides={row2} direction="right" />
      </div>
    </section>
  );
};

export default CollectionsMarquee;
