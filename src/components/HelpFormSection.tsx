import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HelpFormSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="help" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-foreground text-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            >
              Не уверены, какая коллекция подойдёт именно вам?
            </h2>
            <p
              className={`text-background/60 leading-relaxed mb-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Оставьте заявку — подберём двери Фрамир под стиль интерьера, размеры проёмов, покрытие и бюджет.
            </p>
            <div className={`space-y-3 text-background/50 text-sm opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.15s" }}>
              <p>✓ Бесплатная консультация</p>
              <p>✓ Подбор за 1–2 дня</p>
              <p>✓ Расчёт стоимости без обязательств</p>
            </div>
          </div>

          <form
            className={`space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Имя"
              className="w-full rounded-2xl bg-background/10 border-0 px-6 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-background/30 transition-all"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full rounded-2xl bg-background/10 border-0 px-6 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-background/30 transition-all"
            />
            <select
              className="w-full rounded-2xl bg-background/10 border-0 px-6 py-4 text-sm text-background/70 focus:outline-none focus:ring-1 focus:ring-background/30 transition-all appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Что нужно?</option>
              <option value="apartment">Двери для квартиры</option>
              <option value="house">Двери для дома</option>
              <option value="project">Подбор под дизайн-проект</option>
              <option value="hidden">Скрытые двери</option>
              <option value="consult">Нужна консультация</option>
            </select>
            <textarea
              placeholder="Расскажите о проекте или прикрепите ссылку на визуализацию"
              rows={3}
              className="w-full rounded-2xl bg-background/10 border-0 px-6 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-background/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-background px-8 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:bg-background/90 active:scale-[0.98]"
            >
              Получить подбор
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HelpFormSection;
