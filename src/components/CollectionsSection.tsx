import { useState } from "react";
import collectionFokus from "@/assets/collection-fokus.jpg";
import collectionSkyline from "@/assets/collection-skyline.jpg";
import collectionOriginal from "@/assets/collection-original.jpg";
import collectionElegant from "@/assets/collection-elegant.jpg";
import collectionMetamorfoza from "@/assets/collection-metamorfoza.jpg";
import collectionAkustika from "@/assets/collection-akustika.jpg";
import collectionSliding from "@/assets/collection-sliding.jpg";
import collectionFire from "@/assets/collection-fire.jpg";
import collectionMinimal from "@/assets/collection-minimal.jpg";
import collectionHidden from "@/assets/collection-hidden.jpg";
import collectionDecorative from "@/assets/collection-decorative.jpg";
import collectionTechnical from "@/assets/collection-technical.jpg";

type CategoryId = "doors" | "systems" | "decor" | "accessories";

const categories: { id: CategoryId; label: string }[] = [
  { id: "doors", label: "Распашные двери" },
  { id: "systems", label: "Системы и перегородки" },
  { id: "decor", label: "Декор и отделка" },
  { id: "accessories", label: "Фурнитура" },
];

const doorCollections = [
  {
    name: "Фокус",
    designer: "Софья Лаб",
    description: "Базовая глухая дверь в стандартной комплектации. Ничего лишнего — только выверенные решения, доведённые до идеала.",
    models: ["ДВ 32", "ДВ 33"],
    image: collectionFokus,
  },
  {
    name: "Скайлайн",
    designer: "Студия Гарсия Кумини",
    description: "Двери высотой до потолка. Без горизонтального наличника — зрительно расширяют пространство.",
    models: ["ДВ 94", "ДВ 96"],
    image: collectionSkyline,
  },
  {
    name: "Оригинал",
    designer: "Франко Поли",
    description: "Строгие и современные линии. Соотношение между деревянными деталями и стеклянными вставками.",
    models: ["ДВ 01", "ДВ 02", "ДВ 03", "ДВ 04", "ДВ 07", "ДВ 18"],
    image: collectionOriginal,
  },
  {
    name: "Элегант",
    designer: "Sofia",
    description: "Классические формы с гравировкой. Элегантные панели и утончённые линии для традиционных интерьеров.",
    models: ["ДВ 38", "ДВ 39", "ДВ 158", "ДВ 168", "ДВ 259", "ДВ 269"],
    image: collectionElegant,
  },
  {
    name: "Метаморфоза",
    designer: "Софья Лаб",
    description: "Кардинальное переосмысление привычных форм. Ни классика, ни модерн — нечто абсолютно новое.",
    models: ["ДВ 170", "ДВ 171", "ДВ 172", "ДВ 173"],
    image: collectionMetamorfoza,
  },
  {
    name: "Акустика",
    designer: "Софья Лаб",
    description: "Полотно 60 мм с повышенными характеристиками тепло- и шумоизоляции.",
    models: ["ДВ 116", "ДВ 117", "ДВ 118", "ДВ 119"],
    image: collectionAkustika,
  },
  {
    name: "Рейн",
    designer: "Sofia",
    description: "Дверь со стеклом с двух сторон. Лёгкость и прозрачность в архитектурном решении.",
    models: ["ДВ 22"],
    image: collectionMinimal,
  },
  {
    name: "Графика",
    designer: "Sofia",
    description: "Декоративные графические паттерны на полотне. Дверь как арт-объект интерьера.",
    models: ["GR10–GR17"],
    image: collectionDecorative,
  },
];

const systemsData = [
  {
    name: "Сдвижные системы",
    description: "Мэджик, Компак 90, Компак 180, Скрытый Пенал — решения для экономии пространства.",
    items: ["Мэджик", "Компак 90", "Компак 180", "Скрытый Пенал"],
    image: collectionSliding,
  },
  {
    name: "Перегородки",
    description: "Алюминиевые реечные перегородки Сёдзи и Сёдзи Лайт. Деревянные и алюминиевые со стеклом.",
    items: ["Сёдзи", "Сёдзи Лайт", "Деревянные реечные", "Алюминиевые со стеклом"],
    image: collectionHidden,
  },
  {
    name: "Пожароустойчивые двери",
    description: "Сертифицированные решения для коммерческих и жилых объектов.",
    items: ["EI 30", "EI 60"],
    image: collectionFire,
  },
];

