import { useState } from "react";
import { Phone } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Преимущества", href: "#advantages" },
    { label: "Коллекции", href: "#collections" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-foreground/80 backdrop-blur-md px-6 md:px-16 lg:px-24 py-1.5 hidden md:flex items-center justify-end gap-6 text-xs text-background/60">
        <span>г. Самара, ул. Чкалова, 100</span>
        <a href="tel:+78462429636" className="hover:text-background transition-colors flex items-center gap-1">
          <Phone className="w-3 h-3" />
          8 (846) 242-96-36
        </a>
        <a href="tel:+79277554657" className="hover:text-background transition-colors">
          8 (927) 755-46-57
        </a>
      </div>

      <div className="px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between bg-foreground/30 backdrop-blur-md">
        <a href="/" className="text-primary-foreground text-xl font-heading font-semibold tracking-wide">
          Sofia · Самара
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#help"
            className="text-sm bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-5 py-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-all"
          >
            Оставить заявку
          </a>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <a href="tel:+78462429636" className="text-primary-foreground">
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary-foreground"
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-foreground/95 backdrop-blur-md px-6 py-8 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#help"
            onClick={() => setMenuOpen(false)}
            className="text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            Оставить заявку
          </a>
          <div className="border-t border-primary-foreground/10 pt-4 space-y-2 text-sm text-primary-foreground/60">
            <a href="tel:+78462429636" className="block">8 (846) 242-96-36</a>
            <a href="tel:+78462429628" className="block">8 (846) 242-96-28</a>
            <a href="tel:+79277554657" className="block">8 (927) 755-46-57</a>
            <p className="text-xs mt-2">г. Самара, ул. Чкалова, 100</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
