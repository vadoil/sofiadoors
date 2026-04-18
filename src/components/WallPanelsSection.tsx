import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Veneer swatches
import vAmerOreh from "@/assets/panels/swatches/veneer-amerikanskij-oreh.jpg";
import vDubGrano from "@/assets/panels/swatches/veneer-dub-grano.jpg";
import vDubNat from "@/assets/panels/swatches/veneer-dub-naturalnyj.jpg";
import vDubKam from "@/assets/panels/swatches/veneer-dub-kamennyj.jpg";
import vOrehFlejm from "@/assets/panels/swatches/veneer-oreh-flejm.jpg";
import vDubSend from "@/assets/panels/swatches/veneer-dub-send.jpg";
import vDubKlej from "@/assets/panels/swatches/veneer-dub-klej.jpg";
import vDubKejv from "@/assets/panels/swatches/veneer-dub-kejv.jpg";
import vDubRidzh from "@/assets/panels/swatches/veneer-dub-ridzh.jpg";
import vDubRut from "@/assets/panels/swatches/veneer-dub-rut.jpg";

// Enamel swatches
import eBelosn from "@/assets/panels/swatches/enamel-belosnezhnyj.jpg";
import eBlanzh from "@/assets/panels/swatches/enamel-blanzh.jpg";
import eKremovo from "@/assets/panels/swatches/enamel-kremovo-belyj.jpg";
import ePraline from "@/assets/panels/swatches/enamel-praline.jpg";
import eGrejdzh from "@/assets/panels/swatches/enamel-grejdzh.jpg";
import eMoleskin from "@/assets/panels/swatches/enamel-moleskin.jpg";
import eUmbra from "@/assets/panels/swatches/enamel-umbra.jpg";
import eChernyj from "@/assets/panels/swatches/enamel-chernyj-agat.jpg";
import eBazalt from "@/assets/panels/swatches/enamel-bazalt.jpg";
import ePylno from "@/assets/panels/swatches/enamel-pylno-seryj.jpg";
import eTele from "@/assets/panels/swatches/enamel-telegrej.jpg";
import eSkand from "@/assets/panels/swatches/enamel-skand-seryj.jpg";
import eSignal from "@/assets/panels/swatches/enamel-signalno-belyj.jpg";
import eKashemir from "@/assets/panels/swatches/enamel-kashemir.jpg";
import eSeryjShelk from "@/assets/panels/swatches/enamel-seryj-shelk.jpg";

// Nanotex swatches
import nBelyj from "@/assets/panels/swatches/nanotex-belyj.jpg";
import nAjvori from "@/assets/panels/swatches/nanotex-ajvori-soft.jpg";
import nKrem from "@/assets/panels/swatches/nanotex-krem-soft.jpg";
import nSkaj from "@/assets/panels/swatches/nanotex-skaj-soft.jpg";
import nMuskat from "@/assets/panels/swatches/nanotex-muskat-soft.jpg";
import nGrej from "@/assets/panels/swatches/nanotex-grej-soft.jpg";
import nTaup from "@/assets/panels/swatches/nanotex-taup-soft.jpg";
import nMerengo from "@/assets/panels/swatches/nanotex-merengo-soft.jpg";
import nChernyj from "@/assets/panels/swatches/nanotex-chernyj-soft.jpg";
import nDubMram from "@/assets/panels/swatches/nanotex-dub-mramornyj.jpg";
import nDubNatur from "@/assets/panels/swatches/nanotex-dub-natur.jpg";
import nDubSkal from "@/assets/panels/swatches/nanotex-dub-skalnyj.jpg";
import nOrehNat from "@/assets/panels/swatches/nanotex-oreh-natur.jpg";

// Mirror swatches
import mOpti from "@/assets/panels/swatches/mirror-optivajt.jpg";
import mBest from "@/assets/panels/swatches/mirror-bestsvetnoe.jpg";
import mGrafit from "@/assets/panels/swatches/mirror-grafit.jpg";
import mBronza from "@/assets/panels/swatches/mirror-bronza.jpg";
import mBronzaMat from "@/assets/panels/swatches/mirror-bronza-matovoe.jpg";

// Interior carousel
import interior1 from "@/assets/panels/interior-1.webp";
import interior2 from "@/assets/panels/interior-2.webp";
import interior3 from "@/assets/panels/interior-3.webp";
import interior4 from "@/assets/panels/interior-4.webp";
import interior5 from "@/assets/panels/interior-5.webp";
import interior6 from "@/assets/panels/interior-6.webp";
import interior7 from "@/assets/panels/interior-7.webp";
import interior8 from "@/assets/panels/interior-8.webp";
import interior9 from "@/assets/panels/interior-9.webp";
import interior10 from "@/assets/panels/interior-10.webp";

