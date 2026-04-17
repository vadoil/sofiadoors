import { useMemo, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, styleFilters, roomFilters } from "@/data/portfolioData";

const designerFilters = Array.from(new Set(projects.map((p) => p.designer))).sort();

const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
      active
        ? "bg-graphite text-warm-white border-graphite"
        : "bg-warm-white text-graphite/80 border-stone/60 hover:border-graphite/40"
    }`}
  >
    {label}
  </button>
);

const FilterGroup = ({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
}) => (
  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
      {title}
    </p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <FilterChip
          key={opt}
          label={opt}
          active={selected.includes(opt)}
          onClick={() => onToggle(opt)}
        />
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  const [styles, setStyles] = useState<string[]>([]);
  const [rooms, setRooms] = useState<string[]>([]);
  const [designers, setDesigners] = useState<string[]>([]);

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (val: string) => {
    setter((prev) => (prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]));
  };

  const reset = () => {
    setStyles([]);
    setRooms([]);
    setDesigners([]);
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (styles.length && !styles.includes(p.style)) return false;
      if (rooms.length && !rooms.includes(p.room)) return false;
      if (designers.length && !designers.includes(p.designer)) return false;
      return true;
    });
  }, [styles, rooms, designers]);

  const hasFilters = styles.length + rooms.length + designers.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Портфолио
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] max-w-3xl">
            Фрамир в реальных интерьерах
          </h1>
          <p className="text-muted-foreground max-w-2xl mt-6 text-base md:text-lg leading-relaxed">
            Более 150 проектов с дверями Фрамир: квартиры, дома, офисы и
            общественные пространства. Дизайнеры выбирают нас за безупречное
            качество и широкий выбор отделки.
          </p>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <div>
              <p className="text-3xl md:text-4xl font-heading text-graphite">
                {projects.length}+
              </p>
              <p className="text-muted-foreground">проектов</p>
            </div>
            <div className="w-px h-10 bg-stone/60" />
            <div>
              <p className="text-3xl md:text-4xl font-heading text-graphite">
                {designerFilters.length}
              </p>
              <p className="text-muted-foreground">дизайн-студий</p>
            </div>
            <div className="w-px h-10 bg-stone/60" />
            <div>
              <p className="text-3xl md:text-4xl font-heading text-graphite">22</p>
              <p className="text-muted-foreground">коллекции</p>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="px-6 md:px-16 lg:px-24 pb-10">
        <div className="max-w-7xl mx-auto bg-warm-white/60 border border-stone/60 rounded-2xl p-6 md:p-8 space-y-6">
          <FilterGroup
            title="Стиль"
            options={styleFilters}
            selected={styles}
            onToggle={toggle(setStyles)}
          />
          <FilterGroup
            title="Тип помещения"
            options={roomFilters}
            selected={rooms}
            onToggle={toggle(setRooms)}
          />
          <FilterGroup
            title="Дизайнер"
            options={designerFilters}
            selected={designers}
            onToggle={toggle(setDesigners)}
          />

          <div className="flex items-center justify-between pt-2 border-t border-stone/60">
            <p className="text-sm text-muted-foreground">
              Найдено проектов: <span className="text-graphite font-medium">{filtered.length}</span>
            </p>
            {hasFilters && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-sm text-graphite/70 hover:text-graphite transition-colors"
              >
                <X className="w-4 h-4" />
                Сбросить фильтры
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Сетка проектов */}
      <section className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              По выбранным фильтрам ничего не найдено. Попробуйте сбросить фильтры.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((project) => (
                <article
                  key={project.slug}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-secondary/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-warm-white/90 backdrop-blur-sm text-graphite text-xs px-3 py-1 rounded-full">
                        {project.style}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <p className="text-warm-white/70 text-xs uppercase tracking-[0.15em]">
                        {project.designer}
                      </p>
                      <h3 className="text-warm-white text-xl md:text-2xl font-heading tracking-tight mt-1.5 leading-tight">
                        {project.title}
                      </h3>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-warm-white/80 text-sm group-hover:text-warm-white">
                        Смотреть проект
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
                    <span>{project.room}</span>
                    <span>Коллекция «{project.collection}»</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto bg-graphite text-warm-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight">
              Хотите свой проект в нашем портфолио?
            </h2>
            <p className="text-warm-white/70 mt-3">
              Расскажите о задаче — подберём двери, бесплатно посчитаем смету и
              согласуем все детали с вашим дизайнером.
            </p>
          </div>
          <a
            href="/#help"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shrink-0"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
