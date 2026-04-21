import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import erteHero from "@/assets/erte-hero-banner.png";

const Erte = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero banner */}
      <section className="pt-24 md:pt-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={erteHero}
              alt="Коллекция дверей Эрте — ар-деко в эмали"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Title */}
      <section className="py-12 md:py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться в каталог
          </Link>

          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Коллекция · Ар-деко в эмали
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-[1.05]">
            Эрте
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Авторская коллекция в стилистике ар-деко: вертикальные
            каннелюры, тонкие линии латуни и благородная эмаль.
            Подробное наполнение страницы — следующим шагом.
          </p>

          <p className="mt-10 text-sm text-bronze font-medium">
            от 48 545 ₽ за комплект
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Erte;