const interiorPhotos = [
  { src: interior1, alt: "Спальня с панелями из шпона ореха и бетонными вставками" },
  { src: interior2, alt: "Спальня с реечной стеновой панелью и шпонированной зоной изголовья" },
  { src: interior3, alt: "Скрытая дверь и стеновые панели из тёмного ореха" },
  { src: interior4, alt: "Реечная панель из дуба и рифлёное стекло" },
  { src: interior5, alt: "Композиция стеновых панелей: дерево, рифлёное стекло, зеркало" },
  { src: interior6, alt: "Прихожая со светлыми панелями из дуба" },
  { src: interior7, alt: "Коридор с порталом из шпона ореха" },
  { src: interior8, alt: "Скрытая дверь и панели из ореха в классическом интерьере" },
  { src: interior9, alt: "Арт-панель с декоративным напылением" },
  { src: interior10, alt: "Стенд: реечные панели и рифлёное стекло" },
];

type Swatch = { name: string; src: string };
type SubPalette = { title?: string; swatches: Swatch[] };
type Coating = {
  id: string;
  label: string;
  description: string;
  palettes: SubPalette[];
  placeholder?: string;
};

const coatings: Coating[] = [
  {
    id: "veneer",
    label: "Шпон",
    description:
      "Тонкий срез дерева; материал с уникальным природным рисунком, добавляющий в интерьер благородство и естественность. Две палитры оттенков — авторская и традиционная — отличаются глубиной проработки цвета.",
    palettes: [
      {
        title: "Традиционная палитра",
        swatches: [
          { name: "Американский орех", src: vAmerOreh },
          { name: "Дуб грано", src: vDubGrano },
          { name: "Дуб натуральный", src: vDubNat },
          { name: "Дуб каменный", src: vDubKam },
        ],
      },
      {
        title: "Авторская палитра",
        swatches: [
          { name: "Орех Флейм", src: vOrehFlejm },
          { name: "Дуб Сэнд", src: vDubSend },
          { name: "Дуб Клэй", src: vDubKlej },
          { name: "Дуб Кейв", src: vDubKejv },
          { name: "Дуб Ридж", src: vDubRidzh },
          { name: "Дуб Рут", src: vDubRut },
        ],
      },
    ],
  },
  {
    id: "enamel",
    label: "Эмаль",
    description:
      "Мы по праву гордимся качеством нашей эмали: благодаря сочетанию ручной и машинной работы покрытие получается идеально ровным даже на сложной фрезеровке. Шелковистые на ощупь, изделия в эмали делают роскошнее любой интерьер.",
    palettes: [
      {
        swatches: [
          { name: "Белоснежный", src: eBelosn },
          { name: "Бланж (RAL 9010)", src: eBlanzh },
          { name: "Кремово-белый", src: eKremovo },
          { name: "Пралине (NCS S 1505-Y40R)", src: ePraline },
          { name: "Грейдж (NCS S 3005-Y50R)", src: eGrejdzh },
          { name: "Молескин", src: eMoleskin },
          { name: "Умбра (NCS S 6005-Y50R)", src: eUmbra },
          { name: "Чёрный агат", src: eChernyj },
          { name: "Базальт (NCS S 8000-N)", src: eBazalt },
          { name: "Пыльно-серый (RAL 7037)", src: ePylno },
          { name: "Телегрей (RAL 7047)", src: eTele },
          { name: "Скандинавский серый", src: eSkand },
          { name: "Сигнально-белый (RAL 9003)", src: eSignal },
          { name: "Кашемир (NCS S 2002-Y50R)", src: eKashemir },
          { name: "Серый шёлк (RAL 7044)", src: eSeryjShelk },
        ],
      },
    ],
  },
  {
    id: "nanotex",
    label: "Нанотекс",
    description:
      "Высокотехнологичное покрытие, которое выглядит как натуральное и не уступает ему в прочности. Может имитировать эмаль или дерево, реалистично передавая текстуру природных материалов.",
    palettes: [
      {
        title: "Монохромная палитра",
        swatches: [
          { name: "Белый", src: nBelyj },
          { name: "Айвори софт", src: nAjvori },
          { name: "Крем софт", src: nKrem },
          { name: "Скай софт", src: nSkaj },
          { name: "Мускат софт", src: nMuskat },
          { name: "Грей софт", src: nGrej },
          { name: "Тауп софт", src: nTaup },
          { name: "Меренго софт", src: nMerengo },
          { name: "Чёрный софт", src: nChernyj },
        ],
      },
      {
        title: "Древесная палитра",
        swatches: [
          { name: "Дуб мраморный", src: nDubMram },
          { name: "Дуб натур", src: nDubNatur },
          { name: "Дуб скальный", src: nDubSkal },
          { name: "Орех натур", src: nOrehNat },
        ],
      },
    ],
  },
  {
    id: "glass",
    label: "Стекло",
    description:
      "Стеклянные вставки и панели наполняют интерьер светом и глубиной. Палитра охватывает мягкие монохромы, прозрачные и рифлёные фактуры — для лаконичных и выразительных решений.",
    palettes: [],
    placeholder:
      "Палитра стёкол готовится. Подберём подходящие варианты под ваш проект — оставьте заявку, и мы пришлём актуальные образцы фактур и тонировок.",
  },
  {
    id: "mirror",
    label: "Зеркало",
    description:
      "Панели с зеркальным эффектом решают сразу несколько задач: визуально увеличивают пространство, добавляют в интерьер больше света и служат, собственно, зеркалом, которое совсем не занимает места.",
    palettes: [
      {
        swatches: [
          { name: "Зеркало оптивайт", src: mOpti },
          { name: "Зеркало бесцветное", src: mBest },
          { name: "Зеркало графит", src: mGrafit },
          { name: "Зеркало бронза", src: mBronza },
          { name: "Зеркало бронза матовое", src: mBronzaMat },
        ],
      },
    ],
  },
];

