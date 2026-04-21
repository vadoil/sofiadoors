import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import erteHero from "@/assets/erte-hero-banner.png";
import erteDoor from "@/assets/erte-door.png";

const ErteWordmark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1309 394"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="ЭРТЕ"
  >
    <g>
      <path d="M869.803 0.15332H821.867H812.089H717.713V12.8275H809.609V393.997H812.507H821.867H870.221L869.806 2.03191L869.803 0.15332Z" fill="currentColor" />
      <path d="M1309 11.688V0L1141.7 0.153418V393.997H1308.44V381.905H1153.96V132.722H1256.18V120.631H1153.96V11.688H1309Z" fill="currentColor" />
      <path d="M1121.11 0.15332H1069.07V394H1121.11V0.15332Z" fill="currentColor" />
      <path d="M663.417 39.7165C649.644 27.4994 633.641 17.903 615.855 11.1901C597.432 4.23936 577.913 0.713867 557.846 0.713867H551.435V394H563.694V252.962L582.31 250.817L582.376 250.808C618.687 245.31 649.435 232.282 671.298 213.136C682.822 203.044 691.745 191.356 697.82 178.388C704.216 164.74 707.456 149.655 707.456 133.549C707.456 115.702 703.471 98.3442 695.609 81.9535C688.029 66.1515 677.196 51.9399 663.414 39.7134L663.417 39.7165ZM695.201 133.552C695.201 194.525 641.231 238.462 563.694 240.892V12.884C637.594 15.417 695.201 68.0958 695.201 133.549V133.552Z" fill="currentColor" />
      <path d="M530.709 0.15625H476.096V394H530.709V0.15625Z" fill="currentColor" />
      <path d="M888.59 393.997H900.849V12.2702H1003.46V0.15332H888.59V393.997Z" fill="currentColor" />
      <path d="M164.086 2.9834C104.626 2.9834 51.8254 31.3814 16.8011 75.4093L28.4231 75.4156C62.3419 37.5714 110.743 14.853 164.086 14.853C181.695 14.853 199.303 18.0184 215.313 22.765V120.868L111.206 120.921L110.993 132.819L215.313 132.735L216.114 374.04C199.307 378.786 182.496 381.159 164.086 381.159C100.052 381.159 49.2248 351.049 15.9648 303.458L0.00317383 303.624C34.4225 356.631 95.2535 393.026 164.089 393.026C186.5 393.026 207.311 389.071 227.321 381.948H228.122L227.321 14.8498C207.311 7.72997 186.5 2.9834 164.089 2.9834H164.086Z" fill="currentColor" />
      <path d="M252.162 20.3887V378.783C318.596 347.927 369.823 281.472 369.823 204.729C369.823 118.492 318.596 51.2445 252.162 20.3887Z" fill="currentColor" />
    </g>
  </svg>
);

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
          <div className="mt-6">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться в каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Wordmark + intro */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-center text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8 md:mb-12">
            Коллекция · Ар-деко в эмали
          </p>
          <ErteWordmark className="w-full h-auto text-bronze/80 mx-auto max-w-[1100px]" />
          <p className="font-heading italic text-2xl md:text-4xl lg:text-5xl tracking-tight text-center mt-10 md:mt-14 leading-[1.15]">
            Роскошное.{" "}
            <span className="text-bronze">Эксклюзивное.</span> Ваше.
          </p>
        </div>
      </section>

      {/* Story + door image */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Door visual */}
          <div className="md:col-span-5 lg:col-span-5 order-2 md:order-1">
            <div className="relative mx-auto max-w-[420px]">
              <div className="absolute -inset-6 md:-inset-10 rounded-[2rem] bg-gradient-to-br from-bronze/10 via-transparent to-stone/40 blur-2xl pointer-events-none" />
              <div className="relative aspect-[3/7] overflow-hidden rounded-2xl bg-secondary/40">
                <img
                  src={erteDoor}
                  alt="Дверь Эрте — вертикальные каннелюры, эмаль, латунная фурнитура"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 space-y-6">
            <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-bronze">
              Вдохновение
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Дух ар-деко в каждой детали
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                При создании коллекции мы вдохновлялись стилем ар-деко
                с его роскошью, блеском, сложными оттенками и
                геометричными формами.
              </p>
              <p>
                Амбассадором стиля в 20 веке стал наш соотечественник
                <span className="text-foreground"> Роман Тыртов</span>,
                получивший мировую известность как художник и дизайнер
                под псевдонимом{" "}
                <span className="text-foreground italic">Эрте</span>.
              </p>
              <p>
                Мы назвали коллекцию в его честь, потому что хотели
                передать в полотнах дух ар-деко, яркость и богатство
                его образов.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <span className="text-bronze font-medium">
                от 48 545 ₽ за комплект
              </span>
              <a
                href="/#help"
                className="inline-flex items-center gap-2 text-graphite border-b border-graphite/30 hover:border-graphite pb-1 transition-colors"
              >
                Запросить расчёт
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Erte;
