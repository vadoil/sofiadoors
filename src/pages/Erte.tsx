import { Link } from "react-router-dom";
import { ArrowLeft, Download, Ruler, Truck, ShieldCheck, Palette, Play, Pause } from "lucide-react";
import RequestQuoteDialog from "@/components/RequestQuoteDialog";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import erteHero from "@/assets/erte-hero-banner.png";
import erteDoor from "@/assets/erte-door.png";
import model1 from "@/assets/erte/ПГ Эрте 1 Каннелюра с декором.webp";
import model2 from "@/assets/erte/ПГ Эрте 1 Каннелюра.webp";
import model3 from "@/assets/erte/ПГ Эрте 1 Рустика.webp";
import model4 from "@/assets/erte/ПГ Эрте 2 Рустика.webp";
import model5 from "@/assets/erte/ПО Эрте 1.webp";
import model6 from "@/assets/erte/ПО Эрте 2 Рустика.webp";
import model7 from "@/assets/erte/ПО Эрте 8.webp";
import model8 from "@/assets/erte/ПО Эрте 9.webp";
import model9 from "@/assets/erte/ПО Эрте 11.webp";
import twoSided1 from "@/assets/erte/two-sided/ПГ Эрте 1 Каннелюра Зеркало.webp";
import twoSided2 from "@/assets/erte/two-sided/ПГ Эрте 1 Каннелюра + ПГ Эрте 1 Рустика.webp";
import twoSided3 from "@/assets/erte/two-sided/ПГ Эрте 1 Рустика Зеркало.webp";
import erteVideo1 from "@/assets/erte/videos/erte-1.mp4";
import erteVideo2 from "@/assets/erte/videos/erte-2.mp4";
import portfolio1 from "@/assets/erte/portfolio/erte-portfolio-1.webp";
import portfolio2 from "@/assets/erte/portfolio/erte-portfolio-2.webp";
import portfolio3 from "@/assets/erte/portfolio/erte-portfolio-3.webp";
import portfolio4 from "@/assets/erte/portfolio/erte-portfolio-4.webp";
import portfolio5 from "@/assets/erte/portfolio/erte-portfolio-5.webp";
import portfolio6 from "@/assets/erte/portfolio/erte-portfolio-6.webp";
import portfolio7 from "@/assets/erte/portfolio/erte-portfolio-7.webp";
import portfolio8 from "@/assets/erte/portfolio/erte-portfolio-8.webp";
import portfolio9 from "@/assets/erte/portfolio/erte-portfolio-9.webp";
import portfolio10 from "@/assets/erte/portfolio/erte-portfolio-10.webp";
import detailCannelure from "@/assets/erte/detail-cannelure.webp";
import detailRustica from "@/assets/erte/detail-rustica.webp";
import detailDecorGold from "@/assets/erte/detail-decor-gold.webp";
import detailDecorSilver from "@/assets/erte/detail-decor-silver.webp";
import detailMirror from "@/assets/erte/detail-mirror.webp";
import detailNalichnik from "@/assets/erte/detail-nalichnik.webp";
import detailHandleAprile from "@/assets/erte/detail-handle-aprile.webp";
import detailHandleRaflesia from "@/assets/erte/detail-handle-raflesia.webp";

const erteVideos = [erteVideo1, erteVideo2];

const erteDetails = [
  {
    src: detailCannelure,
    title: "Каннелюра",
    text: "Волнообразная фрезеровка Каннелюра гармонично смотрится как на стенах, так и на мебели. Акценты, расставленные в разных частях дома, помогают собрать интерьер в единое целое.",
  },
  {
    src: detailRustica,
    title: "Рустика",
    text: "Геометричная фрезеровка Рустика — строгое, но изящное украшение двери. Создаёт глубокий светотеневой рисунок.",
  },
  {
    src: detailDecorGold,
    title: "Декор золото",
    text: "Декор, покрытый брашированным золотом, дополняет фрезеровку, добавляя полотнам глубины и сияния.",
  },
  {
    src: detailDecorSilver,
    title: "Декор серебро",
    text: "Дополнительные сияющие линии на полотне. Можно поставить на любую модель.",
  },
  {
    src: detailMirror,
    title: "Зеркало",
    text: "Зеркала — важный элемент стиля ар-деко. Поэтому зеркала в полотнах Эрте не только бесцветные, но и в оттенках «бронза» и «графит». Можно украсить фацетами для дополнительного сияния.",
  },
  {
    src: detailNalichnik,
    title: "Наличник Эрте",
    text: "Геометричные ступенчатые наличники продолжают фрезеровку полотен, образуя единый с дверью ансамбль.",
  },
  {
    src: detailHandleAprile,
    title: "Ручка Aprile Pina",
    text: "Аккуратная ручка на минималистичной розетке дополняет образ. Цвета: золотой, чёрный или хром.",
  },
  {
    src: detailHandleRaflesia,
    title: "Ручка Raflesia Q",
    text: "Ступенчатая, как фрезеровка. Подчёркивает геометричность модели.",
  },
];