const SwatchTile = ({ name, src }: Swatch) => (
  <figure className="group">
    <div className="aspect-square rounded-lg overflow-hidden bg-stone/30 border border-border">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
    <figcaption className="mt-2.5 text-xs md:text-sm text-foreground/80 leading-snug">
      {name}
    </figcaption>
  </figure>
);

const WallPanelsSection = () => {
  const [active, setActive] = useState<string>("veneer");

  return (
    <section
      id="wall-panels"
      className="relative py-20 md:py-28 px-4 md:px-8 bg-warm-white"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Заголовок */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12 md:mb-16">
          <div>
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Стеновые панели
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mt-3 max-w-2xl leading-[1.05]">
              Любые цвета и покрытия
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            Подбираем покрытие под архитектуру помещения — от тёплого шпона
            до глянцевых эмалей и зеркальных вставок.
          </p>
        </div>

        {/* Табы покрытий */}
        <Tabs value={active} onValueChange={setActive} className="w-full">
          <TabsList className="flex flex-wrap h-auto bg-transparent p-0 gap-2 md:gap-3 mb-10 md:mb-14 justify-start">
            {coatings.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="rounded-full border border-border bg-background px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base data-[state=active]:bg-bronze data-[state=active]:text-bronze-foreground data-[state=active]:border-bronze transition-colors"
              >
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {coatings.map((c) => (
            <TabsContent
              key={c.id}
              value={c.id}
              className="mt-0 focus-visible:outline-none"
            >
              <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
                {/* Левая колонка с описанием */}
                <div className="space-y-4 lg:sticky lg:top-24">
                  <h3 className="font-heading text-2xl md:text-4xl tracking-tight">
                    {c.label}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {c.description}
                  </p>
                </div>

                {/* Правая колонка со свотчами */}
                <div className="space-y-10 md:space-y-12">
                  {c.palettes.length === 0 && c.placeholder && (
                    <div className="rounded-2xl border border-dashed border-border bg-background/60 p-8 md:p-10">
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                        {c.placeholder}
                      </p>
                      <a
                        href="#help-form"
                        className="inline-flex mt-6 text-sm tracking-wider uppercase text-graphite border-b border-graphite/40 hover:border-graphite pb-0.5 transition-colors"
                      >
                        Запросить образцы
                      </a>
                    </div>
                  )}

                  {c.palettes.map((p, idx) => (
                    <div key={idx}>
                      {p.title && (
                        <h4 className="font-heading text-lg md:text-2xl tracking-tight mb-5 md:mb-6">
                          {p.title}
                        </h4>
                      )}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
                        {p.swatches.map((s) => (
                          <SwatchTile key={s.name} {...s} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Карусель интерьеров */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8 md:mb-10">
            <div>
              <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">
                Портфолио
              </span>
              <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl tracking-tight mt-3 leading-[1.05]">
                Стеновые панели в интерьерах
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              Реальные проекты с панелями Sofia — фрагменты интерьеров наших
              клиентов и партнёров-дизайнеров.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {interiorPhotos.map((photo, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-[42%]"
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone/30 border border-border group">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WallPanelsSection;
