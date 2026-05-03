import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Все", "Новости", "Статьи", "Видео", "Мероприятия", "СМИ о нас"];

const News = () => {
  const [active, setActive] = useState("Все");

  const { data: newsItems = [], isLoading } = useQuery({
    queryKey: ["news-public"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const filtered = active === "Все" ? newsItems : newsItems.filter((n) => n.category === active);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>

          <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Блог Фрамир</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6 leading-[1.1]">
            Новости и статьи
          </h1>
          <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Следите за обновлениями коллекций, мероприятиями фабрики и полезными материалами о
            межкомнатных дверях.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  active === cat
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl bg-card border border-border/50 animate-pulse">
                  <div className="aspect-[16/10] bg-secondary rounded-t-2xl" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-20 bg-secondary rounded" />
                    <div className="h-5 w-3/4 bg-secondary rounded" />
                    <div className="h-3 w-full bg-secondary rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  onClick={() => {
                    if (item.source_url) {
                      window.open(item.source_url, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className={`group rounded-2xl overflow-hidden bg-card border border-border/50
                    transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30
                    ${item.source_url ? "cursor-pointer" : ""}`}
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
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{item.excerpt}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {!isLoading && filtered.length === 0 && (
            <p className="text-muted-foreground text-center py-20">В этом разделе пока нет материалов</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
