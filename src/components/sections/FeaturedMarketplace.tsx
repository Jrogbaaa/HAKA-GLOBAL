"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface MarketplaceItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  price: number | null;
}

interface FeaturedMarketplaceProps {
  items: MarketplaceItem[];
}

export const FeaturedMarketplace = ({ items }: FeaturedMarketplaceProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return "Price on Request";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-24 lg:py-36 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-16 lg:mb-20"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-5">
              Curated Collection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)]">
              Featured Offerings
            </h2>
          </div>
          <Link href="/marketplace" tabIndex={0}>
            <Button variant="secondary" size="md">
              View All
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Link
                href={`/marketplace/${item.id}`}
                className="block group"
                tabIndex={0}
                aria-label={`View ${item.title}`}
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
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">{item.category}</Badge>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--text-secondary)]">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

