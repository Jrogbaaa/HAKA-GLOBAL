import Link from "next/link";

type CTABannerProps = {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "default" | "gradient" | "minimal";
};

export const CTABanner = ({
  title = "Ready to get started?",
  description = "Join the executives and institutions that trust HAKA Global for strategic advisory and investment.",
  primaryCta = { text: "Get Started", href: "/contact" },
  secondaryCta = { text: "Learn More", href: "/about" },
  variant = "default",
}: CTABannerProps) => {
  if (variant === "minimal") {
    return (
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20"
              tabIndex={0}
            >
              {primaryCta.text}
              <svg
                className="w-5 h-5"
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
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] transition-all"
              tabIndex={0}
            >
              {secondaryCta.text}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "gradient") {
    return (
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(238, 189, 43, 0.2), transparent)",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                {title}
              </h2>
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                {description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-xl text-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:-translate-y-1"
                  tabIndex={0}
                >
                  {primaryCta.text}
                  <svg
                    className="w-5 h-5"
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
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-10 py-5 text-white font-semibold rounded-xl text-lg border border-[var(--border)] hover:bg-[var(--surface-elevated)] transition-all"
                  tabIndex={0}
                >
                  {secondaryCta.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-20 lg:py-32 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20"
              tabIndex={0}
            >
              {primaryCta.text}
              <svg
                className="w-5 h-5"
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
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] transition-all"
              tabIndex={0}
            >
              {secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

