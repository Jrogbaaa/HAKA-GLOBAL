type StatItem = {
  value: string;
  label: string;
  description?: string;
};

type StatsBarProps = {
  stats: StatItem[];
  variant?: "default" | "compact" | "featured";
};

export const StatsBar = ({ stats, variant = "default" }: StatsBarProps) => {
  if (variant === "compact") {
    return (
      <section className="py-12 border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "featured") {
    return (
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)] to-[var(--background)]" />

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="stat-number mb-4">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-sm text-[var(--text-muted)]">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {/* Decorative line */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-[var(--border)]" />
              )}

              <div className="text-center lg:text-left">
                <div className="stat-number mb-3">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-sm text-[var(--text-muted)] max-w-[200px] mx-auto lg:mx-0">
                    {stat.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

