const stats = [
  { value: "25+", label: "лет на рынке" },
  { value: "40+", label: "коллекций" },
  { value: "12\u202F000", label: "проектов в год" },
  { value: "5 лет", label: "гарантии" },
];

const StatsSection = () => {
  return (
    <section className="bg-graphite text-warm-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-bronze-foreground leading-none whitespace-nowrap tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 text-[11px] md:text-xs uppercase tracking-[0.2em] text-warm-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
