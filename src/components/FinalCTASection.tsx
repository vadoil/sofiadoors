import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-foreground text-background">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 font-heading opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
        >
          Подберём двери Sofia, которые действительно подойдут вашему интерьеру
        </h2>
        <p
          className={`text-background/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Оставьте заявку — поможем выбрать коллекцию, покрытие и комплектацию без лишних ошибок и переплат.
        </p>
        <a
          href="#help"
          className={`inline-flex items-center rounded-2xl bg-background px-10 py-5 text-base font-medium text-foreground transition-all duration-200 hover:bg-background/90 active:scale-95 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          Оставить заявку
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
