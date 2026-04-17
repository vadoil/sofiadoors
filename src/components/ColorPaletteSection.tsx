import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Droplets } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const coatingTypes = ["Окрашенный шпон", "Акриловая эмаль"] as const;
const paletteSystems = ["RAL", "NCS"] as const;

const ralColors = [
  // Whites & Creams
  { code: "RAL 9003", name: "Сигнальный белый", hex: "#F4F4F4" },
  { code: "RAL 9010", name: "Чистый белый", hex: "#FFFFFF" },
  { code: "RAL 9016", name: "Транспортный белый", hex: "#F6F6F6" },
  { code: "RAL 9001", name: "Кремово-белый", hex: "#FDF4E3" },
  { code: "RAL 9002", name: "Серо-белый", hex: "#E7EBDA" },
  { code: "RAL 1013", name: "Жемчужно-белый", hex: "#E3D9C6" },
  { code: "RAL 1015", name: "Слоновая кость", hex: "#E6D2B5" },
  { code: "RAL 1014", name: "Слоновая кость тёмная", hex: "#DDCEA8" },
  { code: "RAL 1001", name: "Бежевый", hex: "#D1B97B" },
  { code: "RAL 1002", name: "Песочно-жёлтый", hex: "#D2AA6D" },
  // Yellows
  { code: "RAL 1003", name: "Сигнальный жёлтый", hex: "#F9A800" },
  { code: "RAL 1004", name: "Золотисто-жёлтый", hex: "#E49E00" },
  { code: "RAL 1005", name: "Медово-жёлтый", hex: "#C89B00" },
  { code: "RAL 1006", name: "Кукурузно-жёлтый", hex: "#E09000" },
  { code: "RAL 1007", name: "Нарциссово-жёлтый", hex: "#E88C00" },
  { code: "RAL 1011", name: "Коричнево-бежевый", hex: "#AF8050" },
  { code: "RAL 1012", name: "Лимонно-жёлтый", hex: "#D5AE28" },
  { code: "RAL 1016", name: "Серно-жёлтый", hex: "#F1DD38" },
  { code: "RAL 1017", name: "Шафраново-жёлтый", hex: "#F6A950" },
  { code: "RAL 1018", name: "Цинково-жёлтый", hex: "#FACA30" },
  { code: "RAL 1019", name: "Серо-бежевый", hex: "#A48F7A" },
  { code: "RAL 1020", name: "Оливково-жёлтый", hex: "#A08F65" },
  { code: "RAL 1021", name: "Рапсово-жёлтый", hex: "#F6B600" },
  { code: "RAL 1023", name: "Транспортный жёлтый", hex: "#F7B500" },
  { code: "RAL 1024", name: "Охра жёлтая", hex: "#BA8F4C" },
  { code: "RAL 1027", name: "Карри жёлтый", hex: "#A38C15" },
  { code: "RAL 1028", name: "Дынно-жёлтый", hex: "#FFAB00" },
  { code: "RAL 1032", name: "Жёлтый ракитник", hex: "#DDB20F" },
  { code: "RAL 1033", name: "Георгиново-жёлтый", hex: "#FAAB21" },
  { code: "RAL 1034", name: "Пастельно-жёлтый", hex: "#EEA044" },
  // Oranges
  { code: "RAL 2000", name: "Жёлто-оранжевый", hex: "#DD7907" },
  { code: "RAL 2001", name: "Красно-оранжевый", hex: "#BE4E20" },
  { code: "RAL 2002", name: "Алый", hex: "#C63927" },
  { code: "RAL 2003", name: "Пастельно-оранжевый", hex: "#FA842B" },
  { code: "RAL 2004", name: "Чистый оранжевый", hex: "#E75B12" },
  { code: "RAL 2008", name: "Ярко-красно-оранжевый", hex: "#ED6B21" },
  { code: "RAL 2009", name: "Транспортный оранжевый", hex: "#E15501" },
  { code: "RAL 2010", name: "Сигнальный оранжевый", hex: "#D4652F" },
  { code: "RAL 2011", name: "Насыщенный оранжевый", hex: "#EC7C25" },
  { code: "RAL 2012", name: "Лососёво-оранжевый", hex: "#DB6A50" },
  // Reds
  { code: "RAL 3000", name: "Огненно-красный", hex: "#AB2524" },
  { code: "RAL 3001", name: "Сигнальный красный", hex: "#A02128" },
  { code: "RAL 3002", name: "Карминно-красный", hex: "#A1232B" },
  { code: "RAL 3003", name: "Рубиново-красный", hex: "#8D1D2C" },
  { code: "RAL 3004", name: "Пурпурно-красный", hex: "#701F29" },
  { code: "RAL 3005", name: "Винно-красный", hex: "#5E2129" },
  { code: "RAL 3007", name: "Чёрно-красный", hex: "#412227" },
  { code: "RAL 3009", name: "Оксид красный", hex: "#6D342D" },
  { code: "RAL 3011", name: "Коричнево-красный", hex: "#792423" },
  { code: "RAL 3012", name: "Бежево-красный", hex: "#CB8D73" },
  { code: "RAL 3013", name: "Томатно-красный", hex: "#9C322E" },
  { code: "RAL 3014", name: "Старо-розовый", hex: "#CB7375" },
  { code: "RAL 3015", name: "Светло-розовый", hex: "#E1A6AD" },
  { code: "RAL 3016", name: "Кораллово-красный", hex: "#AC4034" },
  { code: "RAL 3017", name: "Розовый", hex: "#D3545F" },
  { code: "RAL 3018", name: "Клубнично-красный", hex: "#D14152" },
  { code: "RAL 3020", name: "Транспортный красный", hex: "#C1121C" },
  { code: "RAL 3022", name: "Лососёво-красный", hex: "#D56D56" },
  { code: "RAL 3027", name: "Малиново-красный", hex: "#AB273C" },
  { code: "RAL 3031", name: "Восточный красный", hex: "#B32428" },
  // Pinks & Violets
  { code: "RAL 4001", name: "Красно-сиреневый", hex: "#8A5A83" },
  { code: "RAL 4002", name: "Красно-фиолетовый", hex: "#933D50" },
  { code: "RAL 4003", name: "Вересково-фиолетовый", hex: "#CB3D73" },
  { code: "RAL 4004", name: "Бордово-фиолетовый", hex: "#6B2D5B" },
  { code: "RAL 4005", name: "Сине-сиреневый", hex: "#7F6093" },
  { code: "RAL 4006", name: "Транспортный пурпурный", hex: "#992572" },
  { code: "RAL 4007", name: "Пурпурно-фиолетовый", hex: "#4A203B" },
  { code: "RAL 4008", name: "Сигнальный фиолетовый", hex: "#904684" },
  { code: "RAL 4009", name: "Пастельно-фиолетовый", hex: "#A38995" },
  { code: "RAL 4010", name: "Телемагента", hex: "#C63678" },
  // Blues
  { code: "RAL 5000", name: "Фиолетово-синий", hex: "#384C70" },
  { code: "RAL 5001", name: "Зелёно-синий", hex: "#1F4764" },
  { code: "RAL 5002", name: "Ультрамариново-синий", hex: "#2B2C7C" },
  { code: "RAL 5003", name: "Сапфирово-синий", hex: "#1D334A" },
  { code: "RAL 5004", name: "Чёрно-синий", hex: "#1B2B3A" },
  { code: "RAL 5005", name: "Сигнальный синий", hex: "#154889" },
  { code: "RAL 5007", name: "Бриллиантово-синий", hex: "#41678D" },
  { code: "RAL 5008", name: "Серо-синий", hex: "#313C48" },
  { code: "RAL 5009", name: "Лазурно-синий", hex: "#2E5978" },
  { code: "RAL 5010", name: "Горечавково-синий", hex: "#13447C" },
  { code: "RAL 5011", name: "Стально-синий", hex: "#231A24" },
  { code: "RAL 5012", name: "Голубой", hex: "#3481B8" },
  { code: "RAL 5013", name: "Кобальтово-синий", hex: "#193153" },
  { code: "RAL 5014", name: "Голубино-синий", hex: "#637D96" },
  { code: "RAL 5015", name: "Небесно-синий", hex: "#2271B3" },
  { code: "RAL 5017", name: "Транспортный синий", hex: "#0E518D" },
  { code: "RAL 5018", name: "Бирюзово-синий", hex: "#21888F" },
  { code: "RAL 5019", name: "Капри синий", hex: "#1A5784" },
  { code: "RAL 5020", name: "Океанская синь", hex: "#0D4F67" },
  { code: "RAL 5021", name: "Водная синь", hex: "#07737A" },
  { code: "RAL 5022", name: "Ночной синий", hex: "#222D5A" },
  { code: "RAL 5023", name: "Дальний синий", hex: "#4D6F96" },
  { code: "RAL 5024", name: "Пастельно-синий", hex: "#6093AC" },
  // Greens
  { code: "RAL 6000", name: "Патиново-зелёный", hex: "#3C7460" },
  { code: "RAL 6001", name: "Изумрудно-зелёный", hex: "#366735" },
  { code: "RAL 6002", name: "Лиственно-зелёный", hex: "#325928" },
  { code: "RAL 6003", name: "Оливково-зелёный", hex: "#424632" },
  { code: "RAL 6004", name: "Сине-зелёный", hex: "#1F4233" },
  { code: "RAL 6005", name: "Зелёный мох", hex: "#114232" },
  { code: "RAL 6006", name: "Серо-оливковый", hex: "#3C392E" },
  { code: "RAL 6007", name: "Бутылочно-зелёный", hex: "#2C3222" },
  { code: "RAL 6008", name: "Коричнево-зелёный", hex: "#37342A" },
  { code: "RAL 6009", name: "Пихтовый зелёный", hex: "#27352A" },
  { code: "RAL 6010", name: "Травяной зелёный", hex: "#4C7932" },
  { code: "RAL 6011", name: "Резедово-зелёный", hex: "#6C8B46" },
  { code: "RAL 6012", name: "Чёрно-зелёный", hex: "#2D4034" },
  { code: "RAL 6013", name: "Тростниково-зелёный", hex: "#7D765A" },
  { code: "RAL 6014", name: "Жёлто-оливковый", hex: "#474135" },
  { code: "RAL 6015", name: "Чёрно-оливковый", hex: "#3D3D36" },
  { code: "RAL 6016", name: "Бирюзово-зелёный", hex: "#026A52" },
  { code: "RAL 6017", name: "Майский зелёный", hex: "#578632" },
  { code: "RAL 6018", name: "Жёлто-зелёный", hex: "#60993E" },
  { code: "RAL 6019", name: "Пастельно-зелёный", hex: "#BDECB6" },
  { code: "RAL 6020", name: "Хромовый зелёный", hex: "#37422F" },
  { code: "RAL 6021", name: "Бледно-зелёный", hex: "#89AC76" },
  { code: "RAL 6022", name: "Коричнево-оливковый", hex: "#3A3327" },
  { code: "RAL 6024", name: "Транспортный зелёный", hex: "#008754" },
  { code: "RAL 6025", name: "Папоротниково-зелёный", hex: "#5E6E3B" },
  { code: "RAL 6026", name: "Опаловый зелёный", hex: "#005F4E" },
  { code: "RAL 6027", name: "Светло-зелёный", hex: "#7EBAB5" },
  { code: "RAL 6028", name: "Сосново-зелёный", hex: "#2D5546" },
  { code: "RAL 6029", name: "Мятно-зелёный", hex: "#007243" },
  { code: "RAL 6032", name: "Сигнальный зелёный", hex: "#237F52" },
  { code: "RAL 6033", name: "Мятно-бирюзовый", hex: "#49826B" },
  { code: "RAL 6034", name: "Пастельно-бирюзовый", hex: "#7AACAC" },
  // Greys
  { code: "RAL 7000", name: "Серая белка", hex: "#78858B" },
  { code: "RAL 7001", name: "Серебристо-серый", hex: "#8A9597" },
  { code: "RAL 7002", name: "Оливково-серый", hex: "#817F68" },
  { code: "RAL 7003", name: "Мшисто-серый", hex: "#7A7B6D" },
  { code: "RAL 7004", name: "Сигнальный серый", hex: "#9EA0A1" },
  { code: "RAL 7005", name: "Мышино-серый", hex: "#6E7074" },
  { code: "RAL 7006", name: "Бежево-серый", hex: "#756F61" },
  { code: "RAL 7008", name: "Хаки серый", hex: "#746643" },
  { code: "RAL 7009", name: "Зелёно-серый", hex: "#5B6259" },
  { code: "RAL 7010", name: "Брезентово-серый", hex: "#585C56" },
  { code: "RAL 7011", name: "Железно-серый", hex: "#555D61" },
  { code: "RAL 7012", name: "Базальтово-серый", hex: "#575D5E" },
  { code: "RAL 7013", name: "Коричнево-серый", hex: "#575044" },
  { code: "RAL 7015", name: "Сланцево-серый", hex: "#51565C" },
  { code: "RAL 7016", name: "Антрацитово-серый", hex: "#293133" },
  { code: "RAL 7021", name: "Чёрно-серый", hex: "#23282B" },
  { code: "RAL 7022", name: "Серая умбра", hex: "#4B4D46" },
  { code: "RAL 7023", name: "Бетонно-серый", hex: "#818479" },
  { code: "RAL 7024", name: "Графитовый серый", hex: "#474A51" },
  { code: "RAL 7026", name: "Гранитовый серый", hex: "#374447" },
  { code: "RAL 7030", name: "Каменно-серый", hex: "#939388" },
  { code: "RAL 7031", name: "Сине-серый", hex: "#5D6970" },
  { code: "RAL 7032", name: "Галечный серый", hex: "#B9B4A2" },
  { code: "RAL 7033", name: "Цементно-серый", hex: "#818979" },
  { code: "RAL 7034", name: "Жёлто-серый", hex: "#939176" },
  { code: "RAL 7035", name: "Светло-серый", hex: "#D7D7D7" },
  { code: "RAL 7036", name: "Платиново-серый", hex: "#999999" },
  { code: "RAL 7037", name: "Пыльно-серый", hex: "#7F7F7F" },
  { code: "RAL 7038", name: "Агатовый серый", hex: "#B4B8B0" },
  { code: "RAL 7039", name: "Кварцевый серый", hex: "#6C6960" },
  { code: "RAL 7040", name: "Серое окно", hex: "#9DA3A6" },
  { code: "RAL 7042", name: "Транспортный серый A", hex: "#8F9695" },
  { code: "RAL 7043", name: "Транспортный серый B", hex: "#4E5451" },
  { code: "RAL 7044", name: "Шёлково-серый", hex: "#CAC4B8" },
  { code: "RAL 7045", name: "Телегрей 1", hex: "#91969A" },
  { code: "RAL 7046", name: "Телегрей 2", hex: "#82898E" },
  { code: "RAL 7047", name: "Телегрей 4", hex: "#D0D0D0" },
  // Browns
  { code: "RAL 8001", name: "Охра коричневая", hex: "#955F20" },
  { code: "RAL 8002", name: "Сигнальный коричневый", hex: "#6C3B2A" },
  { code: "RAL 8003", name: "Глиняный коричневый", hex: "#734222" },
  { code: "RAL 8004", name: "Медно-коричневый", hex: "#8E402A" },
  { code: "RAL 8007", name: "Олений коричневый", hex: "#5F3929" },
  { code: "RAL 8008", name: "Оливково-коричневый", hex: "#6F4A2F" },
  { code: "RAL 8011", name: "Орехово-коричневый", hex: "#5A3826" },
  { code: "RAL 8012", name: "Красно-коричневый", hex: "#673831" },
  { code: "RAL 8014", name: "Сепия коричневый", hex: "#49392D" },
  { code: "RAL 8015", name: "Каштаново-коричневый", hex: "#633A34" },
  { code: "RAL 8016", name: "Махагон коричневый", hex: "#4C2F27" },
  { code: "RAL 8017", name: "Шоколадно-коричневый", hex: "#44322D" },
  { code: "RAL 8019", name: "Серо-коричневый", hex: "#403A3A" },
  { code: "RAL 8022", name: "Чёрно-коричневый", hex: "#212121" },
  { code: "RAL 8023", name: "Оранжево-коричневый", hex: "#A65E2E" },
  { code: "RAL 8024", name: "Бежево-коричневый", hex: "#79553D" },
  { code: "RAL 8025", name: "Бледно-коричневый", hex: "#755C48" },
  { code: "RAL 8028", name: "Терракотовый", hex: "#4E3B31" },
  // Blacks
  { code: "RAL 9004", name: "Сигнальный чёрный", hex: "#1C1C1C" },
  { code: "RAL 9005", name: "Глубокий чёрный", hex: "#0A0A0A" },
  { code: "RAL 9011", name: "Графитно-чёрный", hex: "#1C2024" },
  { code: "RAL 9017", name: "Транспортный чёрный", hex: "#1E1E1E" },
];

