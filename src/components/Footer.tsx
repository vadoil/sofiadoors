import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-heading text-lg block mb-3">Sofia · Самара</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Официальный партнёр фабрики Sofia в Самаре. Двери, перегородки, декор.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Контакты</p>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <a href="tel:+78462429636" className="block hover:text-foreground transition-colors">8 (846) 242-96-36</a>
              <a href="tel:+78462429628" className="block hover:text-foreground transition-colors">8 (846) 242-96-28</a>
              <a href="tel:+79277554657" className="block hover:text-foreground transition-colors">8 (927) 755-46-57</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Адрес</p>
            <p className="text-sm text-muted-foreground">г. Самара, ул. Чкалова, 100</p>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Двери Sofia в Самаре. Официальный партнёр.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
