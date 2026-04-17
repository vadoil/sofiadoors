import { ArrowRight } from "lucide-react";
import alineDoors from "@/assets/aline/aline-doors.png";
import alinePartitions from "@/assets/aline/aline-partitions.png";
import alineSliding from "@/assets/aline/aline-sliding.png";

type Block = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

const blocks: Block[] = [
  {
    eyebrow: "01 — Распашные",
    title: "Двери А-лайн",
    text:
      "Алюминиевые полотна, которые используются как обычные распашные двери или устанавливаются в раздвижную систему. Сочетаются с современными и классическими коллекциями фабрики. Можно выбрать из 8 моделей, установить разные варианты стёкол или зеркал, покрасить профиль в любой цвет.",
    image: alineDoors,
    alt: "Алюминиевая дверь А-лайн в гостиной",
  },
  {
    eyebrow: "02 — Перегородки",
    title: "Перегородки А-лайн",
    text:
      "Алюминиевая раздвижная система, на которую можно установить практически любое полотно из коллекций фабрики. Есть множество вариантов обрамления, можно покрасить декоративную планку в любой цвет, установить стёкла или зеркала. Возможные варианты: двухкаскадная, двухкаскадная спарка и трёхкаскадная.",
    image: alinePartitions,
    alt: "Алюминиевая перегородка А-лайн с разделением кабинета",
  },
  {
    eyebrow: "03 — Раздвижные",
    title: "Раздвижные А-лайн",
    text:
      "Новая раздвижная система с креплением к стене или потолку, в которой алюминиевое полотно устанавливается вдоль стены. Заменила собой классическую раздвижную дверь и взяла на себя её функции. Больше вариантов обрамления: декоративная алюминиевая планка, алюминиевая планка со вставкой МДФ во всех покрытиях (шпон, эмаль, нанотекс).",
    image: alineSliding,
    alt: "Раздвижная система А-лайн вдоль стены",
  },
];

const AlineSolutionsSection = () => {
  return (
    <section
      id="aline"
      className="relative py-20 md:py-28 px-4 md:px-8 bg-background"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Заголовок */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14 md:mb-20">
          <div>
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Алюминиевые решения
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mt-3 max-w-2xl leading-[1.05]">
              Система А-лайн
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            Алюминиевые полотна используются как обычные распашные двери,
            устанавливаются в раздвижные системы или работают в качестве
            перегородки.
          </p>
        </div>

        {/* Шахматка */}
        <div className="space-y-16 md:space-y-24 lg:space-y-28">
          {blocks.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={b.title}
                className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
              >
                {/* Текст */}
                <div
                  className={`space-y-5 ${
                    reverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-bronze">
                    {b.eyebrow}
                  </span>
                  <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                    {b.text}
                  </p>
                  <div className="pt-2">
                    <a
                      href="#help-form"
                      className="inline-flex items-center gap-2 text-sm md:text-base text-graphite border-b border-graphite/30 hover:border-graphite pb-1 transition-colors"
                    >
                      Запросить расчёт
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Фото */}
                <div
                  className={`relative ${
                    reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone/30 border border-border group">
                    <img
                      src={b.image}
                      alt={b.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlineSolutionsSection;
