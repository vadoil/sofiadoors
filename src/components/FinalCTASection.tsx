import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import promoElegant from "@/assets/cta-interior.jpg";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-44 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background image */}
      <img
        src={promoElegant}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/70 backdrop-blur-[2px]" />

      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 font-heading text-background opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
        >
          Подберём двери Фрамир, которые действительно подойдут вашему интерьеру
        </h2>
        <p
          className={`text-background/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
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