const ertePortfolio = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
];

const erteModels = [
  { src: model1, name: "ПГ Эрте 1 Каннелюра с декором" },
  { src: model2, name: "ПГ Эрте 1 Каннелюра" },
  { src: model3, name: "ПГ Эрте 1 Рустика" },
  { src: model4, name: "ПГ Эрте 2 Рустика" },
  { src: model5, name: "ПО Эрте 1" },
  { src: model6, name: "ПО Эрте 2 Рустика" },
  { src: model7, name: "ПО Эрте 8" },
  { src: model8, name: "ПО Эрте 9" },
  { src: model9, name: "ПО Эрте 11" },
];

const erteTwoSided = [
  { src: twoSided1, name: "ПГ Эрте 1 Каннелюра Зеркало" },
  { src: twoSided2, name: "ПГ Эрте 1 Каннелюра + ПГ Эрте 1 Рустика" },
  { src: twoSided3, name: "ПГ Эрте 1 Рустика Зеркало" },
];

const erteVideoTitles = [
  "Деталь №1 — каннелюры и латунь",
  "Деталь №2 — игра света на эмали",
];

const ErteVideoPlayer = ({
  src,
  index,
}: {
  src: string;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="group">
      <div
        className="relative aspect-video overflow-hidden rounded-2xl bg-graphite/60 cursor-pointer ring-1 ring-warm-white/10 hover:ring-bronze/40 transition-all"
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src={src}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay gradient — only before first play */}
        {!started && (
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent pointer-events-none" />
        )}

        {/* Play / Pause button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-bronze text-warm-white shadow-[0_10px_30px_-8px_hsl(var(--bronze)/0.7)] group-hover:scale-105 transition-transform duration-300">
            {playing ? (
              <Pause className="w-6 h-6 md:w-7 md:h-7" />
            ) : (
              <Play className="w-6 h-6 md:w-7 md:h-7 translate-x-0.5" />
            )}
          </div>
        </div>

        {/* Index badge */}
        {!started && (
          <div className="absolute top-4 left-4 text-xs tracking-[0.25em] uppercase text-warm-white/70">
            0{index + 1}
          </div>
        )}
      </div>
      <figcaption className="mt-4 text-sm md:text-base text-warm-white/80">
        {erteVideoTitles[index] ?? `Видео ${index + 1}`}
      </figcaption>
    </figure>
  );
};

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

      {/* Модельный ряд */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
              Модельный ряд
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Ар-деко — это замысловатые костюмы артистов и фешенебельные
              обложки модных журналов. Это сочетание стиля древних
              цивилизаций и неоклассики. Это вечный праздник: бархат,
              сияние, золото. Эту многогранность мы отразили в моделях
              коллекции Erte, которую украшают фрезеровки и молдинги,
              зеркала и сложные цвета.
            </p>
            <a
              href="https://3ddd.ru/3dmodels/show/om_kollektsiia_dverei_erte_v_emali_ot_fabriki_framyr_2"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-bronze text-warm-white text-sm md:text-base font-medium tracking-wide shadow-[0_8px_24px_-8px_hsl(var(--bronze)/0.55)] hover:shadow-[0_12px_30px_-8px_hsl(var(--bronze)/0.7)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              Скачать на 3DDD
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {erteModels.map((m) => (
              <figure key={m.name} className="group">
                <div className="aspect-[3/7] overflow-hidden rounded-lg bg-background">
                  <img
                    src={m.src}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-xs md:text-sm text-muted-foreground text-center">
                  {m.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Двустороннее полотно */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
              Двустороннее полотно
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Две стороны двери — два разных полотна. С зеркалом и без,
              с каннелюрами и гладкое. С разным рисунком и глубиной
              фрезеровки. Чтобы легко создавать разные образы в смежных
              помещениях.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {erteTwoSided.map((m) => (
              <figure key={m.name} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-secondary/30">
                  <img
                    src={m.src}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-xs md:text-sm text-muted-foreground text-center">
                  {m.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Детали коллекции */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-bronze mb-4">
              Детали
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Детали коллекции
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {erteDetails.map((d, i) => (
              <figure key={d.title} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-background ring-1 ring-border/40">
                  <img
                    src={d.src}
                    alt={d.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 left-3 text-[10px] md:text-xs tracking-[0.2em] uppercase text-warm-white/90 bg-graphite/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="mt-5">
                  <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.text}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Покрытие и цвет */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-bronze mb-4">
              Покрытие и цвет
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
              Эмаль
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Полотна Эрте окрашиваются эмалью — гладкое матовое покрытие
              без бликов. Базовая палитра ниже, а вообще доступен любой
              оттенок RAL или NCS под ваш интерьер.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-7 md:gap-x-6 md:gap-y-9">
            {[
              { name: "Белоснежный", hex: "#F4F1EC" },
              { name: "Бланж (RAL 9001)", hex: "#E8E1D4" },
              { name: "Кремово-белый", hex: "#EDE6D8" },
              { name: "Пралине (NCS)", hex: "#C9BCAB" },
              { name: "Грейдж (NCS)", hex: "#B8AEA2" },
              { name: "Молескин", hex: "#B5ADA6" },
              { name: "Умбра (NCS)", hex: "#8C7F75" },
              { name: "Чёрный агат", hex: "#1B1A18" },
              { name: "Базальт (NCS)", hex: "#3A3936" },
              { name: "Пыльно-серый", hex: "#9B9A98" },
              { name: "Телегрей (RAL)", hex: "#C9CCCE" },
              { name: "Скандинавский", hex: "#DCDDDD" },
              { name: "Сигнально-белый", hex: "#EDEDEB" },
              { name: "Кашемир (NCS)", hex: "#D4CDC2" },
              { name: "Серый шёлк", hex: "#BFBDB8" },
            ].map((c) => (
              <div key={c.name} className="group flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full ring-1 ring-border/60 shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                />
                <span className="mt-3 text-[11px] md:text-xs text-muted-foreground leading-tight">
                  {c.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 md:mt-12 text-xs md:text-sm text-muted-foreground/70 max-w-2xl">
            * Цвета на экране передаются приближённо. Финальный оттенок
            подбираем по веерам RAL/NCS на замере.
          </p>
        </div>
      </section>

      {/* Видео коллекции */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-graphite text-warm-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-bronze/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-bronze/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-stone mb-4">
              Эрте в движении
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-5">
              Каннелюры, эмаль, латунь
            </h2>
            <p className="text-warm-white/70 text-base md:text-lg leading-relaxed">
              Покажем коллекцию в деталях: как ложится свет на грани,
              переливается фурнитура и работает фактура эмали.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {erteVideos.map((src, i) => (
              <ErteVideoPlayer key={i} src={src} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-bronze mb-4">
              Портфолио
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Эрте в интерьерах
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 [grid-auto-flow:dense]">
            {ertePortfolio.map((src, i) => (
              <figure
                key={i}
                className={`group overflow-hidden rounded-xl bg-background ${
                  i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Интерьер с дверями Эрте — фото ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-bronze mb-4">
              Под ключ
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Что входит в комплект
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Ruler, title: "Бесплатный замер", text: "Инженер приедет в удобное время и снимет точные размеры проёмов." },
              { icon: Palette, title: "Подбор цвета и фурнитуры", text: "Любой оттенок RAL и латунные ручки — собираем образ под ваш интерьер." },
              { icon: Truck, title: "Доставка и установка", text: "Наши монтажники по Самаре и области. Аккуратно, в срок." },
              { icon: ShieldCheck, title: "Гарантия 5 лет", text: "На полотно, эмаль и фурнитуру. Сервис от производителя." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bronze/10 text-bronze mb-5 transition-colors group-hover:bg-bronze group-hover:text-warm-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-graphite via-graphite to-graphite/95 text-warm-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-bronze/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-bronze/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1100px] mx-auto text-center">
          <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-stone mb-6">
            Коллекция Эрте
          </span>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6">
            Нравится коллекция?
          </h2>
          <p className="text-warm-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
            Оставьте заявку, и мы перезвоним, чтобы помочь выбрать модель.
          </p>
          <RequestQuoteDialog
            source="erte_cta_measurer"
            title="Вызвать замерщика"
            description="Оставьте контакты — менеджер перезвонит, согласует удобное время и пришлёт инженера на бесплатный замер."
            trigger={
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-bronze text-warm-white text-sm md:text-base font-medium tracking-wide shadow-[0_10px_30px_-10px_hsl(var(--bronze)/0.7)] hover:shadow-[0_16px_40px_-12px_hsl(var(--bronze)/0.9)] hover:-translate-y-0.5 transition-all duration-300">
                <Ruler className="w-4 h-4" />
                Вызвать замерщика
              </button>
            }
          />
          <p className="mt-6 text-xs md:text-sm text-warm-white/50">
            Замер бесплатный · Перезвоним в течение часа в рабочее время
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Erte;