const decorData = [
  { name: "Стеновые панели 5G", description: "Современные панели для отделки стен" },
  { name: "Декоративные рейки", description: "Реечный декор для стен и потолка" },
  { name: "Зеркальные панели", description: "Отделка зеркальными панелями" },
  { name: "ПСП", description: "Панели с покрытием для стен и потолка" },
  { name: "Плинтус ЕВРО", description: "Классический европейский плинтус" },
  { name: "Теневой плинтус", description: "Скрытый теневой плинтус для минимализма" },
];

const accessoriesData = [
  {
    category: "Ручки",
    items: ["Благо", "Дар", "Луч", "Бест 2.0", "Вест", "Вейв", "Ирис", "Винг 2.0", "Гранде", "Купе", "Купе 2.0"],
  },
  {
    category: "Петли",
    items: ["Феникс", "Колибри", "Кондор"],
  },
  {
    category: "Замки",
    items: ["AGB Evolution", "AGB Polaris (магнитный)", "Border", "Замок для Манильона/Гранде"],
  },
];

const CollectionsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("doors");

  return (
    <section id="collections" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Каталог продукции
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
          Полный каталог решений Sofia
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          На основе технического каталога фабрики Sofia 2026. Все коллекции, системы, отделки и фурнитура для вашего проекта.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Doors */}
        {activeCategory === "doors" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doorCollections.map((col) => (
              <div
                key={col.name}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={col.image}
                  alt={col.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-1">
                    Дизайнер — {col.designer}
                  </p>
                  <h3 className="text-2xl md:text-3xl text-primary-foreground tracking-tight">
                    {col.name}
                  </h3>
                  <p className="mt-2 text-primary-foreground/70 text-sm max-w-sm">
                    {col.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {col.models.map((model) => (
                      <span
                        key={model}
                        className="rounded-full border border-primary-foreground/20 px-3 py-1 text-xs text-primary-foreground/80 transition-colors duration-200 group-hover:border-primary-foreground/40"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Systems */}
        {activeCategory === "systems" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemsData.map((sys) => (
              <div
                key={sys.name}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={sys.image}
                  alt={sys.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <h3 className="text-xl md:text-2xl text-primary-foreground tracking-tight">
                    {sys.name}
                  </h3>
                  <p className="mt-2 text-primary-foreground/70 text-sm">
                    {sys.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sys.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary-foreground/20 px-3 py-1 text-xs text-primary-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Decor */}
        {activeCategory === "decor" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {decorData.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border p-6 transition-colors duration-200 hover:bg-secondary/50"
              >
                <h3 className="text-lg tracking-tight mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Accessories */}
        {activeCategory === "accessories" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessoriesData.map((group) => (
              <div key={group.category} className="rounded-2xl border border-border p-8">
                <h3 className="text-xl tracking-tight mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional collections note */}
        {activeCategory === "doors" && (
          <div className="mt-12 rounded-2xl border border-border p-8">
            <h3 className="text-lg tracking-tight mb-4">Также в каталоге</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Листва", desc: "Природные мотивы" },
                { name: "Исток", desc: "Авторские модели" },
                { name: "Аркада", desc: "Арочные решения" },
                { name: "Солярис", desc: "Панели с покрытием" },
                { name: "Манильона", desc: "Интегрированная ручка" },
                { name: "Сопрано", desc: "Декоративные линии" },
                { name: "1000 линий", desc: "Текстурный рисунок" },
                { name: "Сёдзи", desc: "Японский минимализм" },
              ].map((col) => (
                <div key={col.name} className="p-4 rounded-xl bg-secondary/50">
                  <p className="font-medium text-sm">{col.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{col.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionsSection;
