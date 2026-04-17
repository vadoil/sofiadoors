import { Link } from "react-router-dom";
import {
  Award,
  Factory,
  Layers,
  Wrench,
  Truck,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroDoor from "@/assets/advantages/hero-door.jpg";
import factory from "@/assets/advantages/factory.jpg";
import materials from "@/assets/advantages/materials.jpg";
import interior from "@/assets/advantages/interior.jpg";

const stats = [
  { num: "25+", label: "лет на рынке дверей" },
  { num: "22", label: "коллекции в каталоге" },
  { num: "8", label: "типов покрытий" },
  { num: "1500+", label: "проектов в Самаре" },
];

const reasons = [
  {
    icon: Factory,
    title: "Собственная фабрика",
    desc: "Двери Фрамир производятся на одной из крупнейших фабрик России — с современным оборудованием и контролем качества на каждом этапе.",
  },
  {
    icon: Layers,
    title: "8 видов покрытий",
    desc: "Шпон, эмаль, нанотекс, стекло, зеркало, ПВХ, экошпон. Подбираем материал под архитектуру помещения и бюджет проекта.",
  },
  {
    icon: Wrench,
    title: "Полная комплектация",
    desc: "Полотно, короб, наличники, фурнитура, доборы — собираем дверной комплект под ключ в едином стиле.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 5 лет",
    desc: "Уверены в материалах и сборке: даём расширенную гарантию на полотно и фурнитуру наших дверей.",
  },
  {
    icon: Truck,
    title: "Доставка и монтаж",
    desc: "Свои бригады замерщиков и установщиков по Самаре и области. Чисто, точно, в согласованные сроки.",
  },
  {
    icon: HeartHandshake,
    title: "Сопровождение проекта",
    desc: "От первого визита в шоурум до сдачи объекта — один менеджер ведёт ваш заказ и держит вас в курсе.",
  },
];

const promises = [
  "Шоурум на ул. Чкалова, 100 — все коллекции вживую",
  "Замер бесплатно по Самаре и области",
  "Производство и склад в России — короткие сроки",
  "Программа лояльности для дизайнеров и архитекторов",
];

const Advantages = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone/40 via-warm-white to-warm-white -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-muted-foreground mb-5 animate-fade-up">
              Преимущества · Фрамир · Самара
            </p>
            <h1
              className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Двери, в которых
              <br />
              <span className="italic text-graphite/80">видно качество</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-9 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Фрамир — российский производитель межкомнатных дверей с собственной
              фабрикой и шоурумом в Самаре. Делаем двери, которые служат десятилетиями
              и держат стиль интерьера.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 bg-graphite text-warm-white px-7 py-3.5 rounded-full font-semibold hover:bg-graphite/90 transition-all"
              >
                Смотреть каталог
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#help"
                className="inline-flex items-center gap-2 border border-graphite/25 text-graphite px-7 py-3.5 rounded-full font-semibold hover:bg-graphite hover:text-warm-white transition-all"
              >
                Записаться в шоурум
              </a>
            </div>
          </div>
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroDoor}
                alt="Межкомнатная дверь Фрамир в современном интерьере"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-warm-white border border-stone/60 rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-heading text-graphite">5 лет</p>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                Гарантия на двери
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-stone/60 rounded-2xl overflow-hidden border border-stone/60">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-warm-white p-7 md:p-9 text-center md:text-left"
            >
              <p className="font-heading text-4xl md:text-5xl text-graphite mb-2">
                {s.num}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About — фабрика */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src={factory}
              alt="Производство дверей Фрамир — современная фабрика"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              О фабрике
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-tight mb-6">
              Производство, в котором мы уверены
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
              Фабрика Фрамир работает с 1999 года. Современные линии раскроя и
              шпонирования, собственное конструкторское бюро, многоступенчатый
              контроль геометрии и покрытия — на каждом этапе.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Мы не перепродаём чужие двери: всё, что есть в шоуруме на Чкалова,
              сделано на одной фабрике, под единым стандартом качества.
            </p>
          </div>
        </div>
      </section>

      {/* 6 преимуществ */}
      <section id="advantages" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-stone/25">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Почему Фрамир
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-tight">
              Шесть причин выбрать наши двери
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="group bg-warm-white border border-stone/60 rounded-2xl p-7 md:p-8 hover:border-graphite/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-graphite/5 flex items-center justify-center mb-5 group-hover:bg-graphite group-hover:text-warm-white transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials split */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Материалы и покрытия
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-tight mb-6">
              Любая фактура — от шпона до зеркала
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7">
              Шпон ореха и дуба, шелковистая эмаль, технологичный нанотекс,
              рифлёное стекло, зеркало в любой тонировке. Подбираем покрытие
              под архитектуру и свет помещения.
            </p>
            <ul className="space-y-3">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-base text-graphite/90"
                >
                  <Sparkles className="w-4 h-4 text-graphite/60 mt-1.5 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={materials}
              alt="Образцы материалов и покрытий дверей Фрамир"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Айдентика — двери в интерьере */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-graphite text-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-warm-white/60 mb-4">
              Двери и интерьер
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-tight mb-6">
              Не просто двери — часть архитектуры
            </h2>
            <p className="text-base md:text-lg text-warm-white/75 leading-relaxed mb-8">
              Скрытые двери высотой до потолка, теневые зазоры, стеновые панели
              в один тон с полотном, скрытая фурнитура. Делаем двери, которые
              работают на общую идею интерьера, а не выбиваются из неё.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-warm-white text-graphite px-7 py-3.5 rounded-full font-semibold hover:bg-warm-white/90 transition-all"
              >
                Смотреть портфолио
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/designers"
                className="inline-flex items-center gap-2 border border-warm-white/25 text-warm-white px-7 py-3.5 rounded-full font-semibold hover:bg-warm-white hover:text-graphite transition-all"
              >
                Дизайнерам
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-warm-white/10">
            <img
              src={interior}
              alt="Двери Фрамир в интерьере — Самара"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-graphite/70 mx-auto mb-6" strokeWidth={1.4} />
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-tight mb-5">
            Приходите в шоурум
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            ул. Чкалова, 100 — Самара. Покажем все коллекции, дадим потрогать
            покрытия и поможем подобрать двери под ваш интерьер.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+78462429636"
              className="inline-flex items-center gap-2 bg-graphite text-warm-white px-8 py-4 rounded-full font-semibold hover:bg-graphite/90 transition-all"
            >
              8 (846) 242-96-36
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-graphite/25 text-graphite px-8 py-4 rounded-full font-semibold hover:bg-graphite hover:text-warm-white transition-all"
            >
              На главную
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advantages;
