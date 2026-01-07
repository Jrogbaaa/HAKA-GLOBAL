import Link from "next/link";

type ProductItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
  gradient?: string;
};

type ProductSectionProps = {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  products: ProductItem[];
  columns?: 2 | 3 | 4;
  showLearnMore?: boolean;
};

export const ProductSection = ({
  badge,
  title,
  titleHighlight,
  description,
  products,
  columns = 3,
  showLearnMore = true,
}: ProductSectionProps) => {
  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                {badge}
              </span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="gradient-text">{titleHighlight}</span>
              </>
            )}
          </h2>

          {description && (
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${gridCols[columns]}`}>
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] hover:-translate-y-1"
              tabIndex={0}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    product.gradient ||
                    "linear-gradient(135deg, rgba(238, 189, 43, 0.15), rgba(238, 189, 43, 0.05))",
                }}
              >
                <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                  {product.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Learn More Link */}
              {showLearnMore && (
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

