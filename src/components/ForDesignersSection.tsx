import { Link } from "react-router-dom";
import { ArrowRight, Compass, Users, Factory, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import designersHero from "@/assets/designers-hero.jpg";

const perks = [
  { icon: Compass, title: "Визуализация и чертежи", desc: "Помогаем с 3D-визуализацией и конструкторской документацией под ваш проект." },
  { icon: Users, title: "Закрытое сообщество", desc: "Чат на 400+ дизайнеров, архитекторов и риелторов — обмен опытом и клиентами." },
  { icon: Factory, title: "Экскурсии на фабрику", desc: "Покажем производство, материалы и технологии — найдёте «вау»-эффект для проекта." },
  { icon: Camera, title: "Публикация проектов", desc: "Размещаем ваши работы в портфолио на сайте и в соцсетях фабрики." },
];

const ForDesignersSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="designers" className="py-16 md:py-20 px-6 md:px-16 lg:px-24 bg-secondary/40">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12 md:mb-14">
          <div className={`opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Профессионалам</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6 leading-[1.05]">
              Дизайнерам<br />и архитекторам
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Если вы профессионально занимаетесь интерьерами — будем рады пообщаться. Двери, панели,
              алюминиевые перегородки и системы хранения в едином стиле для ваших проектов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/designers"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-accent/90 transition-all group"
              >
                Все возможности
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#help"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all"
              >
                Скачать каталог
              </a>
            </div>
          </div>

          <div
            className={`relative opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={designersHero}
                alt="Сотрудничество с дизайнерами Фрамир"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="text-3xl font-heading text-accent">400+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">в закрытом чате</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className={`group bg-background border border-border/60 rounded-2xl p-7 hover:border-accent/50 hover:shadow-xl transition-all duration-500 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading mb-2">{perk.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForDesignersSection;
