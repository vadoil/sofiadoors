import { Phone, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — contacts */}
          <div>
            <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
              Подберём двери
              <br />
              под ваш проект
            </h2>
            <p className="text-primary-foreground/60 mb-10 leading-relaxed">
              Пришлите визуализации или планировки — подготовим подборку коллекций, отделок и решений
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/60 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-1">Шоурум</p>
                  <p className="font-medium">г. Самара, ул. Чкалова, 100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-0.5 text-primary-foreground/60 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-1">Телефоны</p>
                  <a href="tel:+78462429636" className="block font-medium hover:text-primary-foreground/80 transition-colors">
                    8 (846) 242-96-36
                  </a>
                  <a href="tel:+78462429628" className="block font-medium hover:text-primary-foreground/80 transition-colors">
                    8 (846) 242-96-28
                  </a>
                  <a href="tel:+79277554657" className="block font-medium hover:text-primary-foreground/80 transition-colors mt-1">
                    8 (927) 755-46-57
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form
              className="space-y-4"
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
        </div>

        {/* Yandex Map */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-primary-foreground/10">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=50.110338%2C53.195063&z=16&pt=50.110338%2C53.195063%2Cpm2rdm&lang=ru_RU"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="w-full"
            title="Шоурум Sofia — г. Самара, ул. Чкалова, 100"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
