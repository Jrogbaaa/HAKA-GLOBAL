import { Metadata } from "next";
import Link from "next/link";
import { CTABanner, StatsBar } from "@/components/sections";
import { INVESTMENT_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "Strategic investments shaped by access, timing, and conviction. Real Estate, Private Equity, Luxury Assets, and Venture Capital.",
};

const INVESTMENT_GRADIENTS = [
  "linear-gradient(135deg, rgba(238, 189, 43, 0.15), rgba(238, 189, 43, 0.05))",
  "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
  "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))",
  "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05))",
];

const INVESTMENT_STATS = [
  { value: "$850M+", label: "Capital Deployed", description: "Across all asset classes" },
  { value: "23%", label: "Avg. IRR", description: "Historical returns" },
  { value: "47", label: "Active Investments", description: "Current portfolio" },
  { value: "12", label: "Exits", description: "Successful realizations" },
];

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--background)]">
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(238, 189, 43, 0.4) 0%, transparent 70%)",
              transform: "translate(30%, -40%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Investment
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Capital follows
              <br />
              <span className="gradient-text">insight.</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Strategic investments shaped by access, timing, and conviction.
              We identify asymmetric opportunities across asset classes,
              leveraging our global network and deep sector expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={INVESTMENT_STATS} variant="compact" />

      {/* Investment Areas */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Focus Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Where we deploy capital
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Our investment thesis centers on identifying quality assets with
              asymmetric risk-reward profiles, often in situations requiring
              specialized access or expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INVESTMENT_AREAS.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)]"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      INVESTMENT_GRADIENTS[index % INVESTMENT_GRADIENTS.length],
                  }}
                >
                  <span className="material-symbols-outlined text-[var(--primary)] text-3xl">
                    {area.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {area.highlights?.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-[var(--text-secondary)] bg-[var(--background)] rounded-full border border-[var(--border)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] mb-6">
                <span className="text-sm font-medium text-[var(--primary)]">
                  Investment Thesis
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Pre-Shift Strike methodology
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Our investment approach mirrors our advisory philosophy:
                position before the shift. We identify opportunities where
                information asymmetry, relationship access, or specialized
                expertise creates durable advantages.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-3 transition-all"
              >
                Learn about our approach
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
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Information Advantage",
                  description:
                    "Proprietary intelligence and early signal detection across our network.",
                },
                {
                  title: "Relationship Access",
                  description:
                    "Exclusive deal flow through decades of trusted partnerships.",
                },
                {
                  title: "Operational Value",
                  description:
                    "Active engagement to optimize asset performance and exit timing.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--border-hover)] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Link */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore our marketplace
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Browse curated luxury assets and collectibles available for
            qualified buyers.
          </p>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20"
          >
            View Marketplace
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
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Discuss investment opportunities"
        description="Qualified investors may inquire about current opportunities and co-investment."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
        variant="gradient"
      />
    </>
  );
}
