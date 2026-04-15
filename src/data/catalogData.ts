import doorFokus from "@/assets/door-fokus-hero.png";
import doorSkyline from "@/assets/door-skyline-hero.png";
import doorOriginal from "@/assets/door-original-hero.png";
import doorElegant from "@/assets/door-elegant-hero-new.png";
import doorHidden from "@/assets/door-hidden-hero.png";
import doorMetamorfoza from "@/assets/door-metamorfoza-hero.png";
import doorAcoustica from "@/assets/door-acoustica-hero.png";
import doorListva from "@/assets/door-listva-hero.png";
import doorIstok from "@/assets/door-istok-hero.png";
import doorRein from "@/assets/door-rein-hero.png";
import doorShoji from "@/assets/door-shoji-hero.png";
import doorFireproof from "@/assets/door-fireproof-hero.png";
import doorGrafika from "@/assets/door-grafika-hero.png";
import doorSolyaris from "@/assets/door-solyaris-hero.png";
import doorManiliona from "@/assets/door-maniliona-hero.png";
import door1000lines from "@/assets/door-1000lines-hero.png";
import doorSliding from "@/assets/door-sliding.jpg";
import doorPartition from "@/assets/door-partition.jpg";
import doorGlass from "@/assets/door-glass.jpg";

// ─── Types ───────────────────────────────────────────────
export type CategoryId =
  | "swing"
  | "glass"
  | "hidden"
  | "sliding"
  | "partitions"
  | "fire"
  | "decor"
  | "accessories";

export interface Collection {
  name: string;
  designer?: string;
  description: string;
  models: string[];
  image: string;
}

export interface SystemItem {
  name: string;
  description: string;
  items: string[];
  image: string;
}

export interface DecorItem {
  name: string;
  description: string;
}

export interface AccessoryGroup {
  category: string;
  items: string[];
}

// ─── Categories ──────────────────────────────────────────
export const categories: { id: CategoryId; label: string }[] = [
  { id: "swing", label: "Распашные двери" },
  { id: "glass", label: "Стеклянные двери" },
  { id: "hidden", label: "Скрытые двери" },
  { id: "sliding", label: "Сдвижные системы" },
  { id: "partitions", label: "Перегородки" },
  { id: "fire", label: "Пожароустойчивые" },
  { id: "decor", label: "Декор и отделка" },
  { id: "accessories", label: "Фурнитура" },
];

// ─── Распашные двери ─────────────────────────────────────
export const swingCollections: Collection[] = [
  {
    name: "Фокус",
    designer: "Софья Лаб",
    description:
      "Базовая глухая дверь в стандартной комплектации. Ничего лишнего — только выверенные решения, доведённые до идеала.",
    models: ["ДВ 32 (на себя)", "ДВ 33 (от себя)"],
    image: doorFokus,
  },
  {
    name: "Оригинал",
    designer: "Франко Поли",
    description:
      "Строгие и современные линии. Соотношение между деревянными деталями и стеклянными вставками.",
    models: ["ДВ 01", "ДВ 02", "ДВ 03", "ДВ 04", "ДВ 07", "ДВ 18"],
    image: doorOriginal,
  },
  {
    name: "Элегант",
    designer: "Софья Лаб",
    description:
      "Для тех, кто предпочитает вечные ценности: чёткие прямые линии, классические формы, спокойные цвета.",
    models: ["38", "39", "158", "168", "259", "269"],
    image: doorElegant,
  },
  {
    name: "Акустика",
    designer: "Софья Лаб",
    description:
      "Полотно 60 мм с повышенными характеристиками тепло- и шумоизоляции.",
    models: ["116", "117 (от себя)", "118 (лёгкое)", "119 (лёгкое, от себя)"],
    image: doorAcoustic,
  },
  {
    name: "Скайлайн",
    designer: "Софья Лаб",
    description:
      "Двери высотой до потолка — до 3500 мм. Без горизонтального наличника, зрительно расширяют пространство.",
    models: ["ДВ 94 (на себя)", "ДВ 96 (от себя)"],
    image: doorSkyline,
  },
  {
    name: "Метаморфоза",
    designer: "Софья Лаб",
    description:
      "Кардинальное переосмысление привычных форм. Ни классика, ни модерн — нечто абсолютно новое.",
    models: ["170", "171", "172", "173"],
    image: doorFokus,
  },
  {
    name: "Листва",
    designer: "Франко Поли",
    description:
      "Вдохновлена русской природой. Гравировка имитирует природные мотивы. Модели коллекции сочетаются между собой.",
    models: ["176", "177", "178", "179"],
    image: doorElegant,
  },
  {
    name: "Исток",
    designer: "Sofia",
    description:
      "Авторские модели с уникальным характером. Широкая линейка вариантов для разных интерьерных решений.",
    models: ["180", "181", "182", "183", "184", "185", "186", "187"],
    image: doorSkyline,
  },
];

