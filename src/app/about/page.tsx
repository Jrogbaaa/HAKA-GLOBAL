import { Metadata } from "next";
import Link from "next/link";
import { CTABanner, StatsBar } from "@/components/sections";

export const metadata: Metadata = {
  title: "About HAKA",
  description:
    "HAKA operates where decisions take shape, before they become public. Strategic advisory and investment.",
};

const VALUES = [
  {
    icon: "visibility",
    title: "Anticipation",
    description:
      "We identify inflection points before they materialize, giving our clients the time to position strategically.",
  },
  {
    icon: "groups",
    title: "Affairs",
    description:
      "Deep relationships across industries, institutions, and geographies provide unmatched access to information and influence.",
  },
  {
    icon: "psychology",
    title: "Influence",
    description:
      "Influence is not pressure — it is strategic alignment achieved early, before positions harden.",
  },
  {
    icon: "bolt",
    title: "Pre-Shift Strike",
    description:
      "Position before the shift. Our methodology for capturing asymmetric opportunities before they become consensus.",
  },
];

const STATS = [
  { value: "2017", label: "Founded", description: "Years of trusted partnership" },
  {
    value: "3",
    label: "Global Offices",
    description: "London, Dubai, Singapore",
  },
  { value: "147+", label: "Active Clients", description: "Executives and institutions" },
  { value: "$2.4B+", label: "Assets Advised", description: "Total transaction value" },
];

const TEAM = [
  {
    name: "Executive Team",
    description:
      "Our leadership brings decades of experience from top-tier consulting, investment banking, and corporate boardrooms.",
  },
  {
    name: "Advisory Network",
    description:
      "Former CEOs, board members, and policy makers provide contextual intelligence across sectors.",
  },
  {
    name: "Operations",
    description:
      "Discrete, professional support ensuring seamless execution of complex engagements.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                About HAKA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Where decisions
              <br />
              <span className="gradient-text">take shape.</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              We operate before decisions become public. HAKA Global provides
              strategic advisory and investment services for executives and
              institutions seeking asymmetric advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              How we create advantage
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Our methodology combines contextual intelligence, relationship
              capital, and strategic foresight to create lasting advantage for
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={index}
                className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--primary-muted)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={STATS} variant="default" />

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Expertise at every level
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Our team combines operational experience with advisory excellence,
              ensuring practical, implementable strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((team, index) => (
              <div
                key={index}
                className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--border-hover)] transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {team.name}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
                <span className="text-sm font-medium text-[var(--primary)]">
                  Global Presence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Strategic locations across key markets
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Our offices in London, Dubai, and Singapore provide coverage
                across major financial centers and emerging markets, ensuring
                proximity to opportunity.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-3 transition-all"
              >
                Contact an office
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

            <div className="grid grid-cols-1 gap-4">
              {[
                { city: "London", region: "EMEA HQ", timezone: "GMT" },
                { city: "Dubai", region: "Middle East", timezone: "GMT+4" },
                { city: "Singapore", region: "Asia Pacific", timezone: "GMT+8" },
              ].map((office, index) => (
                <div
                  key={index}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex items-center justify-between hover:border-[var(--border-hover)] transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {office.city}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {office.region}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[var(--text-muted)]">
                      {office.timezone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Start a conversation"
        description="Discuss your strategic objectives with our team."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
        variant="gradient"
      />
    </>
  );
}
