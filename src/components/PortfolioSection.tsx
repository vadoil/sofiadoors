import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "https://sofiadoors.com/upload/iblock/68a/ug2o4s24umi27zcifsxpvrtqgjj4c8xx.jpg",
    title: "ЖК «Светлана парк»",
    designer: "Ё [YOUR] DESIGN",
    link: "https://sofiadoors.com/projects/svetlana-park/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/9d3/vejv6fyprf9oi24nd00f1ibhr42q7vii.jpg",
    title: "Квартира для двоих",
    designer: "Валерия Кошеутова",
    link: "https://sofiadoors.com/projects/kvartira-dlya-dvoikh/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/e33/5rcwfm2ordug8eltqmlkrcyyrnk64q41.jpeg",
    title: "Светлая душевая",
    designer: "Студия DSGN HUB",
    link: "https://sofiadoors.com/projects/svetlaya-dushevaya/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/7ac/6i66wnx1tmv0x8d4jtj0mqe2bh2sgp9p.jpg",
    title: "Загородный дом",
    designer: "Студия DSGN HUB",
    link: "https://sofiadoors.com/projects/zagorodnyy-dom-dlya-sergeya-i-marii-sirotkinykh/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/eb6/2hx98ej4wo84b5qr6dst2ldersc3lodd.jpg",
    title: "ЖК Riversky 83",
    designer: "Студия DSGN HUB",
    link: "https://sofiadoors.com/projects/zhk-riversky-83/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/10a/yh0gdsiu21qicgar5sm5wjvultddxv8g.jpg",
    title: "Дом с цветным интерьером",
    designer: "Анна Малютина",
    link: "https://sofiadoors.com/projects/dom-s-tsvetnym-intererom/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/f61/0edxsk1f6ugp34znrq0b26xkodsfex4j.jpg",
    title: "Мастер-спальня с радиусной стеной",
    designer: "Студия DSGN HUB",
    link: "https://sofiadoors.com/projects/master-spalnya-s-radiusnoy-stenoy/",
  },
  {
    image: "https://sofiadoors.com/upload/iblock/0ae/p7z62qh4dwz5n16twptqdb0iq9r80f7k.jpg",
    title: "Спальня с акцентной дверью",
    designer: "Студия DSGN HUB",
    link: "https://sofiadoors.com/projects/spalnya-s-aktsentnoy-dveryu/",
  },
  {
    image: "https://sofiadoors.com/upload/optimization/images/71ceaee3c9e1927c7da12f8828909547.webp",
    title: "Зимняя гармония",
    designer: "Ирина Киряшова",
    link: "https://sofiadoors.com/projects/zimnyaya-garmoniya/",
  },
  {
    image: "https://sofiadoors.com/upload/optimization/images/30c5cb2643d8ee6df9a1d990252ab6fa.webp",
    title: "Дом с панорамным остеклением",
    designer: "Chado",
    link: "https://sofiadoors.com/projects/dom-s-panoramnym-ostekleniem/",
  },
  {
    image: "https://sofiadoors.com/upload/optimization/images/521719d88d5fbd30087882295a37e360.webp",
    title: "Монохром",
    designer: "Евгения Мельникова",
    link: "https://sofiadoors.com/projects/monokhrom/",
  },
  {
    image: "https://sofiadoors.com/upload/optimization/images/4dca62e910c1e5035490e20ad3b1c6e2.webp",
    title: "Офис DSGN HUB",
    designer: "Студия DSGN HUB",
    link: "https://sofiadoors.com/projects/ofis-dsgn-hub/",
  },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p
          className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
        >
          Портфолио
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2
              className={`text-3xl md:text-5xl tracking-tight font-heading opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Sofia в интерьерах
            </h2>
            <p
              className={`text-muted-foreground max-w-xl mt-4 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.15s" }}
            >
              Дизайнеры и архитекторы выбирают наш продукт для проектов своих
              клиентов и всегда остаются довольны безупречным дизайном и качеством.
            </p>
          </div>
          <a
            href="https://sofiadoors.com/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-secondary active:scale-95 shrink-0 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            Все 157 проектов
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.05}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary-foreground text-sm font-medium leading-tight">
                  {project.title}
                </p>
                <p className="text-primary-foreground/60 text-xs mt-1">
                  {project.designer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
