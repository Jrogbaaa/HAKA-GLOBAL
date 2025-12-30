"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { MARKETPLACE_CATEGORIES } from "@/lib/constants";

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number | null;
  featured: boolean;
  available: boolean;
}

interface MarketplaceGridProps {
  items: MarketplaceItem[];
}

export const MarketplaceGrid = ({ items }: MarketplaceGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const formatPrice = (price: number | null) => {
    if (price === null) return "Price on Request";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="w-full flex justify-center py-24 lg:py-32 bg-[var(--background)]">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {MARKETPLACE_CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`
                px-4 py-2 text-sm font-medium uppercase tracking-wider
                border transition-all duration-300
                ${
                  selectedCategory === category.value
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--background)]"
                    : "bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }
              `}
              tabIndex={0}
              aria-pressed={selectedCategory === category.value}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/marketplace/${item.id}`}
                  className="block group"
                  tabIndex={0}
                  aria-label={`View details for ${item.title}`}
                >
                  <div className="relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="gold">{item.category}</Badge>
                        {item.featured && <Badge variant="default">Featured</Badge>}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-4 text-sm font-medium text-[var(--accent)]">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-secondary)]">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

