"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { INSIGHTS_CATEGORIES } from "@/lib/constants";

interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: Date;
}

interface InsightsGridProps {
  insights: Insight[];
}

export const InsightsGrid = ({ insights }: InsightsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredInsights =
    selectedCategory === "all"
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryLabel = (value: string) => {
    const category = INSIGHTS_CATEGORIES.find((c) => c.value === value);
    return category?.label || value;
  };

  return (
    <section className="py-24 lg:py-32 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {INSIGHTS_CATEGORIES.map((category) => (
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

        {/* Featured Article (First Item) */}
        {filteredInsights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href={`/insights/${filteredInsights[0].slug}`}
              className="block group"
              tabIndex={0}
              aria-label={`Read ${filteredInsights[0].title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image
                    src={filteredInsights[0].imageUrl}
                    alt={filteredInsights[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="gold" className="self-start mb-4">
                    {getCategoryLabel(filteredInsights[0].category)}
                  </Badge>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {filteredInsights[0].title}
                  </h2>
                  <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                    {filteredInsights[0].excerpt}
                  </p>
                  <p className="mt-6 text-sm text-[var(--text-muted)]">
                    {formatDate(filteredInsights[0].publishedAt)}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredInsights.slice(1).map((insight) => (
              <motion.div
                key={insight.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/insights/${insight.slug}`}
                  className="block group"
                  tabIndex={0}
                  aria-label={`Read ${insight.title}`}
                >
                  <div className="relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={insight.imageUrl}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="gold">
                          {getCategoryLabel(insight.category)}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
                        {insight.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2">
                        {insight.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-[var(--text-muted)]">
                        {formatDate(insight.publishedAt)}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredInsights.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-secondary)]">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

