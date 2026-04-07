import { Collection } from "@/data/catalogData";

interface CollectionCardProps {
  collection: Collection;
  aspect?: string;
}

const CollectionCard = ({ collection, aspect = "aspect-[4/3]" }: CollectionCardProps) => (
  <div className={`group relative overflow-hidden rounded-2xl ${aspect} cursor-pointer`}>
    <img
      src={collection.image}
      alt={collection.name}
      loading="lazy"
      width={800}
      height={1000}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
    <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
      {collection.designer && (
        <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-1">
          Дизайнер — {collection.designer}
        </p>
      )}
      <h3 className="text-xl md:text-2xl text-primary-foreground tracking-tight">
        {collection.name}
      </h3>
      <p className="mt-2 text-primary-foreground/70 text-sm max-w-sm line-clamp-2">
        {collection.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {collection.models.slice(0, 6).map((model) => (
          <span
            key={model}
            className="rounded-full border border-primary-foreground/20 px-2.5 py-0.5 text-xs text-primary-foreground/80 transition-colors duration-200 group-hover:border-primary-foreground/40"
          >
            {model}
          </span>
        ))}
        {collection.models.length > 6 && (
          <span className="rounded-full border border-primary-foreground/20 px-2.5 py-0.5 text-xs text-primary-foreground/80">
            +{collection.models.length - 6}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default CollectionCard;
