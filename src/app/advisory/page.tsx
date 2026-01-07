import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "Strategic advisory for people and companies operating where decisions take shape.",
};

const ADVISORY_SERVICES = [
  {
    title: "Strategic Advisory & Positioning",
    description:
      "Defining and refining strategic positioning where relevance, authority, and long-term advantage are built — beyond visibility or messaging.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    icon: "my_location",
  },
  {
    title: "C-Level & Executive Advisory",
    description:
      "Confidential counsel for founders, executives, and decision-makers operating under high stakes, public exposure, and institutional complexity.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    icon: "verified",
  },
  {
    title: "Personal & Corporate Affairs",
    description:
      "Strategic advisory on personal and corporate interests, aligning reputation, relationships, and positioning within decision-making environments.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    icon: "policy",
  },
  {
    title: "Non-Market Strategy",
    description:
      "Strategy beyond markets: institutions, regulation, public perception, and power dynamics that shape outcomes outside traditional competitive frameworks.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    icon: "account_balance",
  },
  {
    title: "Public Reputation & Consensus",
    description:
      "Building, protecting, and reinforcing reputational capital, legitimacy, and trust among key stakeholders — before consensus becomes public.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    icon: "handshake",
  },
  {
    title: "AI-Driven Strategic Intelligence",
    description:
      "Advanced intelligence systems applied to context analysis, scenario anticipation, and decision support across personal, corporate, and non-market environments.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    icon: "psychology",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Advisory
              </p>
              <h1 className="text-[var(--foreground)] text-4xl lg:text-5xl leading-tight">
                Strategic advisory
                <br />
                at decision level
              </h1>
            </div>
            <div className="lg:pt-12">
              <p className="text-[var(--foreground-muted)] leading-[1.9] mb-6">
                We advise at decision level, aligning strategy, reputation, and
                context. Our work spans Personal and Corporate Affairs,
                non-market dynamics, and financial decision-making.
              </p>
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                We help clients anticipate shifts, shape consensus, and act with
                clarity — before moves become public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
              Areas of Advisory
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ADVISORY_SERVICES.map((service, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[var(--surface)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[var(--surface)]/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--foreground)] text-xl">
                      {service.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-[var(--foreground)] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* How We Work Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                When Clients Engage Us
              </p>
              <h2 className="text-[var(--foreground)]">
                Context matters
                <br />
                as much as capital
              </h2>
            </div>
            <div className="lg:pt-8">
              <ul className="space-y-4 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>When visibility, access, and timing matter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>When influence is necessary</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>When decisions cannot be improvised</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>When context is as important as capital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Relationship Model */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Relationship Model
              </p>
              <h2 className="text-[var(--foreground)]">
                Mandate-based.
                <br />
                Bespoke. Confidential.
              </h2>
            </div>
            <div className="lg:pt-8 space-y-6">
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                Strategic advisory often leads to capital decisions. When
                appropriate, our work extends into HAKA Global Investment.
              </p>
              <p className="text-[var(--foreground)] leading-[1.9]">
                Not every conversation leads to engagement. But every engagement
                starts with the right conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Contact
              </p>
              <h2 className="text-[var(--foreground)]">
                Begin a conversation
              </h2>
            </div>
            <div className="lg:text-right">
              <Link
                href="mailto:info@hakaglobal.com"
                className="inline-flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--foreground-muted)] transition-colors group"
                tabIndex={0}
                aria-label="Send email to info@hakaglobal.com"
              >
                <span className="text-lg">info@hakaglobal.com</span>
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
      <footer className="py-12 border-t border-[var(--border)]">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <p className="text-xs text-[var(--foreground-muted)]">
              © {new Date().getFullYear()} HAKA Global. All rights reserved.
            </p>
            <p className="text-xs text-[var(--foreground-muted)]">
              Confidential by default.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
