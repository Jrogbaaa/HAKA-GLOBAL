import {
  Hero,
  LogoBar,
  ProductSection,
  StatsBar,
  CTABanner,
} from "@/components/sections";

const ADVISORY_SERVICES = [
  {
    icon: "person_celebrate",
    title: "C-Level Advisory",
    description:
      "Strategic counsel for executives navigating complex decisions, transitions, and high-stakes opportunities.",
    href: "/services/c-level-advisory",
    gradient:
      "linear-gradient(135deg, rgba(238, 189, 43, 0.15), rgba(238, 189, 43, 0.05))",
  },
  {
    icon: "groups",
    title: "Leadership Development",
    description:
      "Build and optimize high-performing executive teams with proven methodologies and frameworks.",
    href: "/services/leadership-development",
    gradient:
      "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
  },
  {
    icon: "autorenew",
    title: "Change Advisory",
    description:
      "Navigate organizational transformation with strategic insight and operational excellence.",
    href: "/services/change-advisory",
    gradient:
      "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))",
  },
  {
    icon: "star",
    title: "Brand Strategy",
    description:
      "Position your personal and corporate brand for maximum impact and market differentiation.",
    href: "/services/personal-branding",
    gradient:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05))",
  },
  {
    icon: "handshake",
    title: "Deal Advisory",
    description:
      "Expert guidance through M&A transactions, negotiations, and strategic partnerships.",
    href: "/services/deal-advisory",
    gradient:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05))",
  },
  {
    icon: "policy",
    title: "Non-Market Strategy",
    description:
      "Navigate regulatory landscapes and political environments with precision and foresight.",
    href: "/services/non-market-strategy",
    gradient:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))",
  },
];

const INVESTMENT_AREAS = [
  {
    icon: "home_work",
    title: "Real Estate",
    description:
      "Prime residential and commercial opportunities in strategic global markets.",
    href: "/investment#real-estate",
    gradient:
      "linear-gradient(135deg, rgba(238, 189, 43, 0.15), rgba(238, 189, 43, 0.05))",
  },
  {
    icon: "trending_up",
    title: "Private Equity",
    description:
      "Direct investments in high-growth companies across diverse sectors.",
    href: "/investment#private-equity",
    gradient:
      "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
  },
  {
    icon: "diamond",
    title: "Luxury Assets",
    description:
      "Collectibles, art, and tangible investments with appreciation potential.",
    href: "/investment#luxury-assets",
    gradient:
      "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))",
  },
  {
    icon: "rocket_launch",
    title: "Venture Capital",
    description:
      "Early-stage investments in innovative companies shaping the future.",
    href: "/investment#venture-capital",
    gradient:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05))",
  },
];

const STATS = [
  {
    value: "$2.4B+",
    label: "Assets Advised",
    description: "Total value of transactions and portfolios advised",
  },
  {
    value: "147+",
    label: "Active Clients",
    description: "Executives and institutions served globally",
  },
  {
    value: "3",
    label: "Global Offices",
    description: "Strategic presence across key markets",
  },
  {
    value: "98%",
    label: "Success Rate",
    description: "Client satisfaction and retention",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        badge="Pre-Shift Strike"
        title="Strategic advisory where decisions"
        titleHighlight="take shape."
        description="Position before the shift. We provide strategic advisory and investment services for executives and institutions seeking asymmetric advantage."
        primaryCta={{ text: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ text: "Explore Services", href: "/services" }}
        showDashboard={true}
      />

      {/* Logo Bar */}
      <LogoBar />

      {/* Advisory Services Section */}
      <ProductSection
        badge="Advisory Services"
        title="Strategic counsel for"
        titleHighlight="critical moments"
        description="Our advisory practice serves C-level executives and boards navigating complex strategic decisions, organizational transformation, and high-stakes opportunities."
        products={ADVISORY_SERVICES}
        columns={3}
      />

      {/* Stats Section */}
      <StatsBar stats={STATS} variant="default" />

      {/* Investment Section */}
      <ProductSection
        badge="Investment"
        title="Opportunities across"
        titleHighlight="asset classes"
        description="Access exclusive investment opportunities in real estate, private equity, luxury assets, and venture capital through our global network."
        products={INVESTMENT_AREAS}
        columns={4}
      />

      {/* Insights Preview */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] mb-6">
                <span className="text-sm font-medium text-[var(--primary)]">
                  Insights
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Strategic perspectives
              </h2>
            </div>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-3 transition-all"
            >
              View all insights
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
            </a>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Strategy",
                title: "The Art of Pre-Shift Positioning",
                description:
                  "How leading organizations identify and capitalize on market shifts before they become apparent.",
                readTime: "8 min read",
              },
              {
                category: "Leadership",
                title: "Building Resilient Executive Teams",
                description:
                  "Key frameworks for developing leadership capability that thrives under pressure.",
                readTime: "6 min read",
              },
              {
                category: "Investment",
                title: "Alternative Assets in 2024",
                description:
                  "Emerging opportunities across real estate, private equity, and collectibles.",
                readTime: "10 min read",
              },
            ].map((insight, index) => (
              <a
                key={index}
                href="/insights"
                className="group bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6 transition-all hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="text-xs font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
                  {insight.category}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">
                    {insight.readTime}
                  </span>
                  <svg
                    className="w-5 h-5 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to position ahead?"
        description="Start a confidential conversation about your strategic objectives."
        primaryCta={{ text: "Get Started", href: "/contact" }}
        secondaryCta={{ text: "Learn About Us", href: "/about" }}
        variant="gradient"
      />
    </>
  );
}
