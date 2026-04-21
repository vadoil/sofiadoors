import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { framyrItems } from "@/data/framyrCatalog";
import alineDoors from "@/assets/aline/aline-doors.png";
import alinePartitions from "@/assets/aline/aline-partitions.png";
import alineSliding from "@/assets/aline/aline-sliding.png";

// Маппинг карточек коллекций → внутренние страницы (если есть)
const collectionRoutes: Record<string, string> = {
  Эрте: "/catalog/erte",
};

// Стеновые панели — 5 коллекций (плейсхолдеры, заполним позже)
const wallPanels = [
  { name: "Шпон", desc: "Натуральная фактура дерева", image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/536/586yihqci2cm39ab1qkk8w0h5ozd7d8f.webp" },
  { name: "Эмаль", desc: "Гладкая матовая поверхность", image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/6ce/2zrf60endnaltrjgv6ignce8ymrd97la.webp" },
  { name: "Нанотекс", desc: "Износостойкое покрытие", image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/41c/y81fvacdfm53pvzcvyixcfbw6knfmibj.webp" },
  { name: "Стекло", desc: "Светопрозрачные панели", image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/8ed/gd1ccaj0bfs8ljx0mj3y97fs6rzfcg0j.webp" },
  { name: "Зеркало", desc: "Расширяют пространство", image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/fdb/ub25pnmcjahv13abzh8vswhfvrkpivmq.webp" },
];

const alineBlocks = [
  { name: "Распашные А-лайн", desc: "Алюминиевые полотна как обычные распашные двери", image: alineDoors },
  { name: "Перегородки А-лайн", desc: "Раздвижная система с любым полотном фабрики", image: alinePartitions },
  { name: "Раздвижные А-лайн", desc: "Полотно вдоль стены с креплением к потолку", image: alineSliding },
];

const doors = framyrItems.filter((i) => i.category === "Межкомнатные двери");

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── 1. Двери ─────────────────────────────── */}
      <section className="pt-28 pb-16 md:pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Каталог · Раздел 1
          </p>
          <h1 className="text-3xl md:text-5xl tracking-tight mb-6 font-heading">
            22 коллекции межкомнатных дверей
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-10 md:mb-14 leading-relaxed">
            Полный модельный ряд фабрики Фрамир — от лаконичной классики
            до авторских арт-объектов. Каждая коллекция адаптируется под
            ваш проект и бюджет.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {doors.map((item) => {
              const internal = collectionRoutes[item.name];
              const CardInner = (
                <>
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-secondary/40">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {item.category}
                    </span>
                    <h3 className="text-base md:text-lg tracking-tight font-heading mt-1">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-primary font-medium">
                      {item.priceFrom}
                    </p>
                  </div>
                </>
              );

              return internal ? (
                <Link key={item.name} to={internal} className="group block">
                  {CardInner}
                </Link>
              ) : (
                <article key={item.name} className="group">
                  {CardInner}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. Стеновые панели ────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Каталог · Раздел 2
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-heading">
            Коллекция стеновых панелей
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10 md:mb-14 leading-relaxed">
            Пять покрытий — от натурального шпона до зеркала. Подбираются
            в один проект с дверями для цельного интерьера.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {wallPanels.map((p) => (
              <article key={p.name} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-background">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3 px-1">
                  <h3 className="text-base md:text-lg tracking-tight font-heading">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. А-лайн ─────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Каталог · Раздел 3
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-heading">
            Алюминиевые решения А-лайн
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10 md:mb-14 leading-relaxed">
            Три формата на одной системе: распашные двери, перегородки
            и раздвижные полотна вдоль стены.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {alineBlocks.map((b) => (
              <article key={b.name} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-secondary/40">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 px-1">
                  <h3 className="text-lg md:text-xl tracking-tight font-heading">
                    {b.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <a
              href="/#help"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-bronze text-bronze-foreground px-8 py-4 text-sm md:text-base font-medium tracking-wide transition-all duration-300 hover:bg-bronze/90 hover:gap-3"
            >
              Запросить расчёт по каталогу
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
