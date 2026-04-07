import { useState } from "react";

const coatingTypes = ["Окрашенный шпон", "Акриловая эмаль"] as const;
const paletteSystems = ["RAL", "NCS"] as const;

const ralColors = [
  { code: "RAL 9003", name: "Сигнальный белый", hex: "#F4F4F4" },
  { code: "RAL 9010", name: "Чистый белый", hex: "#FFFFFF" },
  { code: "RAL 9016", name: "Транспортный белый", hex: "#F6F6F6" },
  { code: "RAL 1013", name: "Жемчужно-белый", hex: "#E3D9C6" },
  { code: "RAL 1015", name: "Слоновая кость", hex: "#E6D2B5" },
  { code: "RAL 7035", name: "Светло-серый", hex: "#D7D7D7" },
  { code: "RAL 7044", name: "Шёлково-серый", hex: "#CAC4B8" },
  { code: "RAL 7047", name: "Телегрей 4", hex: "#D0D0D0" },
  { code: "RAL 9001", name: "Кремово-белый", hex: "#FDF4E3" },
  { code: "RAL 9002", name: "Серо-белый", hex: "#E7EBDA" },
  { code: "RAL 7036", name: "Платиново-серый", hex: "#999999" },
  { code: "RAL 7037", name: "Пыльно-серый", hex: "#7F7F7F" },
  { code: "RAL 7039", name: "Кварцевый серый", hex: "#6C6960" },
  { code: "RAL 7006", name: "Бежево-серый", hex: "#756F61" },
  { code: "RAL 7013", name: "Коричнево-серый", hex: "#575044" },
  { code: "RAL 7016", name: "Антрацитово-серый", hex: "#293133" },
  { code: "RAL 7021", name: "Чёрно-серый", hex: "#23282B" },
  { code: "RAL 7024", name: "Графитовый серый", hex: "#474A51" },
  { code: "RAL 8019", name: "Серо-коричневый", hex: "#403A3A" },
  { code: "RAL 9005", name: "Глубокий чёрный", hex: "#0A0A0A" },
  { code: "RAL 3005", name: "Винно-красный", hex: "#5E2129" },
  { code: "RAL 5003", name: "Сапфирово-синий", hex: "#1D334A" },
  { code: "RAL 5011", name: "Стально-синий", hex: "#231A24" },
  { code: "RAL 6003", name: "Оливково-зелёный", hex: "#424632" },
];

const ncsColors = [
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
  { code: "NCS S 2020-R80B", name: "Пыльно-голубой", hex: "#8FA8C0" },
  { code: "NCS S 2020-G10Y", name: "Шалфей", hex: "#8FB89C" },
  { code: "NCS S 2020-Y10R", name: "Песочный", hex: "#C8B888" },
  { code: "NCS S 3020-R", name: "Тёпло-розовый", hex: "#B08080" },
  { code: "NCS S 3020-B", name: "Серо-синий", hex: "#7098B0" },
  { code: "NCS S 4020-G30Y", name: "Оливковый", hex: "#708060" },
  { code: "NCS S 5020-R90B", name: "Глубокий синий", hex: "#506078" },
];

const ColorPaletteSection = () => {
  const [coating, setCoating] = useState<typeof coatingTypes[number]>("Акриловая эмаль");
  const [palette, setPalette] = useState<typeof paletteSystems[number]>("RAL");
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const colors = palette === "RAL" ? ralColors : ncsColors;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Цветовые решения
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
          Любой цвет по RAL и NCS
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Двери Sofia доступны в любом цвете палитр RAL Classic и NCS. 
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
