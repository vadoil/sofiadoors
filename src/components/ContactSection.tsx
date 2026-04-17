import { Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
              Контакты
            </p>
            <h2 className={`text-3xl md:text-4xl tracking-tight mb-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.1s" }}>
              Шоурум в Самаре
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 text-muted-foreground shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Адрес</p>
                  <p className="font-medium">г. Самара, ул. Чкалова, 100</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-0.5 text-muted-foreground shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Телефоны</p>
                  <a href="tel:+78462429636" className="block font-medium hover:text-primary transition-colors">8 (846) 242-96-36</a>
                  <a href="tel:+78462429628" className="block font-medium hover:text-primary transition-colors">8 (846) 242-96-28</a>
                  <a href="tel:+79277554657" className="block font-medium hover:text-primary transition-colors mt-1">8 (927) 755-46-57</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=50.110338%2C53.195063&z=16&pt=50.110338%2C53.195063%2Cpm2rdm&lang=ru_RU"
              width="100%"
              height="350"
              frameBorder="0"
              allowFullScreen
              className="w-full"
              title="Шоурум Фрамир — г. Самара, ул. Чкалова, 100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