const ncsColors = [
  // Neutrals
  { code: "NCS S 0500-N", name: "Белый", hex: "#F5F5F5" },
  { code: "NCS S 0502-Y", name: "Тёплый белый", hex: "#F2F0E8" },
  { code: "NCS S 1002-Y", name: "Слоновая кость", hex: "#E8E4D8" },
  { code: "NCS S 1005-Y20R", name: "Кремовый", hex: "#E6DFD0" },
  { code: "NCS S 1500-N", name: "Светло-серый", hex: "#DCDCDC" },
  { code: "NCS S 2000-N", name: "Серый", hex: "#C8C8C8" },
  { code: "NCS S 2005-Y20R", name: "Бежевый", hex: "#C8BFA8" },
  { code: "NCS S 2502-Y", name: "Тёплый серый", hex: "#B8B4A8" },
  { code: "NCS S 3000-N", name: "Средний серый", hex: "#A8A8A8" },
  { code: "NCS S 3502-Y", name: "Каменный", hex: "#9C9688" },
  { code: "NCS S 4000-N", name: "Тёмно-серый", hex: "#8C8C8C" },
  { code: "NCS S 4502-Y", name: "Графит", hex: "#7C7668" },
  { code: "NCS S 5000-N", name: "Антрацит", hex: "#6C6C6C" },
  { code: "NCS S 6000-N", name: "Тёмный антрацит", hex: "#555555" },
  { code: "NCS S 7000-N", name: "Уголь", hex: "#404040" },
  { code: "NCS S 8000-N", name: "Почти чёрный", hex: "#2A2A2A" },
  { code: "NCS S 9000-N", name: "Чёрный", hex: "#1A1A1A" },
  // Blues
  { code: "NCS S 1020-R80B", name: "Светло-голубой", hex: "#A8C0D8" },
  { code: "NCS S 2020-R80B", name: "Пыльно-голубой", hex: "#8FA8C0" },
  { code: "NCS S 3020-B", name: "Серо-синий", hex: "#7098B0" },
  { code: "NCS S 4020-B", name: "Стальной синий", hex: "#5A8098" },
  { code: "NCS S 5020-R90B", name: "Глубокий синий", hex: "#506078" },
  { code: "NCS S 5030-B10G", name: "Петроль", hex: "#2E6070" },
  { code: "NCS S 6020-B", name: "Тёмный стальной", hex: "#405868" },
  { code: "NCS S 7020-B", name: "Тёмный синий", hex: "#304858" },
  // Greens
  { code: "NCS S 1020-G10Y", name: "Светлый шалфей", hex: "#A8D0AC" },
  { code: "NCS S 2020-G10Y", name: "Шалфей", hex: "#8FB89C" },
  { code: "NCS S 3020-G10Y", name: "Зелёный мох", hex: "#6C9878" },
  { code: "NCS S 4020-G30Y", name: "Оливковый", hex: "#708060" },
  { code: "NCS S 5020-G10Y", name: "Тёмный шалфей", hex: "#507860" },
  { code: "NCS S 6020-G10Y", name: "Хвойный", hex: "#3C6650" },
  { code: "NCS S 7020-G10Y", name: "Тёмно-хвойный", hex: "#2E5040" },
  { code: "NCS S 3020-G50Y", name: "Мшистый", hex: "#889868" },
  // Warm tones
  { code: "NCS S 1020-Y10R", name: "Светлый песок", hex: "#DCC898" },
  { code: "NCS S 2020-Y10R", name: "Песочный", hex: "#C8B888" },
  { code: "NCS S 3020-Y10R", name: "Тёмный песок", hex: "#A89868" },
  { code: "NCS S 2020-Y30R", name: "Абрикосовый", hex: "#C8A878" },
  { code: "NCS S 3020-Y30R", name: "Терракотовый", hex: "#B08868" },
  { code: "NCS S 2020-Y50R", name: "Лососёвый", hex: "#C89888" },
  { code: "NCS S 3020-R", name: "Тёпло-розовый", hex: "#B08080" },
  { code: "NCS S 4020-R", name: "Тёмно-розовый", hex: "#906060" },
  { code: "NCS S 3020-R10B", name: "Пыльная роза", hex: "#A87888" },
  { code: "NCS S 4020-Y30R", name: "Коричневый", hex: "#907058" },
  { code: "NCS S 5020-Y30R", name: "Тёмный коричневый", hex: "#785848" },
  { code: "NCS S 6020-Y30R", name: "Шоколадный", hex: "#604840" },
];

const ColorPaletteSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [coating, setCoating] = useState<typeof coatingTypes[number]>("Акриловая эмаль");
  const [palette, setPalette] = useState<typeof paletteSystems[number]>("RAL");
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const allColors = palette === "RAL" ? ralColors : ncsColors;
  const colors = useMemo(() => {
    if (!search.trim()) return allColors;
    const q = search.toLowerCase();
    return allColors.filter(
      (c) => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
    );
  }, [allColors, search]);

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Droplets className={`w-5 h-5 text-primary opacity-0 ${isVisible ? "animate-fade-up" : ""}`} strokeWidth={1.5} />
          <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            Цветовые решения
          </p>
        </div>
        <h2 className={`text-3xl md:text-5xl tracking-tight mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.1s" }}>
          Любой цвет по RAL и NCS
        </h2>
        <p className={`text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.15s" }}>
          Двери Фрамир доступны в любом цвете палитр RAL Classic и NCS. 
          Покраска акриловой эмалью или окрашенный шпон — подберём точное совпадение под ваш проект.
        </p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          {/* Coating type */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Тип покрытия</span>
            {coatingTypes.map((type) => (
              <button
                key={type}
                onClick={() => setCoating(type)}
                className={`flex items-center gap-2 text-sm transition-colors ${
                  coating === type ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    coating === type ? "border-primary" : "border-border"
                  }`}
                >
                  {coating === type && (
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </span>
                {type}
              </button>
            ))}
          </div>

          {/* Palette system tabs */}
          <div className="flex rounded-lg border border-border overflow-hidden">
            {paletteSystems.map((sys) => (
              <button
                key={sys}
                onClick={() => setPalette(sys)}
                className={`px-8 py-2.5 text-sm font-medium transition-colors ${
                  palette === sys
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {sys}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по цвету или номеру"
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Hovered color info */}
        <div className="h-8 mb-6">
          {hoveredColor && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span
                className="w-6 h-6 rounded-full border border-border"
                style={{
                  backgroundColor: colors.find((c) => c.code === hoveredColor)?.hex,
                }}
              />
              <span className="font-medium text-foreground">{hoveredColor}</span>
              <span>— {colors.find((c) => c.code === hoveredColor)?.name}</span>
            </div>
          )}
        </div>

        {/* Color swatches grid */}
        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 md:gap-3 p-6 rounded-2xl border border-border bg-card">
          {colors.map((color) => (
            <button
              key={color.code}
              onMouseEnter={() => setHoveredColor(color.code)}
              onMouseLeave={() => setHoveredColor(null)}
              className="aspect-square rounded-full border border-border/50 hover:scale-110 hover:shadow-lg transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: color.hex }}
              title={`${color.code} — ${color.name}`}
            />
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          * Отображение цветов на экране может отличаться от реального оттенка. 
          Для точного подбора рекомендуем заказать образец в шоуруме.
        </p>
      </div>
    </section>
  );
};

export default ColorPaletteSection;
