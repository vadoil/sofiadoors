import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const NewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const { data: items = [] } = useQuery({
    queryKey: ["news-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  if (items.length === 0) return null;

  return (
    <section id="news" className="pt-12 md:pt-16 pb-16 md:pb-24 px-6 md:px-16 lg:px-24 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12 flex-wrap gap-6">
          <div>
            <p className={`text-sm uppercase tracking-[0.2em] text-accent mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
              Блог Фрамир
            </p>
            <h2 className={`text-3xl md:text-5xl tracking-tight font-heading opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.1s" }}>
              Новости и статьи
            </h2>
          </div>
          <Link
            to="/news"
            className={`hidden md:flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-semibold transition-colors opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.15s" }}
          >
            Все материалы <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Link
              to="/news"
              key={item.id}
              className={`group rounded-2xl overflow-hidden bg-background border border-border/50
                transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-secondary">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-heading text-4xl">
                    Фрамир
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-background/95 backdrop-blur-sm text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <CalendarDays className="w-3 h-3" />
                  {item.published_at
                    ? new Date(item.published_at).toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                    : ""}
                </div>
                <h3 className="font-heading text-xl mb-2 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.excerpt && (
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{item.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/news"
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-sm text-accent font-semibold"
        >
          Все материалы <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
