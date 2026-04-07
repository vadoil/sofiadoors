import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between">
      <a href="/" className="text-primary-foreground text-xl font-heading font-semibold tracking-wide">
        Sofia · Самара
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {[
          { label: "Коллекции", href: "#collections" },
          { label: "Процесс", href: "#process" },
          { label: "Контакт", href: "#contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-primary-foreground"
        aria-label="Меню"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {menuOpen ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-graphite/95 backdrop-blur-md px-6 py-8 flex flex-col gap-6 md:hidden">
          {[
            { label: "Коллекции", href: "#collections" },
            { label: "Процесс", href: "#process" },
            { label: "Контакт", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
