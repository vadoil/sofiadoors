import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Архитектурный интерьер с дверями Sofia"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-graphite/40" />
      <div className="relative z-10 flex h-full flex-col justify-end pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl tracking-tight text-primary-foreground leading-[1.05] animate-reveal">
            Двери Sofia для архитектурных интерьеров в&nbsp;Самаре
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl animate-reveal animate-reveal-delay-1">
            Подбор коллекций, отделок и решений под ваш проект
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-reveal animate-reveal-delay-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl bg-primary-foreground px-8 py-4 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary-foreground/90 active:scale-95"
            >
              Подобрать под проект
            </a>
            <a
              href="#collections"
              className="inline-flex items-center rounded-2xl border border-primary-foreground/30 px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10 active:scale-95"
            >
              Смотреть коллекции
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
