import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { framyrItems } from "@/data/framyrCatalog";

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
            Все коллекции Фрамир
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-14 leading-relaxed">
            Межкомнатные двери и системы открывания фабрики Фрамир. Каждая коллекция —
            готовое решение для определённого стиля и бюджета.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {framyrItems.map((item) => (
              <article key={item.name} className="group">
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
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Catalog;
