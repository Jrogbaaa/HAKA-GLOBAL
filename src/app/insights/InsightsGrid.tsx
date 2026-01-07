"use client";

import Link from "next/link";

type Insight = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: Date;
  featured?: boolean;
};

type InsightsGridProps = {
  insights: Insight[];
};

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    strategy: "text-purple-400",
    intelligence: "text-blue-400",
    affairs: "text-cyan-400",
    investment: "text-green-400",
  };
  return colors[category.toLowerCase()] || "text-[var(--primary)]";
};

export const InsightsGrid = ({ insights }: InsightsGridProps) => {
  const featuredInsight = insights.find((i) => i.featured) || insights[0];
  const otherInsights = insights.filter((i) => i.id !== featuredInsight?.id);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Featured Article */}
        {featuredInsight && (
          <Link
            href={`/insights/${featuredInsight.slug}`}
            className="group block mb-16"
            tabIndex={0}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--surface)]">
                {featuredInsight.imageUrl && (
                  <img
                    src={featuredInsight.imageUrl}
                    alt={featuredInsight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-[var(--primary)] text-[var(--background)] rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div
                  className={`text-xs font-medium uppercase tracking-wider mb-4 ${getCategoryColor(
                    featuredInsight.category
                  )}`}
                >
                  {featuredInsight.category}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {featuredInsight.title}
                </h2>
                <p className="text-[var(--text-secondary)] mb-6 line-clamp-3">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                  <span>{featuredInsight.author}</span>
                  <span>·</span>
                  <span>{formatDate(featuredInsight.publishedAt)}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherInsights.map((insight) => (
            <Link
              key={insight.id}
              href={`/insights/${insight.slug}`}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all hover:border-[var(--border-hover)] hover:-translate-y-1"
              tabIndex={0}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-elevated)]">
                {insight.imageUrl && (
                  <img
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className={`text-xs font-medium uppercase tracking-wider mb-3 ${getCategoryColor(
                    insight.category
                  )}`}
                >
                  {insight.category}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                  {insight.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                  <span>{insight.author}</span>
                  <span>·</span>
                  <span>{formatDate(insight.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
