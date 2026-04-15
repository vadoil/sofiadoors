import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  swingCollections,
  glassCollections,
  hiddenCollections,
  slidingSystems,
  partitions,
  fireCollections,
  type Collection,
  type SystemItem,
} from "@/data/catalogData";

const collectionFeatures: Record<string, string[]> = {
  "Фокус": ["лаконичный профиль", "выверенная база", "идеальна для первого выбора"],
  "Оригинал": ["стекло и дерево", "строгие линии", "универсальный дизайн"],
  "Элегант": ["классические формы", "чёткие линии", "спокойные цвета"],
  "Акустика": ["полотно 60 мм", "шумоизоляция 42 дБ", "тепло- и звукоизоляция"],
  "Скайлайн": ["высота до 3500 мм", "без горизонтального наличника", "расширяет пространство"],
  "Метаморфоза": ["нестандартные формы", "ни классика ни модерн", "для смелых интерьеров"],
  "Листва": ["гравировка с природными мотивами", "коллекции сочетаются", "дизайн Франко Поли"],
  "Исток": ["авторские модели", "широкая линейка", "уникальный характер"],
};

// Unified item type for the wall
type CatalogItem = {
  name: string;
  designer?: string;
  description: string;
  image: string;
  category: string;
  features?: string[];
};

const allItems: CatalogItem[] = [
  ...swingCollections.map((c) => ({
    name: c.name,
    designer: c.designer,
    description: c.description,
    image: c.image,
    category: "Распашные",
    features: collectionFeatures[c.name],
  })),
  ...glassCollections.map((c) => ({
    name: c.name,
    designer: c.designer,
    description: c.description,
    image: c.image,
    category: "Стеклянные",
  })),
  ...hiddenCollections.map((c) => ({
    name: c.name,
    description: c.description,
    image: c.image,
    category: "Скрытые",
  })),
  ...slidingSystems.map((s) => ({
    name: s.name,
    description: s.description,
    image: s.image,
    category: "Сдвижные",
  })),
  ...partitions.map((s) => ({
    name: s.name,
    description: s.description,
    image: s.image,
    category: "Перегородки",
  })),
  ...fireCollections.map((s) => ({
    name: s.name,
    description: s.description,
    image: s.image,
    category: "Пожароустойчивые",
  })),
];

const CatalogCard = ({ item }: { item: CatalogItem }) => {
  const isPng = item.image.endsWith('.png');

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-secondary/30">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
            isPng ? "object-contain object-bottom drop-shadow-2xl" : "object-cover"
          }`}
        />
      </div>
      <div className="mt-3 px-1">
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {item.category}
        </span>
        {item.designer && (
          <p className="text-xs text-muted-foreground/60 mt-0.5">{item.designer}</p>
        )}
        <h3 className="text-base md:text-lg tracking-tight font-heading mt-1">
          {item.name}
        </h3>
        <p className="mt-1 text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-28 pb-24 md:pb-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Каталог
          </p>
          <h1 className="text-3xl md:text-5xl tracking-tight mb-6 font-heading">
            Все коллекции Sofia
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-14 leading-relaxed">
            Каждая коллекция — готовое решение для определённого стиля. Двери, перегородки, системы — всё в одном месте.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allItems.map((item) => (
              <CatalogCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Catalog;
