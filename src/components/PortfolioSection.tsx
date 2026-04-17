import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { supabase } from "@/integrations/supabase/client";

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const { data: projects = [] } = useQuery({
    queryKey: ["projects-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, designer, image_url")
        .eq("is_published", true)
        .order("sort_order", { ascending: true })
        .limit(8);
      if (error) throw error;
      return data;
    },
  });

  if (projects.length === 0) return null;

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
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
              Фрамир в интерьерах
            </h2>
            <p
              className={`text-muted-foreground max-w-xl mt-4 leading-relaxed opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.15s" }}
            >
              Дизайнеры и архитекторы выбирают наши двери для проектов своих
              клиентов и всегда остаются довольны безупречным качеством и
              дизайном.
            </p>
          </div>
          <Link
            to="/portfolio"
            className={`inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-secondary active:scale-95 shrink-0 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            Все проекты
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              to="/portfolio"
              className={`group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + i * 0.05}s` }}
            >
              {project.image_url && (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary-foreground text-sm font-medium leading-tight">
                  {project.title}
                </p>
                {project.designer && (
                  <p className="text-primary-foreground/60 text-xs mt-1">
                    {project.designer}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
