export type Project = {
  slug: string;
  title: string;
  designer: string;
  image: string;
  style: string; // "Современные" | "Классические" | "Неоклассические" | "Дизайнерские" | "Скрытые"
  room: string; // "Квартира" | "Дом" | "Гостиная" | "Спальня" | "Ванная" | "Офис"
  collection: string;
};

export const projects: Project[] = [
  {
    slug: "svetlana-park",
    title: "ЖК «Светлана парк»",
    designer: "Ё [YOUR] DESIGN",
    image: "https://framyr.ru/upload/iblock/68a/ug2o4s24umi27zcifsxpvrtqgjj4c8xx.jpg",
    style: "Современные",
    room: "Квартира",
    collection: "Прайм",
  },
  {
    slug: "kvartira-dlya-dvoikh",
    title: "Квартира для двоих",
    designer: "Валерия Кошеутова",
    image: "https://framyr.ru/upload/iblock/9d3/vejv6fyprf9oi24nd00f1ibhr42q7vii.jpg",
    style: "Современные",
    room: "Квартира",
    collection: "Эмма",
  },
  {
    slug: "svetlaya-dushevaya",
    title: "Светлая душевая",
    designer: "Студия DSGN HUB",
    image: "https://framyr.ru/upload/iblock/e33/5rcwfm2ordug8eltqmlkrcyyrnk64q41.jpeg",
    style: "Современные",
    room: "Ванная",
    collection: "Бэйс",
  },
  {
    slug: "zagorodnyy-dom",
    title: "Загородный дом",
    designer: "Студия DSGN HUB",
    image: "https://framyr.ru/upload/iblock/7ac/6i66wnx1tmv0x8d4jtj0mqe2bh2sgp9p.jpg",
    style: "Неоклассические",
    room: "Дом",
    collection: "Флоренция",
  },
  {
    slug: "zhk-riversky-83",
    title: "ЖК Riversky 83",
    designer: "Студия DSGN HUB",
    image: "https://framyr.ru/upload/iblock/eb6/2hx98ej4wo84b5qr6dst2ldersc3lodd.jpg",
    style: "Современные",
    room: "Квартира",
    collection: "Соло",
  },
  {
    slug: "dom-s-tsvetnym-intererom",
    title: "Дом с цветным интерьером",
    designer: "Анна Малютина",
    image: "https://framyr.ru/upload/iblock/10a/yh0gdsiu21qicgar5sm5wjvultddxv8g.jpg",
    style: "Дизайнерские",
    room: "Дом",
    collection: "Эрте",
  },
  {
    slug: "master-spalnya",
    title: "Мастер-спальня с радиусной стеной",
    designer: "Студия DSGN HUB",
    image: "https://framyr.ru/upload/iblock/f61/0edxsk1f6ugp34znrq0b26xkodsfex4j.jpg",
    style: "Современные",
    room: "Спальня",
    collection: "Канва",
  },
  {
    slug: "spalnya-aktsentnaya-dver",
    title: "Спальня с акцентной дверью",
    designer: "Студия DSGN HUB",
    image: "https://framyr.ru/upload/iblock/0ae/p7z62qh4dwz5n16twptqdb0iq9r80f7k.jpg",
    style: "Дизайнерские",
    room: "Спальня",
    collection: "Каталина",
  },
  {
    slug: "zimnyaya-garmoniya",
    title: "Зимняя гармония",
    designer: "Ирина Киряшова",
    image: "https://framyr.ru/upload/optimization/images/71ceaee3c9e1927c7da12f8828909547.webp",
    style: "Современные",
    room: "Квартира",
    collection: "Мастер",
  },
  {
    slug: "dom-panoramnoe-osteklenie",
    title: "Дом с панорамным остеклением",
    designer: "Chado",
    image: "https://framyr.ru/upload/optimization/images/30c5cb2643d8ee6df9a1d990252ab6fa.webp",
    style: "Современные",
    room: "Дом",
    collection: "Скрытые",
  },
  {
    slug: "monokhrom",
    title: "Монохром",
    designer: "Евгения Мельникова",
    image: "https://framyr.ru/upload/optimization/images/521719d88d5fbd30087882295a37e360.webp",
    style: "Современные",
    room: "Квартира",
    collection: "Титаниум",
  },
  {
    slug: "ofis-dsgn-hub",
    title: "Офис DSGN HUB",
    designer: "Студия DSGN HUB",
    image: "https://framyr.ru/upload/optimization/images/4dca62e910c1e5035490e20ad3b1c6e2.webp",
    style: "Современные",
    room: "Офис",
    collection: "Прайм",
  },
];

export const styleFilters = [
  "Современные",
  "Классические",
  "Неоклассические",
  "Дизайнерские",
  "Скрытые",
];

export const roomFilters = [
  "Квартира",
  "Дом",
  "Гостиная",
  "Спальня",
  "Ванная",
  "Офис",
];
