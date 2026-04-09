import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export const newsItems = [
  {
    id: 1,
    date: "08.04.2026",
    title: "Новая коллекция «Солярис» уже в салоне",
    excerpt: "Мягкие формы и сотни сочетаний — коллекция для тех, кто ищет гармонию.",
    image: "https://sofiadoors.com/upload/iblock/3b9/Solyaris_1000x1000.jpg",
  },
  {
    id: 2,
    date: "01.04.2026",
    title: "Обновлённый шоурум на Чкалова, 100",
    excerpt: "Мы полностью обновили экспозицию — приходите посмотреть и потрогать двери.",
    image: "https://sofiadoors.com/upload/iblock/7ed/Elegant_1000x1000.jpg",
  },
  {
    id: 3,
    date: "25.03.2026",
    title: "Скрытые двери — тренд 2026 года",
    excerpt: "Почему дизайнеры выбирают скрытый монтаж и как это меняет интерьер.",
    image: "https://sofiadoors.com/upload/iblock/50a/Hidden_1000x1000.jpg",
  },
  {
    id: 4,
    date: "18.03.2026",
    title: "Двери с шумоизоляцией: как выбрать?",
    excerpt: "Разбираемся, чем отличается дверь за 30 000 от двери за 80 000 в плане тишины.",
    image: "https://sofiadoors.com/upload/iblock/6d9/Acoustica_1000x1000.jpg",
  },
  {
    id: 5,
    date: "10.03.2026",
    title: "Противопожарные двери: мифы и реальность",
    excerpt: "Они могут быть красивыми. Показываем, как совместить безопасность и дизайн.",
    image: "https://sofiadoors.com/upload/iblock/cb1/Fire_1000x1000.jpg",
  },
  {
    id: 6,
    date: "02.03.2026",
    title: "Как правильно замерить дверной проём",
    excerpt: "Пошаговая инструкция от наших мастеров — избегаем ошибок при заказе.",
    image: "https://sofiadoors.com/upload/iblock/80b/Original_1000x1000.jpg",
  },
];

const NewsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const preview = newsItems.slice(0, 3);

  return (
    <section id="news" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
              Новости
            </p>
            <h2 className={`text-3xl md:text-5xl tracking-tight font-heading opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.1s" }}>
              Что нового в мире дверей
            </h2>
          </div>
          <Link
            to="/news"
            className={`hidden md:flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-semibold transition-colors opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.15s" }}
          >
            Все новости <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((item, i) => (
            <article
              key={item.id}
              className={`group rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer
                transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-accent/20 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <CalendarDays className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-1.5 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <Link
          to="/news"
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-sm text-accent font-semibold"
        >
          Все новости <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