// ─── Стеклянные двери ────────────────────────────────────
export const glassCollections: Collection[] = [
  {
    name: "Рейн",
    designer: "Франко Поли",
    description:
      "Стекло с двух сторон полотна. Гравировка имитирует стекающие капли дождя. Доступна опция без гравировки.",
    models: ["ДВ 22 (с гравировкой)", "ДВ 22 (без гравировки)"],
    image: doorGlass,
  },
  {
    name: "Оригинал — Стеклянная перегородка",
    designer: "Франко Поли",
    description:
      "Стеклянные модели перегородок на базе коллекции Оригинал. Триплекс 8 мм, широкий выбор стёкол.",
    models: ["МП Стеклянная", "МП Интарсия"],
    image: doorGlass,
  },
];

// ─── Скрытые двери ───────────────────────────────────────
export const hiddenCollections: Collection[] = [
  {
    name: "Скрытый короб 35",
    description:
      "Дверь с невидимым коробом толщиной 35 мм. Открывание на себя и от себя. Вариант с наличником и без.",
    models: ["НА СЕБЯ", "НА СЕБЯ с наличником", "ОТ СЕБЯ"],
    image: doorHidden,
  },
  {
    name: "Скрытый короб 60",
    description:
      "Усиленный скрытый короб 60 мм для дверей с повышенной шумоизоляцией. Совместим с коллекцией Акустика.",
    models: ["НА СЕБЯ", "ОТ СЕБЯ"],
    image: doorHidden,
  },
  {
    name: "Скрытый Пенал",
    description:
      "Дверь задвигается внутрь стены. Полностью скрытая конструкция для максимальной экономии пространства.",
    models: ["1 створка"],
    image: doorSliding,
  },
];

// ─── Сдвижные системы ────────────────────────────────────
export const slidingSystems: SystemItem[] = [
  {
    name: "Мэджик",
    description:
      "Сдвижная система для 1 и 2 створок, включая неравнопольные. Плавное открывание вдоль стены.",
    items: ["1 створка", "2 створки", "Неравнопольные"],
    image: doorSliding,
  },
  {
    name: "Компак 90",
    description:
      "Дверь складывается под углом 90° к стене. Компактное решение для узких проёмов.",
    items: ["1 створка", "Без обрамления проёма", "С обрамлением проёма"],
    image: doorSliding,
  },
  {
    name: "Компак 180",
    description:
      "Дверь складывается на 180° и прижимается к стене. Для 1 и 2 створок.",
    items: ["1 створка", "2 створки", "Равнопольные"],
    image: doorSliding,
  },
  {
    name: "Скрытый Пенал",
    description:
      "Дверь убирается внутрь стены. Идеально для минималистичных интерьеров.",
    items: ["1 створка"],
    image: doorHidden,
  },
];

