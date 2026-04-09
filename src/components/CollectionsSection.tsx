import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import promoElegant from "@/assets/promo-elegant.jpg";
import promoFokus from "@/assets/promo-fokus.jpg";
import promoOriginal from "@/assets/promo-original.jpg";
import promoHidden from "@/assets/promo-hidden.jpg";
import promoSolid from "@/assets/promo-solid.jpg";
import promoGlass from "@/assets/promo-glass.jpg";

const DEADLINE = new Date("2026-04-13T23:59:59");

const promos = [
  { image: promoElegant },
  { image: promoOriginal },
  { image: promoFokus },
  { image: promoHidden },
  { image: promoSolid },
  { image: promoGlass },
];

const useCountdown = (target: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target.getTime() - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
};

const CountdownBadge = () => {
  const { days, hours, minutes, seconds } = useCountdown(DEADLINE);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="absolute top-3 left-3 z-10">
      <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-lg">
        <span>🔥</span>
        <span>{days}д</span>
        <span>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
      </div>
    </div>
  );
};

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
          Успейте приобрести двери Sofia по специальным ценам. Акции ограничены по времени.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, i) => (
            <div
              key={i}
              className={`group rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 hover:border-accent/30 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="relative overflow-hidden">
                <CountdownBadge />
                <img
                  src={promo.image}
                  alt="Акция Sofia"
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
