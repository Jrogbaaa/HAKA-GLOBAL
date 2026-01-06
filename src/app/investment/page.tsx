import { Metadata } from "next";
import Link from "next/link";
import { INVESTMENT_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "HAKA Global Investment operates where information asymmetry, scarcity, and strategic access generate long-term value.",
};

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 22, 17, 0.7) 0%, rgba(24, 22, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw")`,
          }}
          role="img"
          aria-label="Golden topographic map symbolizing wealth growth"
        />
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
            HAKA Global Investment
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-black font-serif leading-tight tracking-tight">
            Strategic Investments
          </h1>
          <h2 className="text-[var(--text-secondary)] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Shaped by access, timing, and conviction.
          </h2>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                Overview
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
                Capital Follows Insight
              </h2>
            </div>
            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p>
                HAKA Global Investment operates where information asymmetry,
                scarcity, and strategic access generate long-term value.
              </p>
              <p>
                Our activity is selective and opportunity-driven, often emerging
                from insights developed within HAKA Global Consulting.
              </p>
              <p className="text-white font-medium">
                We deploy capital where anticipation creates advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              Investment Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
              Conviction Over Volume
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
              We do not chase trends. We position capital before they form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--background)] border border-white/10">
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                Contextual Intelligence
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Our approach combines deep contextual understanding with
                disciplined analysis.
              </p>
            </div>
            <div className="p-8 bg-[var(--background)] border border-white/10">
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                Disciplined Risk
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Rigorous assessment ensures capital is deployed with clarity and
                conviction.
              </p>
            </div>
            <div className="p-8 bg-[var(--background)] border border-white/10">
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                Non-Obvious Access
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Opportunities sourced through proprietary networks and strategic
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              Investment Areas
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
              Where We Deploy Capital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INVESTMENT_AREAS.map((area, index) => (
              <div
                key={area.id}
                className="group p-8 lg:p-10 bg-[var(--surface)] border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300"
              >
                {/* Number */}
                <span className="font-serif text-5xl font-bold text-[var(--primary)]/20 mb-6 block">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--primary)]/10 mb-6">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    {area.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors mb-4">
                  {area.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {area.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                    >
                      <span className="text-[var(--primary)]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence & Timing */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                Intelligence & Timing
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
                Insight Comes Before Opportunity
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Investment decisions are supported by AI-driven strategic
                intelligence, applied to context analysis, scenario
                anticipation, and decision support across market and non-market
                environments.
              </p>
              <p className="text-white font-medium">Pre-Shift Strike.</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border-l-2 border-[var(--primary)]/30">
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  Direct investments or mandate-based
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Flexible structures aligned with opportunity and client needs.
                </p>
              </div>
              <div className="p-6 border-l-2 border-[var(--primary)]/30">
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  No open vehicles
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Selective capital deployment, not mass market exposure.
                </p>
              </div>
              <div className="p-6 border-l-2 border-[var(--primary)]/30">
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  Discretion and selectivity
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Fundamental to how we operate and who we work with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
            Start a Conversation
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Discretion starts here.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
            HAKA engages selectively. If context, timing, and access are
            critical to your decisions, you may initiate a conversation.
          </p>
          <Link href="/contact" tabIndex={0}>
            <button
              className="rounded-lg bg-[var(--primary)] px-10 py-4 font-bold text-[var(--background)] transition-colors hover:bg-white"
              tabIndex={-1}
              aria-label="Initiate a Conversation"
            >
              Initiate a Conversation
            </button>
          </Link>
          <p className="mt-8 text-sm text-[var(--text-muted)] italic">
            Not every conversation leads to engagement. But every engagement
            starts with the right conversation.
          </p>
        </div>
      </section>
    </>
  );
}

