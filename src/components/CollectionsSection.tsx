import { useState } from "react";
import CollectionCard from "./catalog/CollectionCard";
import SystemCard from "./catalog/SystemCard";
import {
  categories,
  swingCollections,
  glassCollections,
  hiddenCollections,
  slidingSystems,
  partitions,
  fireCollections,
  decorData,
  accessoriesData,
  type CategoryId,
} from "@/data/catalogData";

const CollectionsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("swing");

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
          Технический каталог фабрики Sofia 2026. Все коллекции, системы, отделки и фурнитура для вашего проекта.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Распашные двери */}
        {activeCategory === "swing" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {swingCollections.map((col) => (
              <CollectionCard key={col.name} collection={col} />
            ))}
          </div>
        )}

        {/* Стеклянные двери */}
        {activeCategory === "glass" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glassCollections.map((col) => (
              <CollectionCard key={col.name} collection={col} />
            ))}
          </div>
        )}

        {/* Скрытые двери */}
        {activeCategory === "hidden" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hiddenCollections.map((col) => (
              <CollectionCard key={col.name} collection={col} aspect="aspect-[3/4]" />
            ))}
          </div>
        )}

        {/* Сдвижные системы */}
        {activeCategory === "sliding" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slidingSystems.map((sys) => (
              <SystemCard key={sys.name} system={sys} />
            ))}
          </div>
        )}

        {/* Перегородки */}
        {activeCategory === "partitions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partitions.map((sys) => (
              <SystemCard key={sys.name} system={sys} />
            ))}
          </div>
        )}

        {/* Пожароустойчивые */}
        {activeCategory === "fire" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fireCollections.map((sys) => (
              <SystemCard key={sys.name} system={sys} />
            ))}
          </div>
        )}

        {/* Декор и отделка */}
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

        {/* Фурнитура */}
        {activeCategory === "accessories" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessoriesData.map((group) => (
              <div key={group.category} className="rounded-2xl border border-border p-8">
                <h3 className="text-lg tracking-tight mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionsSection;