// ─── Перегородки ─────────────────────────────────────────
export const partitions: SystemItem[] = [
  {
    name: "Перегородки Оригинал",
    description:
      "Деревянные и стеклянные перегородки на базе коллекции Оригинал. Крепление к стене, внутри проёма, купе.",
    items: ["К стене — 1 створка", "Внутри проёма — 2, 3, 4 створки", "Купе"],
    image: doorOriginal,
  },
  {
    name: "Сёдзи",
    description:
      "Алюминиевые реечные перегородки в японском стиле. Модели SZ_0 – SZ_5.",
    items: ["ДВ SZ_0", "ДВ SZ_1", "ДВ SZ_2", "ДВ SZ_3", "ДВ SZ_4", "ДВ SZ_5"],
    image: doorPartition,
  },
  {
    name: "Сёдзи Лайт",
    description:
      "Облегчённая версия реечных перегородок. Модели SZL10 – SZL12.",
    items: ["МП SZL10", "МП SZL11", "МП SZL12"],
    image: doorPartition,
  },
  {
    name: "Деревянные реечные",
    description: "Реечные перегородки из массива. Натуральные текстуры и тёплая эстетика.",
    items: ["Деревянные реечные перегородки"],
    image: doorPartition,
  },
  {
    name: "Алюминиевые со стеклом",
    description: "Алюминиевый профиль со стеклянным заполнением. Лёгкость и прозрачность.",
    items: ["Алюминиевые реечные перегородки со стеклом"],
    image: doorGlass,
  },
];

// ─── Пожароустойчивые ────────────────────────────────────
export const fireCollections: SystemItem[] = [
  {
    name: "Пожароустойчивые двери EI 30",
    description:
      "Сертифицированные противопожарные двери с огнестойкостью 30 минут. Для жилых и коммерческих объектов.",
    items: ["EI 30"],
    image: doorFire,
  },
  {
    name: "Пожароустойчивые двери EI 60",
    description:
      "Усиленная огнестойкость 60 минут. Для объектов с повышенными требованиями безопасности.",
    items: ["EI 60"],
    image: doorFire,
  },
];

// ─── Декор и отделка ─────────────────────────────────────
export const decorData: DecorItem[] = [
  { name: "Стеновые панели 5G", description: "Современные панели для быстрой отделки стен" },
  { name: "Декоративные рейки", description: "Реечный декор для стен и потолка" },
  { name: "Зеркальные панели", description: "Отделка зеркальными панелями" },
  { name: "ПСП", description: "Панели с покрытием для стен и потолка" },
  { name: "Плинтус ЕВРО", description: "Классический европейский плинтус" },
  { name: "Теневой плинтус", description: "Скрытый теневой плинтус для минимализма" },
  { name: "Графика", description: "Декоративные графические паттерны на полотне. Модели GR10–GR17." },
  { name: "Аркада", description: "Арочные решения — модель 110" },
  { name: "Солярис", description: "Панели с покрытием — модели 174 КВ0–КВ9, 175 КВ0–КВ9" },
  { name: "Манильона", description: "Двери с интегрированной ручкой — модели МП GR0–GR9" },
  { name: "Сопрано", description: "Декоративные линии на полотне" },
  { name: "1000 линий", description: "Текстурный рисунок на поверхности двери" },
];

// ─── Фурнитура ───────────────────────────────────────────
export const accessoriesData: AccessoryGroup[] = [
  {
    category: "Ручки",
    items: [
      "Благо", "Дар", "Луч", "Бест 2.0", "Вест", "Вейв",
      "Ирис", "Винг 2.0", "Гранде", "Купе", "Купе 2.0",
    ],
  },
  {
    category: "Петли",
    items: ["Феникс", "Колибри", "Кондор"],
  },
  {
    category: "Замки",
    items: [
      "AGB Evolution (полиамидный язычок)",
      "AGB Polaris (магнитный)",
      "Border",
      "Замок для Манильона / Гранде",
    ],
  },
  {
    category: "Погонаж — Короба",
    items: [
      "Короб ЭКТ (круглый)",
      "Короб НП ЭКТ",
      "Моноблок НА СЕБЯ",
      "Моноблок ОТ СЕБЯ",
      "Короб МДФ",
      "Короб МДФ 60",
    ],
  },
  {
    category: "Погонаж — Наличники",
    items: [
      "Наличник ЭКТ",
      "Наличник доборный",
      "Наличник широкий 132 мм",
      "Наличник МДФ",
      "Наличник круглый",
      "Наличник фигурный",
      "Карниз фигурный",
    ],
  },
];
