import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "Strategic investments shaped by access, timing, and conviction.",
};

const INVESTMENT_AREAS = [
  {
    title: "Worldwide Real Estate",
    description:
      "Strategic real estate investments across key global locations, focused on scarcity, positioning, and long-term relevance rather than short-term cycles.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    icon: "domain",
  },
  {
    title: "Private & Strategic Investments",
    description:
      "Direct investments in companies and structures where governance, strategy, and long-term vision are aligned. Includes access to startups and early-stage opportunities typically unavailable to the broader market.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    icon: "trending_up",
  },
  {
    title: "Precious Metals",
    description:
      "Targeted exposure to precious metals as instruments of capital preservation, optionality, and portfolio balance — approached with strategic timing and discipline.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
    icon: "paid",
  },
  {
    title: "Luxury Assets & Collectibles",
    description:
      "Luxury goods treated as investment-grade assets, driven by scarcity, demand, and access. Sourcing and resale of highly sought-after pieces from Patek Philippe, Hermès, Chanel, and other selective maisons.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    icon: "diamond",
  },
];

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center py-32 lg:py-40">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div className="pl-6 sm:pl-12 lg:pl-24 xl:pl-32">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
                Investment
              </p>
              <h1 className="text-[var(--foreground)] text-4xl lg:text-6xl leading-tight">
                Capital deployed
                <br />
                with conviction
              </h1>
            </div>
            <div className="lg:pt-14">
              <p className="text-xl lg:text-2xl text-[var(--foreground-muted)] leading-[1.9] mb-8 max-w-2xl">
                HAKA Global Investment operates where information asymmetry,
                scarcity, and strategic access generate long-term value.
              </p>
              <p className="text-xl lg:text-2xl text-[var(--foreground-muted)] leading-[1.9] max-w-2xl">
                Our activity is selective and opportunity-driven, often emerging
                from insights developed within HAKA Global Consulting. We deploy
                capital where anticipation creates advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-[70vh] flex items-center py-32 lg:py-40">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
                Investment Philosophy
              </p>
              <h2 className="text-[var(--foreground)] text-3xl lg:text-4xl">
                We do not chase trends.
                <br />
                We position before they form.
              </h2>
            </div>
            <div className="lg:pt-10 space-y-8">
              <p className="text-lg text-[var(--foreground-muted)] leading-[1.9]">
                Our approach combines contextual intelligence, disciplined risk
                assessment, and access to non-obvious opportunities.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-[1.9]">
                Conviction matters more than volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Areas Grid */}
      <section className="py-40 lg:py-56">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
              Investment Areas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {INVESTMENT_AREAS.map((area, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[var(--surface)]">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[var(--surface)]/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--foreground)] text-xl">
                      {area.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-[var(--foreground)] mb-4">
                  {area.title}
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="min-h-[70vh] flex items-center py-32 lg:py-40">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
                Intelligence & Timing
              </p>
              <h2 className="text-[var(--foreground)] text-3xl lg:text-4xl">
                AI as strategic
                <br />
                leverage
              </h2>
            </div>
            <div className="lg:pt-10 space-y-8">
              <p className="text-lg text-[var(--foreground-muted)] leading-[1.9]">
                Investment decisions are supported by AI-driven strategic
                intelligence, applied to context analysis, scenario
                anticipation, and decision support across market and non-market
                environments.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-[1.9]">
                Capital follows insight. Insight comes before opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="min-h-[70vh] flex items-center py-32 lg:py-40">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
                How We Operate
              </p>
              <h2 className="text-[var(--foreground)] text-3xl lg:text-4xl">
                Direct investments.
                <br />
                No open vehicles.
              </h2>
            </div>
            <div className="lg:pt-10">
              <ul className="space-y-6 text-lg text-[var(--foreground-muted)]">
                <li className="flex items-start gap-4">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>Direct investments or mandate-based activity</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>No open vehicles</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>No mass exposure</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>Discretion and selectivity are fundamental</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[50vh] flex items-center py-32 lg:py-40">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
                Contact
              </p>
              <h2 className="text-[var(--foreground)] text-3xl lg:text-4xl">
                Explore opportunities
              </h2>
            </div>
            <div className="lg:text-right">
              <Link
                href="mailto:info@hakaglobal.com"
                className="inline-flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--foreground-muted)] transition-colors group"
                tabIndex={0}
                aria-label="Send email to info@hakaglobal.com"
              >
                <span className="text-xl">info@hakaglobal.com</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <p className="text-sm text-[var(--foreground-muted)]">
              © {new Date().getFullYear()} HAKA Global. All rights reserved.
            </p>
            <p className="text-sm text-[var(--foreground-muted)]">
              Confidential by default.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
