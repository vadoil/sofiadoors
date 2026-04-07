const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
          Подберём двери
          <br />
          под ваш проект
        </h2>
        <p className="text-primary-foreground/60 mb-12 leading-relaxed">
          Пришлите визуализации или планировки — подготовим подборку коллекций, отделок и решений
        </p>

        <form
          className="space-y-4 text-left"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Имя"
            className="w-full rounded-2xl bg-primary-foreground/10 border-0 px-6 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30 transition-all"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-2xl bg-primary-foreground/10 border-0 px-6 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30 transition-all"
          />
          <textarea
            placeholder="Расскажите о проекте"
            rows={4}
            className="w-full rounded-2xl bg-primary-foreground/10 border-0 px-6 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30 transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-primary-foreground px-8 py-4 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary-foreground/90 active:scale-[0.98]"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
