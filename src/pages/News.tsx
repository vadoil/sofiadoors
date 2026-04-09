import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { newsItems } from "@/components/NewsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>

          <h1 className="text-4xl md:text-6xl font-heading tracking-tight mb-4">Новости</h1>
          <p className="text-muted-foreground max-w-xl mb-14">
            Следите за обновлениями коллекций, акциями и полезными материалами о дверях Sofia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer
                  transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-accent/20"
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
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
