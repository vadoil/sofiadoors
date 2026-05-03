import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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
import doorRimini from "@/assets/door-rimini.png";
import doorBase from "@/assets/door-base.png";
import doorAline from "@/assets/door-aline.png";
import doorDuo from "@/assets/door-duo.png";
import doorPrime from "@/assets/door-prime.png";
import doorRhythm from "@/assets/door-rhythm.png";
import doorErte from "@/assets/door-erte.png";
import doorCatalina from "@/assets/door-catalina.png";
import doorElegans from "@/assets/door-elegans.png";
import doorFlorence from "@/assets/door-florence.png";
import doorSavona from "@/assets/door-savona.png";
import doorTwin from "@/assets/door-twin.png";
import doorSolo from "@/assets/door-solo.png";
import doorDuet from "@/assets/door-duet.png";
import doorKanva from "@/assets/door-kanva.png";
import doorEmma from "@/assets/door-emma.png";
import doorArta from "@/assets/door-arta.png";
import doorOmega from "@/assets/door-omega.png";
import doorTitanium from "@/assets/door-titanium.png";
import doorNeo from "@/assets/door-neo.png";
import sofiaMaster from "@/assets/sofia-master.png";
import sofiaGrunt from "@/assets/sofia-grunt.png";

type Slide = {
  image: string;
  title: string;
  price: string;
  href?: string;
};

const FRAMYR = "https://framyr.ru/catalog";

