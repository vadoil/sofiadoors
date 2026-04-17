import { Link } from "react-router-dom";
import { ArrowRight, Download, MessageCircle, Factory, Camera, Compass, Wrench, Package, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import designersHero from "@/assets/designers-hero.jpg";

const assortment = [
  { title: "Двери", desc: "Массивные, шпонированные, филёнчатые, раздвижные" },
  { title: "Стеновые панели", desc: "Декоративные и звукоизоляционные — шпон, дерево, металл, мрамор" },
  { title: "Алюминиевые решения", desc: "Двери, перегородки, современные системы хранения" },
  { title: "Системы открывания", desc: "Подъёмно-сдвижные, скрытые, складные" },
  { title: "Интерьерные решения", desc: "Декоративные уголки, наличники, пороги, молдинги" },
  { title: "Паркет и ламинат", desc: "Из ассортимента и под заказ, в том числе из массива" },
  { title: "Фасады", desc: "Теневые, филёнчатые, в цвет стен, ламинированные" },
];

const publishSteps = [
  { num: "01", title: "В разделе «Портфолио»", desc: "Размещаем ваши проекты в нашем каталоге работ — отличная витрина для будущих клиентов." },
  { num: "02", title: "В соцсетях фабрики", desc: "Публикуем проекты на наших страницах с упоминанием автора и студии." },
  { num: "03", title: "Помогаем с текстом", desc: "Если сложно описать идею — напишем текст, который подчеркнёт сильные стороны проекта." },
];

const services = [
  { icon: Compass, title: "Визуализация интерьера", desc: "Помогаем создать реалистичную визуализацию будущего пространства." },
  { icon: Wrench, title: "Конструкторское бюро", desc: "Чертежи и схемы для производства дверей, панелей и других изделий." },
  { icon: Package, title: "Подбор продукции", desc: "Подскажем материалы и решения под задачи и стиль вашего проекта." },
  { icon: Factory, title: "Узкие инструменты", desc: "Доступ к специализированным программам для проектирования и расчётов." },
];

const Designers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-background -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4 animate-fade-up">
              Сотрудничество
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-[1.02] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Дизайнерам<br />
              <span className="text-accent italic">и архитекторам</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Если вы профессионально занимаетесь интерьерами — будем рады пообщаться. Поддерживаем
              на каждом этапе: от подбора продукта до сдачи объекта.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="/catalog/katalog-framyr.pdf"
                download="Katalog-Framyr.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold hover:bg-foreground/90 transition-all group"
              >
                <Download className="w-4 h-4" />
                Скачать каталог
              </a>
              <a
                href="#contact-designers"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all"
              >
                Связаться с нами
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={designersHero}
                alt="Дизайнерам — Фрамир Самара"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assortment */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Ассортимент</p>
            <h2 className="text-3xl md:text-5xl font-heading tracking-tight mb-5 leading-tight">
              Всё для интерьера в одном стиле
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Двери из массива, шпона и фанеры, алюминиевые перегородки, инновационные системы
              хранения — всё можно сделать в одной стилистике.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assortment.map((item) => (
              <Link
                key={item.title}
                to="/catalog"
                className="group bg-secondary/40 hover:bg-secondary border border-transparent hover:border-accent/30 rounded-2xl p-6 transition-all duration-300 flex justify-between items-start gap-4"
              >
                <div>
                  <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Join */}
      <section id="join" className="py-24 px-6 md:px-16 lg:px-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Сообщество</p>
            <h2 className="text-3xl md:text-5xl font-heading tracking-tight mb-6 leading-tight">
              Присоединяйтесь<br />к нашему чату
            </h2>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              Закрытый чат для дизайнеров, архитекторов и специалистов: делитесь идеями, задавайте
              вопросы, обменивайтесь опытом и находите новых клиентов. Уже более 400 участников.
            </p>
            <a
              href="#contact-designers"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-accent/90 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Вступить в чат
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-background/5 backdrop-blur border border-background/10 rounded-2xl p-7">
              <p className="text-5xl font-heading text-accent mb-2">400+</p>
              <p className="text-sm text-background/60">профессионалов в чате</p>
            </div>
            <div className="bg-background/5 backdrop-blur border border-background/10 rounded-2xl p-7 mt-8">
              <p className="text-5xl font-heading text-accent mb-2">15</p>
              <p className="text-sm text-background/60">лет на рынке</p>
            </div>
            <div className="bg-background/5 backdrop-blur border border-background/10 rounded-2xl p-7">
              <p className="text-5xl font-heading text-accent mb-2">22</p>
              <p className="text-sm text-background/60">коллекции дверей</p>
            </div>
            <div className="bg-background/5 backdrop-blur border border-background/10 rounded-2xl p-7 mt-8">
              <p className="text-5xl font-heading text-accent mb-2">∞</p>
              <p className="text-sm text-background/60">проектов вместе</p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory tour */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <Factory className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight mb-6 leading-tight">
            Экскурсия на фабрику
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Дизайнеры в поиске того самого «вау» — эффекта, который превращает проект в незабываемый.
            Приглашаем вас на нашу производственную площадку, чтобы увидеть процесс изнутри.
          </p>
          <a
            href="#contact-designers"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-accent/90 transition-all"
          >
            Записаться на экскурсию
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Publish projects */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Публикуем ваши проекты</p>
              <h2 className="text-3xl md:text-5xl font-heading tracking-tight leading-tight">
                Покажем работу<br />широкой аудитории
              </h2>
            </div>
            <Camera className="w-12 h-12 text-accent/40" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {publishSteps.map((step) => (
              <div key={step.num} className="bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-shadow">
                <p className="text-5xl font-heading text-accent/30 mb-5">{step.num}</p>
                <h3 className="text-xl font-heading mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Чем мы полезны</p>
            <h2 className="text-3xl md:text-5xl font-heading tracking-tight leading-tight">
              Партнёры на каждом этапе проекта
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group bg-background border border-border/60 rounded-2xl p-7 hover:border-accent/50 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-designers" className="py-24 px-6 md:px-16 lg:px-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight mb-6 leading-tight">
            Готовы стать партнёром?
          </h2>
          <p className="text-lg text-background/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Оставьте заявку — расскажем подробности сотрудничества, добавим в чат, отправим каталог
            и 3D-модели для вашего проекта.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+78462429636"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all"
            >
              8 (846) 242-96-36
            </a>
            <a
              href="mailto:info@framyr-samara.ru"
              className="inline-flex items-center gap-2 border border-background/20 px-8 py-4 rounded-full font-semibold hover:bg-background hover:text-foreground transition-all"
            >
              info@framyr-samara.ru
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Designers;
