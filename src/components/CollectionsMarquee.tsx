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
import doorElegant2 from "@/assets/door-elegant.jpg";
import doorOriginal2 from "@/assets/door-original.jpg";
import doorFokus2 from "@/assets/door-fokus.jpg";
import doorSkyline2 from "@/assets/door-skyline.jpg";
import doorHidden2 from "@/assets/door-hidden.jpg";
import doorAcoustic2 from "@/assets/door-acoustic.jpg";
import sofiaMaster from "@/assets/sofia-master.png";

type Slide = {
  image: string;
  title: string;
  price: string;
};

// 22 коллекции Sofia — по 11 в каждом ряду
const allSlides: Slide[] = [
  { image: sofiaMaster, title: "Мастер", price: "от 88 100 ₽" },
  { image: doorFokus, title: "Двери в грунте под покраску", price: "от 35 640 ₽" },
  { image: doorOriginal, title: "Бэйс", price: "от 24 365 ₽" },
  { image: doorSkyline, title: "А-лайн", price: "от 76 805 ₽" },
  { image: doorMetamorfoza, title: "Дуо — двусторонняя коллекция", price: "от 64 575 ₽" },
  { image: doorHidden, title: "Прайм", price: "от 71 547 ₽" },
  { image: doorAcoustica, title: "Ритм", price: "от 44 905 ₽" },
  { image: doorShoji, title: "Эрте", price: "от 48 545 ₽" },
  { image: doorRein, title: "Каталина", price: "от 66 750 ₽" },
  { image: doorListva, title: "Элеганс", price: "от 27 020 ₽" },
  { image: doorGrafika, title: "Флоренция", price: "от 65 535 ₽" },

  { image: doorIstok, title: "Савона", price: "от 53 400 ₽" },
  { image: door1000lines, title: "Твин", price: "от 47 330 ₽" },
  { image: doorSolyaris, title: "Соло", price: "от 52 285 ₽" },
  { image: doorManiliona, title: "Дуэт", price: "от 43 690 ₽" },
  { image: doorFireproof, title: "Канва", price: "от 25 825 ₽" },
  { image: doorElegant2, title: "Эмма", price: "от 47 330 ₽" },
  { image: doorOriginal2, title: "Арта", price: "от 29 630 ₽" },
  { image: doorFokus2, title: "Омега", price: "от 50 975 ₽" },
  { image: doorSkyline2, title: "Титаниум", price: "от 28 605 ₽" },
  { image: doorHidden2, title: "Нео", price: "от 28 000 ₽" },
  { image: doorAcoustic2, title: "Римини", price: "от 49 760 ₽" },
];

const row1 = allSlides.slice(0, 11);
const row2 = allSlides.slice(11, 22);

const MarqueeRow = ({
  slides,
  direction,
}: {
  slides: Slide[];
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
      duration: 110000,
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
        className="flex gap-5 md:gap-6 pointer-events-none"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {items.map((slide, i) => (
          <div
            key={`${slide.title}-${i}`}
            className="shrink-0 relative overflow-hidden rounded-2xl cursor-pointer group"
            style={{ width: "clamp(520px, 42vw, 820px)" }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading={i < 6 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/10 to-transparent" />

              <div className="absolute top-5 left-5 md:top-6 md:left-6">
                <span className="inline-flex items-center rounded-full bg-warm-white/90 backdrop-blur-sm px-3 py-1.5 text-xs md:text-sm tracking-wide text-graphite font-medium">
                  {slide.price} <span className="ml-1 text-graphite/60">комплект</span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground tracking-tight font-heading leading-tight">
                  {slide.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                  <span className="text-sm md:text-base">Смотреть коллекцию</span>
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
              Каталог Sofia
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mt-3 max-w-2xl leading-[1.05]">
              Межкомнатные двери
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            22 коллекции — от лаконичной классики до авторских арт-объектов.
            Каждое полотно адаптируется под ваш проект и бюджет.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-6">
        <MarqueeRow slides={row1} direction="left" />
        <MarqueeRow slides={row2} direction="right" />
      </div>
    </section>
  );
};

export default CollectionsMarquee;
