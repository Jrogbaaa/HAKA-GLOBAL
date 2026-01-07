type PageHeaderProps = {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
};

export const PageHeader = ({
  subtitle,
  title,
  titleHighlight,
  description,
}: PageHeaderProps) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(238, 189, 43, 0.3) 0%, transparent 70%)",
            transform: "translate(20%, -30%)",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="max-w-3xl fade-in-up">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="gradient-text">{titleHighlight}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
