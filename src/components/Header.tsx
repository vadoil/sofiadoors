import { useState } from "react";
import { Phone, Flame, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Преимущества", href: "/advantages", isRoute: true },
    { label: "Каталог", href: "/catalog", isRoute: true },
    { label: "Палитра", href: "/palette", isRoute: true },
    { label: "Дизайнерам", href: "/designers", isRoute: true },
    { label: "Портфолио", href: "/portfolio", isRoute: true },
    { label: "Новости", href: "/news", isRoute: true },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent bar — глубокий графит для контраста */}
      <div className="bg-graphite text-warm-white/90 px-6 md:px-16 lg:px-24 py-1.5 hidden md:flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-2">
          <Flame className="w-3 h-3 text-bronze-foreground" />
          <span>Скидки до 60% на двери Фрамир — акция до 13 апреля!</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-warm-white/70">г. Самара, ул. Чкалова, 100</span>
          <a href="tel:+78462429636" className="hover:text-warm-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" />
            8 (846) 242-96-36
          </a>
          <a href="tel:+79277554657" className="hover:text-warm-white transition-colors">
            8 (927) 755-46-57
          </a>
        </div>
      </div>

      {/* Основная навигация — тёплый айвори с лёгким blur */}
      <div className="px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between bg-warm-white/85 backdrop-blur-md border-b border-stone/60">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-graphite text-xl font-heading font-semibold tracking-wide">
            Фрамир · Самара
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            aria-label="На главную"
            className="inline-flex w-9 h-9 items-center justify-center rounded-full border border-stone/70 text-graphite/80 hover:text-graphite hover:border-graphite/60 hover:bg-stone/30 transition-colors"
          >
            <Home className="w-4 h-4" strokeWidth={1.6} />
          </Link>
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-graphite/75 hover:text-graphite transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-graphite/75 hover:text-graphite transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#help"
            className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-all font-semibold shadow-sm"
          >
            Оставить заявку
          </a>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <Link to="/" aria-label="На главную" className="text-graphite">
            <Home className="w-4 h-4" />
          </Link>
          <a href="tel:+78462429636" className="text-graphite">
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-graphite"
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-warm-white/95 backdrop-blur-md px-6 py-8 flex flex-col gap-6 md:hidden border-b border-stone/60">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-graphite/80 hover:text-graphite transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-graphite/80 hover:text-graphite transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#help"
            onClick={() => setMenuOpen(false)}
            className="text-lg text-primary font-semibold transition-colors"
          >
            Оставить заявку →
          </a>
          <div className="border-t border-stone/60 pt-4 space-y-2 text-sm text-graphite/60">
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
