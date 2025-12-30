"use client";

import { useState } from "react";
import Link from "next/link";
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
  featured?: boolean;
}

interface InsightsGridProps {
  insights: Insight[];
}

const categories = [
  { value: "all", label: "All Stories" },
  { value: "strategy", label: "Personal Branding" },
  { value: "market-trends", label: "Real Estate" },
  { value: "investments", label: "Finance" },
  { value: "lifestyle", label: "Marketplace" },
];

export const InsightsGrid = ({ insights }: InsightsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter((insight) => {
    const matchesCategory =
      selectedCategory === "all" || insight.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredInsight = filteredInsights[0];
  const gridInsights = filteredInsights.slice(1);

  const getCategoryLabel = (value: string) => {
    const category = INSIGHTS_CATEGORIES.find((c) => c.value === value);
    return category?.label || value;
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full">
      {/* Sticky Filter Bar */}
      <section className="sticky top-[80px] z-40 w-full flex justify-center bg-[var(--surface)]/95 backdrop-blur border-b border-white/5">
        <div className="w-full max-w-[1280px] px-6 md:px-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategorySelect(category.value)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.value
                      ? "bg-white/10 text-white"
                      : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                  tabIndex={0}
                  aria-pressed={selectedCategory === category.value}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 placeholder-[var(--text-muted)] transition-all"
                placeholder="Search insights..."
                aria-label="Search insights"
                tabIndex={0}
              />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-lg">
                search
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredInsight && (
        <section className="py-12 md:py-16 w-full flex justify-center bg-[var(--surface)]">
          <div className="w-full max-w-[1280px] px-6 md:px-10">
            <Link
              href={`/insights/${featuredInsight.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              tabIndex={0}
              aria-label={`Read ${featuredInsight.title}`}
            >
              <div className="relative aspect-[16/9] md:aspect-[3/2] w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url("${featuredInsight.imageUrl}")` }}
                  role="img"
                  aria-label={featuredInsight.title}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--primary)] text-xs font-bold tracking-widest uppercase">
                    Editor&apos;s Pick
                  </span>
                  <span className="w-12 h-[1px] bg-white/20" />
                  <span className="text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider">
                    {getCategoryLabel(featuredInsight.category)}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                  {featuredInsight.title}
                </h2>
                <p className="text-[var(--text-secondary)] text-lg font-light leading-relaxed line-clamp-3">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide uppercase mt-2 group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Report{" "}
                  <span className="material-symbols-outlined text-[var(--primary)]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="pb-24 w-full flex justify-center bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          {gridInsights.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {gridInsights.map((insight) => (
                  <article
                    key={insight.id}
                    className="flex flex-col group cursor-pointer"
                  >
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="block"
                      tabIndex={0}
                      aria-label={`Read ${insight.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                        <div
                          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url("${insight.imageUrl}")` }}
                          role="img"
                          aria-label={insight.title}
                        />
                        <div className="absolute top-4 left-4 bg-[var(--surface)]/90 backdrop-blur px-3 py-1 rounded border border-white/10">
                          <span className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider">
                            {getCategoryLabel(insight.category)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[var(--primary)] transition-colors leading-snug">
                          {insight.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed line-clamp-3">
                          {insight.excerpt}
                        </p>
                        <div className="pt-2 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">
                          Read Article
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-20 flex justify-center">
                <button
                  className="px-8 py-3 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[var(--background)] transition-all duration-300"
                  tabIndex={0}
                  aria-label="Load more insights"
                >
                  Load More Insights
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)]">
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
