import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image as ImageIcon } from "lucide-react";

import paletteVeneer from "@/assets/panels/palette-veneer.png";
import paletteEnamel from "@/assets/panels/palette-enamel.png";
import paletteNanotex from "@/assets/panels/palette-nanotex.png";
import paletteGlass from "@/assets/panels/palette-glass.png";
import paletteMirror from "@/assets/panels/palette-mirror.png";

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
  source: string; // полная картинка-разворот палитры с подписями
  palettes: SubPalette[]; // для будущей замены на отдельные свотчи
};

const coatings: Coating[] = [
  {
    id: "veneer",
    label: "Шпон",
    description:
      "Тонкий срез дерева; материал с уникальным природным рисунком, добавляющий в интерьер благородство и естественность. Две палитры оттенков — авторская и традиционная — отличаются глубиной проработки цвета.",
    source: paletteVeneer,
    palettes: [
      {
        title: "Традиционная палитра",
        swatches: [
          { name: "Американский орех", src: paletteVeneer },
          { name: "Дуб грано", src: paletteVeneer },
          { name: "Дуб натуральный", src: paletteVeneer },
          { name: "Дуб каменный", src: paletteVeneer },
        ],
      },
      {
        title: "Авторская палитра",
        swatches: [
          { name: "Орех Флейм", src: paletteVeneer },
          { name: "Дуб Сэнд", src: paletteVeneer },
          { name: "Дуб Клэй", src: paletteVeneer },
          { name: "Дуб Кейв", src: paletteVeneer },
          { name: "Дуб Ридж", src: paletteVeneer },
          { name: "Дуб Рут", src: paletteVeneer },
        ],
      },
    ],
  },
  {
    id: "enamel",
    label: "Эмаль",
    description:
      "Мы по праву гордимся качеством нашей эмали: благодаря сочетанию ручной и машинной работы покрытие получается идеально ровным даже на сложной фрезеровке. Шелковистые на ощупь, изделия в эмали делают роскошнее любой интерьер.",
    source: paletteEnamel,
    palettes: [
      {
        swatches: [
          { name: "Белоснежный", src: paletteEnamel },
          { name: "Бланж (RAL 9010)", src: paletteEnamel },
          { name: "Кремово-белый", src: paletteEnamel },
          { name: "Пралине (NCS S 1505-Y40R)", src: paletteEnamel },
          { name: "Грейдж (NCS S 3005-Y50R)", src: paletteEnamel },
          { name: "Молескин", src: paletteEnamel },
          { name: "Умбра (NCS S 6005-Y50R)", src: paletteEnamel },
          { name: "Чёрный агат", src: paletteEnamel },
          { name: "Базальт (NCS S 8000-N)", src: paletteEnamel },
          { name: "Пыльно-серый (RAL 7037)", src: paletteEnamel },
          { name: "Телегрей (RAL 7047)", src: paletteEnamel },
          { name: "Скандинавский серый", src: paletteEnamel },
          { name: "Сигнально-белый (RAL 9003)", src: paletteEnamel },
          { name: "Кашемир (NCS S 2002-Y50R)", src: paletteEnamel },
          { name: "Серый шёлк (RAL 7044)", src: paletteEnamel },
        ],
      },
    ],
  },
  {
    id: "nanotex",
    label: "Нанотекс",
    description:
      "Высокотехнологичное покрытие, которое выглядит как натуральное и не уступает ему в прочности. Может имитировать эмаль или дерево, реалистично передавая текстуру природных материалов.",
    source: paletteNanotex,
    palettes: [
      {
        title: "Монохромная палитра",
        swatches: [
          { name: "Белый", src: paletteNanotex },
          { name: "Айвори софт", src: paletteNanotex },
          { name: "Крем софт", src: paletteNanotex },
          { name: "Скай софт", src: paletteNanotex },
          { name: "Мускат софт", src: paletteNanotex },
          { name: "Грей софт", src: paletteNanotex },
          { name: "Тауп софт", src: paletteNanotex },
          { name: "Меренго софт", src: paletteNanotex },
          { name: "Чёрный софт", src: paletteNanotex },
        ],
      },
      {
        title: "Древесная палитра",
        swatches: [
          { name: "Дуб мраморный", src: paletteNanotex },
          { name: "Дуб натур", src: paletteNanotex },
          { name: "Дуб скальный", src: paletteNanotex },
          { name: "Орех натур", src: paletteNanotex },
        ],
      },
    ],
  },
  {
    id: "glass",
    label: "Стекло",
    description:
      "Стеклянные вставки и панели наполняют интерьер светом и глубиной. Палитра охватывает мягкие монохромы, насыщенные тона и природные текстуры — для лаконичных и выразительных решений.",
    source: paletteGlass,
    palettes: [],
  },
  {
    id: "mirror",
    label: "Зеркало",
    description:
      "Панели с зеркальным эффектом решают сразу несколько задач: визуально увеличивают пространство, добавляют в интерьер больше света и служат, собственно, зеркалом, которое совсем не занимает места.",
    source: paletteMirror,
    palettes: [
      {
        swatches: [
          { name: "Зеркало оптивайт", src: paletteMirror },
          { name: "Зеркало бесцветное", src: paletteMirror },
          { name: "Зеркало графит", src: paletteMirror },
          { name: "Зеркало бронза", src: paletteMirror },
          { name: "Зеркало бронза матовое", src: paletteMirror },
        ],
      },
    ],
  },
];


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
                className="rounded-full border border-border bg-background px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base data-[state=active]:bg-graphite data-[state=active]:text-primary-foreground data-[state=active]:border-graphite transition-colors"
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
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
                <div className="space-y-4 md:sticky md:top-24">
                  <h3 className="font-heading text-2xl md:text-4xl tracking-tight">
                    {c.label}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden bg-background border border-border">
                  <img
                    src={c.source}
                    alt={`Палитра — ${c.label}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Карусель интерьеров (плейсхолдер до загрузки фото) */}
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
              {interiorPlaceholders.map((i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-[42%]"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone/40 border border-border flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <ImageIcon className="w-8 h-8 opacity-50" />
                      <span className="text-xs tracking-[0.2em] uppercase">
                        Фото проекта №{i}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>

          <p className="mt-6 text-xs md:text-sm text-muted-foreground/80 text-center">
            Пришлите фото — заменю плейсхолдеры на реальные проекты.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WallPanelsSection;
