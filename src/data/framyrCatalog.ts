// Каталог Фрамир Самара — спарсен с framyr.ru/catalog/
// Картинки берём с CDN Фрамир напрямую.

export type FramyrCategory =
  | "Межкомнатные двери"
  | "Системы открывания";

export interface FramyrItem {
  name: string;
  category: FramyrCategory;
  priceFrom: string; // "от 88 100 ₽"
  image: string;
  url: string;
}

export const framyrItems: FramyrItem[] = [
  // ── Межкомнатные двери (22 коллекции) ──────────────────
  {
    name: "Мастер",
    category: "Межкомнатные двери",
    priceFrom: "от 88 100 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/536/586yihqci2cm39ab1qkk8w0h5ozd7d8f.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/master/",
  },
  {
    name: "Двери в грунте под покраску",
    category: "Межкомнатные двери",
    priceFrom: "от 35 640 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/06c/kynxengpo7gkqdknzt1hhv44d4d5036a.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/secret/",
  },
  {
    name: "Бэйс",
    category: "Межкомнатные двери",
    priceFrom: "от 24 365 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/7ea/0pv3dg5we2c0v2g98sztb540hlwg3f84.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/base/",
  },
  {
    name: "А-лайн",
    category: "Межкомнатные двери",
    priceFrom: "от 76 805 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/5f5/y06rpfnwaftdr4pa1n0y2rzqna9cjywe.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/a-line/",
  },
  {
    name: "Дуо",
    category: "Межкомнатные двери",
    priceFrom: "от 64 575 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/6b3/11xib425v8mvu29irpdev3cx99r7nw0a.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/duo/",
  },
  {
    name: "Прайм",
    category: "Межкомнатные двери",
    priceFrom: "от 71 547 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/41c/y81fvacdfm53pvzcvyixcfbw6knfmibj.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/prime/",
  },
  {
    name: "Ритм",
    category: "Межкомнатные двери",
    priceFrom: "от 44 905 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/8d6/lh7t79vrwvk0i8m00qlbd20h29jyngg4.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/ritm/",
  },
  {
    name: "Эрте",
    category: "Межкомнатные двери",
    priceFrom: "от 48 545 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/6ce/2zrf60endnaltrjgv6ignce8ymrd97la.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/erte/",
  },
  {
    name: "Каталина",
    category: "Межкомнатные двери",
    priceFrom: "от 66 750 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/fdb/ub25pnmcjahv13abzh8vswhfvrkpivmq.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/katalina/",
  },
  {
    name: "Элеганс",
    category: "Межкомнатные двери",
    priceFrom: "от 27 020 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/408/5jw9xjw5t4oj6yovpuhvegowvzc4m6f9.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/elegance/",
  },
  {
    name: "Флоренция",
    category: "Межкомнатные двери",
    priceFrom: "от 65 535 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/8ed/gd1ccaj0bfs8ljx0mj3y97fs6rzfcg0j.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/florencia/",
  },
  {
    name: "Савона",
    category: "Межкомнатные двери",
    priceFrom: "от 53 400 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/ac0/vuas40i3z7ie2m8vdl6w7yyb2ald0u2v.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/savona/",
  },
  {
    name: "Твин",
    category: "Межкомнатные двери",
    priceFrom: "от 47 330 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/3ec/u7ce0ej6g7dp1tg3ckrb9sn5pcid3s7e.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/twin/",
  },
  {
    name: "Соло",
    category: "Межкомнатные двери",
    priceFrom: "от 52 285 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/6a7/864yqnun1nydbqg9s7b4c1ghcv60gpca.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/solo/",
  },
  {
    name: "Дуэт",
    category: "Межкомнатные двери",
    priceFrom: "от 43 690 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/ace/bkz10n1tpv5wnbbrias308mv33km9zcs.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/duet/",
  },
  {
    name: "Канва",
    category: "Межкомнатные двери",
    priceFrom: "от 25 825 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/190/3s3ecv8g3qs2rsc79oh01fwirr8lajp0.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/canva/",
  },
  {
    name: "Эмма",
    category: "Межкомнатные двери",
    priceFrom: "от 47 330 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/fd7/bvbcietxphj1brj3cfevoi1m3p3y7rzh.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/emma/",
  },
  {
    name: "Арта",
    category: "Межкомнатные двери",
    priceFrom: "от 29 630 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/872/t68xuw11kpnpvxhiuwzun2v65aznem04.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/arta/",
  },
  {
    name: "Омега",
    category: "Межкомнатные двери",
    priceFrom: "от 50 975 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/cde/p0y1j3nlbzqqg3vndpkk8wjmbivl0t8k.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/omega/",
  },
  {
    name: "Титаниум",
    category: "Межкомнатные двери",
    priceFrom: "от 28 605 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/80c/la3rq1qp5h7fzj2hp5850t46jaf5gj9f.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/titanium/",
  },
  {
    name: "Нео",
    category: "Межкомнатные двери",
    priceFrom: "от 28 000 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/4c5/wu9rc1g3er7uq439o0h36o2z4tyb34wj.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/neo/",
  },
  {
    name: "Римини",
    category: "Межкомнатные двери",
    priceFrom: "от 49 760 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/9d6/i8rons43d40yx7di2pdmw6ox3ext7mup.webp",
    url: "https://framyr.ru/catalog/mezhkomnatnye-dveri/rimini/",
  },

  // ── Системы открывания (8) ─────────────────────────────
  {
    name: "Hidden 80",
    category: "Системы открывания",
    priceFrom: "от 37 905 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/0cc/kfoyrijphuv5b0swahq2c0tgg5caongm.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/hidden/",
  },
  {
    name: "Eclisse Unico",
    category: "Системы открывания",
    priceFrom: "от 36 345 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/cef/4i15k530rxgsyy82dwfr0186vtr13oy0.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/eclisse-unico/",
  },
  {
    name: "Slider",
    category: "Системы открывания",
    priceFrom: "от 15 120 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/b24/jsk2hncvghkesdh40qqz255qqh3agukf.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/slider/",
  },
  {
    name: "Twice 90/180",
    category: "Системы открывания",
    priceFrom: "от 55 145 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/926/p4u4bv9mjrvonhnea760vb3dtsf3cw8b.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/twice-90-180/",
  },
  {
    name: "Roto Slim",
    category: "Системы открывания",
    priceFrom: "от 54 530 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/0a4/9lx8fqy6qbttbqwtcwx8ci6p5sxg3jf3.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/roto-slim/",
  },
  {
    name: "Invisible",
    category: "Системы открывания",
    priceFrom: "от 46 460 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/82b/igw5ydcp5g8rcsc2jfeqlpz9nxvaik6d.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/invisible/",
  },
  {
    name: "Rolapp Unico Comfort",
    category: "Системы открывания",
    priceFrom: "от 48 215 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/3fc/wcy9ocgxs7gdecev2a5io36448ezb9c8.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/rolapp-unico-comfort/",
  },
  {
    name: "Rolapp Stealth Comfort",
    category: "Системы открывания",
    priceFrom: "от 69 560 ₽",
    image: "https://framyr.ru/upload/dev2fun.imagecompress/webp/iblock/4a2/cskaiwx057vtkd14g7p3u7229l0to5wh.webp",
    url: "https://framyr.ru/catalog/sistemy-ekonomyashchie-prostranstvo/rolapp-stealth-comfort/",
  },
];
