import collectionMinimal from "@/assets/collection-minimal.jpg";
import collectionHidden from "@/assets/collection-hidden.jpg";
import collectionDecorative from "@/assets/collection-decorative.jpg";
import collectionTechnical from "@/assets/collection-technical.jpg";

const collections = [
  {
    category: "Минимализм",
    description: "Чистые линии, интеграция в стену, спокойная геометрия",
    items: ["Фокус", "Skyline", "Сеул", "Рейн"],
    image: collectionMinimal,
  },
  {
    category: "Скрытые и интегрированные",
    description: "Двери, которые исчезают в архитектуре",
    items: ["Скрытые двери", "Метаморфоза"],
    image: collectionHidden,
  },
  {
    category: "Декоративные / акцент",
    description: "Дверь как арт-объект и акцентный элемент интерьера",
    items: ["Графика", "1000 линий", "Сопрано", "Листва"],
    image: collectionDecorative,
  },
  {
    category: "Технические решения",
    description: "Функциональность без компромиссов",
    items: ["Акустика", "Противопожарные EI"],
    image: collectionTechnical,
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Коллекции
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-16">
          Решения под задачу,
          <br />
          а не просто каталог
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col) => (
            <div
              key={col.category}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={col.image}
                alt={col.category}
                loading="lazy"
                width={800}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl text-primary-foreground tracking-tight">
                  {col.category}
                </h3>
                <p className="mt-2 text-primary-foreground/70 text-sm max-w-sm">
                  {col.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {col.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary-foreground/20 px-3 py-1 text-xs text-primary-foreground/80 transition-colors duration-200 group-hover:border-primary-foreground/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
