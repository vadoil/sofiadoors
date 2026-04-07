const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg">Sofia · Самара</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Двери Sofia в Самаре. Официальный партнёр.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
