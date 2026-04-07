import { SystemItem } from "@/data/catalogData";

interface SystemCardProps {
  system: SystemItem;
}

const SystemCard = ({ system }: SystemCardProps) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
    <img
      src={system.image}
      alt={system.name}
      loading="lazy"
      width={800}
      height={1000}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
    <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
      <h3 className="text-lg md:text-xl text-primary-foreground tracking-tight">
        {system.name}
      </h3>
      <p className="mt-2 text-primary-foreground/70 text-sm">
        {system.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {system.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-primary-foreground/20 px-2.5 py-0.5 text-xs text-primary-foreground/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default SystemCard;
