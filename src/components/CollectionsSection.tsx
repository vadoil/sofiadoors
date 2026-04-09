import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  categories,
  swingCollections,
  glassCollections,
  hiddenCollections,
  slidingSystems,
  partitions,
  fireCollections,
  type CategoryId,
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

const CollectionPremiumCard = ({ collection }: { collection: Collection }) => {
  const features = collectionFeatures[collection.name] || [];
  
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] cursor-pointer">
      <img
        src={collection.image}
        alt={collection.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
        {collection.designer && (
          <p className="text-xs text-primary-foreground/45 uppercase tracking-wider mb-1">
            {collection.designer}
          </p>
        )}
        <h3 className="text-2xl md:text-3xl text-primary-foreground tracking-tight font-heading">
          {collection.name}
        </h3>
        <p className="mt-2 text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
          {collection.description}
        </p>
        {features.length > 0 && (
          <div className="mt-3 space-y-1">
            {features.map((f) => (
              <p key={f} className="text-primary-foreground/55 text-xs">— {f}</p>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-2xl bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 text-xs text-primary-foreground border border-primary-foreground/10 transition-colors hover:bg-primary-foreground/25 cursor-pointer">
            Смотреть коллекцию
          </span>
          <span className="rounded-2xl bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 text-xs text-primary-foreground border border-primary-foreground/10 transition-colors hover:bg-primary-foreground/25 cursor-pointer">
            Подобрать под интерьер
          </span>
        </div>
      </div>
    </div>
  );
};

const SystemPremiumCard = ({ system }: { system: SystemItem }) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
    <img
      src={system.image}
      alt={system.name}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-transparent" />
    <div className="relative z-10 flex h-full flex-col justify-end p-6">
      <h3 className="text-xl text-primary-foreground tracking-tight font-heading">{system.name}</h3>
      <p className="mt-1 text-primary-foreground/60 text-sm leading-relaxed">{system.description}</p>
    </div>
  </div>
);

const CollectionsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("swing");
  const { ref, isVisible } = useScrollReveal();

  const renderContent = () => {
    switch (activeCategory) {
      case "swing":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {swingCollections.map((col) => <CollectionPremiumCard key={col.name} collection={col} />)}
          </div>
        );
      case "glass":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {glassCollections.map((col) => <CollectionPremiumCard key={col.name} collection={col} />)}
          </div>
        );
      case "hidden":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hiddenCollections.map((col) => <CollectionPremiumCard key={col.name} collection={col} />)}
          </div>
        );
      case "sliding":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {slidingSystems.map((sys) => <SystemPremiumCard key={sys.name} system={sys} />)}
          </div>
        );
      case "partitions":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partitions.map((sys) => <SystemPremiumCard key={sys.name} system={sys} />)}
          </div>
        );
      case "fire":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fireCollections.map((sys) => <SystemPremiumCard key={sys.name} system={sys} />)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="collections" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Коллекции Sofia
        </p>
        <h2
          className={`text-3xl md:text-5xl tracking-tight mb-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Коллекции как сценарии интерьера
        </h2>
        <p
          className={`text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.15s" }}
        >
          Каждая коллекция — готовое решение для определённого стиля. Выберите направление — покажем подходящие модели.
        </p>

        <div className={`flex flex-wrap gap-2 mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          {categories
            .filter((c) => !["decor", "accessories"].includes(c.id))
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default CollectionsSection;
