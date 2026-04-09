import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import doorFokus from "@/assets/door-fokus.jpg";
import doorSkyline from "@/assets/door-skyline.jpg";
import doorOriginal from "@/assets/door-original.jpg";
import doorElegant from "@/assets/door-elegant.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorHidden from "@/assets/door-hidden.jpg";
import scenarioResidence from "@/assets/scenario-residence.jpg";
import scenarioHotel from "@/assets/scenario-hotel.jpg";

const projects = [
  { image: scenarioResidence, style: "Современный", collection: "Элегант", finish: "Эмаль светлая" },
  { image: scenarioHotel, style: "Минимализм", collection: "Оригинал", finish: "Шпон натуральный" },
  { image: doorFokus, style: "Минимализм", collection: "Фокус", finish: "Эмаль RAL" },
  { image: doorSkyline, style: "Лофт", collection: "Скайлайн", finish: "Шпон дуб" },
  { image: doorOriginal, style: "Современный", collection: "Оригинал", finish: "Стекло триплекс" },
  { image: doorElegant, style: "Неоклассика", collection: "Элегант", finish: "Эмаль" },
  { image: doorGlass, style: "Минимализм", collection: "Рейн", finish: "Стекло" },
  { image: doorHidden, style: "Минимализм", collection: "Скрытый короб", finish: "Под покраску" },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Портфолио
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <h2
            className={`text-3xl md:text-5xl tracking-tight opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Реальные интерьеры с дверями Sofia
          </h2>
          <a
            href="#help"
            className={`inline-flex items-center rounded-2xl border border-border px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-secondary active:scale-95 shrink-0 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            Хочу похожее решение
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <img
                src={project.image}
                alt={`${project.style} — ${project.collection}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary-foreground text-sm font-medium">{project.collection}</p>
                <p className="text-primary-foreground/70 text-xs">{project.style} · {project.finish}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
