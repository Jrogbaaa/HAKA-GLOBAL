"use client";

import Link from "next/link";

type MarketplaceItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
  featured?: boolean;
  available?: boolean;
};

type MarketplaceGridProps = {
  items: MarketplaceItem[];
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    watches: "Watches",
    jewelry: "Jewelry",
    "luxury-assets": "Luxury Assets",
    art: "Art",
    collectibles: "Collectibles",
  };
  return labels[category] || category;
};

export const MarketplaceGrid = ({ items }: MarketplaceGridProps) => {
  const featuredItems = items.filter((item) => item.featured);
  const regularItems = items.filter((item) => !item.featured);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Featured Items */}
        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-8">
              Featured Pieces
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/marketplace/${item.id}`}
                  className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-xl"
                  tabIndex={0}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[var(--surface-elevated)]">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-[var(--primary)] text-[var(--background)] rounded-full">
                        Featured
                      </span>
                    </div>
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-medium">Sold</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs font-medium text-[var(--primary)] uppercase tracking-wider mb-2">
                      {getCategoryLabel(item.category)}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold gradient-text">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">
                        {item.available ? "Available" : "Sold"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Items */}
        {regularItems.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-8">
              All Pieces
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/marketplace/${item.id}`}
                  className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all hover:border-[var(--border-hover)] hover:-translate-y-1"
                  tabIndex={0}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[var(--surface-elevated)]">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-medium">Sold</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      {getCategoryLabel(item.category)}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">
                        {item.available ? "Available" : "Sold"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