// 22 коллекции Фрамир — по 11 в каждом ряду
const allSlides: Slide[] = [
  { image: sofiaMaster, title: "Мастер", price: "от 88 100 ₽", href: `${FRAMYR}/master/` },
  { image: sofiaGrunt, title: "Двери в грунте под покраску", price: "от 35 640 ₽", href: `${FRAMYR}/dveri-v-grunte/` },
  { image: doorBase, title: "Бэйс", price: "от 24 365 ₽", href: `${FRAMYR}/beis/` },
  { image: doorAline, title: "А-лайн", price: "от 76 805 ₽", href: `${FRAMYR}/a-layn/` },
  { image: doorDuo, title: "Дуо — двусторонняя коллекция", price: "от 64 575 ₽", href: `${FRAMYR}/duo/` },
  { image: doorPrime, title: "Прайм", price: "от 71 547 ₽", href: `${FRAMYR}/praym/` },
  { image: doorRhythm, title: "Ритм", price: "от 44 905 ₽", href: `${FRAMYR}/ritm/` },
  { image: doorErte, title: "Эрте", price: "от 48 545 ₽", href: "/catalog/erte" },
  { image: doorCatalina, title: "Каталина", price: "от 66 750 ₽", href: `${FRAMYR}/katalina/` },
  { image: doorElegans, title: "Элеганс", price: "от 27 020 ₽", href: `${FRAMYR}/elegans/` },
  { image: doorFlorence, title: "Флоренция", price: "от 65 535 ₽", href: `${FRAMYR}/florentsiya/` },

  { image: doorSavona, title: "Савона", price: "от 53 400 ₽", href: `${FRAMYR}/savona/` },
  { image: doorTwin, title: "Твин", price: "от 47 330 ₽", href: `${FRAMYR}/tvin/` },
  { image: doorSolo, title: "Соло", price: "от 52 285 ₽", href: `${FRAMYR}/solo/` },
  { image: doorDuet, title: "Дуэт", price: "от 43 690 ₽", href: `${FRAMYR}/duet/` },
  { image: doorKanva, title: "Канва", price: "от 25 825 ₽", href: `${FRAMYR}/kanva/` },
  { image: doorEmma, title: "Эмма", price: "от 47 330 ₽", href: `${FRAMYR}/emma/` },
  { image: doorArta, title: "Арта", price: "от 29 630 ₽", href: `${FRAMYR}/arta/` },
  { image: doorOmega, title: "Омега", price: "от 50 975 ₽", href: `${FRAMYR}/omega/` },
  { image: doorTitanium, title: "Титаниум", price: "от 28 605 ₽", href: `${FRAMYR}/titanium/` },
  { image: doorNeo, title: "Нео", price: "от 28 000 ₽", href: `${FRAMYR}/neo/` },
  { image: doorRimini, title: "Римини", price: "от 49 760 ₽", href: `${FRAMYR}/rimini/` },
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
  const resumeTimer = useRef<number>(0);
  const dragRef = useRef({
    isDown: false,
    moved: false,
    startX: 0,
    startTime: 0,
    pointerId: 0,
  });

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

  const scheduleResume = useCallback(() => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      animRef.current?.play();
    }, 1200);
  }, []);

  const shiftTime = useCallback(
    (delta: number) => {
      const anim = animRef.current;
      if (!anim || anim.currentTime == null) return;
      const multiplier = direction === "left" ? 1 : -1;
      const newTime = (anim.currentTime as number) + delta * multiplier;
      anim.currentTime = Math.max(0, newTime);
    },
    [direction]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      const delta = e.deltaY || e.deltaX;
      if (Math.abs(delta) < 1) return;
      animRef.current?.pause();
      shiftTime(delta * 8);
      scheduleResume();
    },
    [shiftTime, scheduleResume]
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    window.clearTimeout(resumeTimer.current);
    dragRef.current = {
      isDown: true,
      moved: false,
      startX: e.clientX,
      startTime: (animRef.current?.currentTime as number) || 0,
      pointerId: e.pointerId,
    };
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.isDown) return;
      const dx = e.clientX - dragRef.current.startX;
      if (!dragRef.current.moved && Math.abs(dx) > 6) {
        dragRef.current.moved = true;
        animRef.current?.pause();
        try {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        } catch {}
      }
      if (!dragRef.current.moved) return;
      const multiplier = direction === "left" ? -1 : 1;
      const anim = animRef.current;
      if (anim) {
        anim.currentTime = Math.max(0, dragRef.current.startTime + dx * 6 * multiplier);
      }
    },
    [direction]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.isDown) return;
      dragRef.current.isDown = false;
      if (dragRef.current.moved) {
        try {
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
        } catch {}
        scheduleResume();
      }
    },
    [scheduleResume]
  );

  const handleClickCapture = useCallback((e: React.MouseEvent) => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "pan-y" }}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={handleClickCapture}
    >
      <div
        ref={trackRef}
        className="flex gap-5 md:gap-6"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {items.map((slide, i) => {
          const Inner = (
            <div className="aspect-[4/3] relative overflow-hidden pointer-events-none">
              <img
                src={slide.image}
                alt={slide.title}
                draggable={false}
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
          );

          const className =
            "shrink-0 relative overflow-hidden rounded-2xl group w-[78vw] sm:w-[clamp(520px,42vw,820px)] block";

          if (slide.href) {
            const isExternal = /^https?:\/\//.test(slide.href);
            if (isExternal) {
              return (
                <a
                  key={`${slide.title}-${i}`}
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  className={className}
                >
                  {Inner}
                </a>
              );
            }
            return (
              <Link
                key={`${slide.title}-${i}`}
                to={slide.href}
                draggable={false}
                className={className}
              >
                {Inner}
              </Link>
            );
          }
          return (
            <div key={`${slide.title}-${i}`} className={className}>
              {Inner}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CollectionsMarquee = () => {
  return (
    <section id="collections" className="relative py-10 md:py-24 px-0 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-6 md:mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Каталог Фрамир
            </span>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl tracking-tight mt-3 max-w-2xl leading-[1.1]">
              Межкомнатные двери
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            22 коллекции — от лаконичной классики до авторских арт-объектов.
            Каждое полотно адаптируется под ваш проект и бюджет.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6">
        <MarqueeRow slides={row1} direction="left" />
        <MarqueeRow slides={row2} direction="right" />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-6 md:mt-14 flex justify-center">
        <a
          href="https://framyr.ru/catalog/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-bronze text-bronze-foreground px-8 py-4 text-sm md:text-base font-medium tracking-wide transition-all duration-300 hover:bg-bronze/90 hover:gap-3 w-full sm:w-auto"
        >
          Все двери Фрамир
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default CollectionsMarquee;
