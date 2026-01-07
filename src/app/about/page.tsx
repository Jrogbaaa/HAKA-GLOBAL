import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "HAKA Global operates where decisions take shape — before they become public.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                About HAKA
              </p>
              <h1 className="text-[var(--foreground)] text-4xl lg:text-5xl leading-tight mb-6">
                Anticipation · Affairs · Influence
              </h1>
            </div>
            <div className="lg:pt-10">
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                HAKA operates where decisions take shape — before they become
                public or formalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* What We Do Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                What We Do
              </p>
              <h2 className="text-[var(--foreground)]">
                Personal &<br />
                Corporate Affairs
              </h2>
            </div>
            <div className="lg:pt-8 space-y-6">
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                We work within complex personal, corporate, and institutional
                environments, supporting individuals and organizations whose
                outcomes depend on context, alignment, and timing — not only on
                market dynamics.
              </p>
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                Our activity sits within Personal and Corporate Affairs: the
                management of positioning, relationships, and credibility in
                environments where power, interests, and perception converge.
              </p>
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                We help navigate groups of influence, shape alignment among key
                actors, and build consensus before positions harden. Influence,
                for us, is not pressure — it is strategic alignment achieved
                early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Anticipation Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Our Advantage
              </p>
              <h2 className="text-[var(--foreground)]">
                Anticipation defines
                <br />
                our advantage
              </h2>
            </div>
            <div className="lg:pt-8 space-y-6">
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                By combining contextual judgment with AI-driven strategic
                intelligence, we analyze decision-making environments, identify
                early signals, and anticipate scenarios before they become
                visible.
              </p>
              <p className="text-[var(--foreground)] leading-[1.9]">
                This allows our clients to move:
              </p>
              <ul className="space-y-3 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>before narratives settle,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>before consensus becomes public,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>before the shift occurs.</span>
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

      {/* Principle Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-8">
              Principle
            </p>
            <blockquote className="font-serif text-2xl lg:text-3xl text-[var(--foreground)] leading-snug italic mb-8">
              "Pre-Shift Strike is not a slogan. It is knowing when to move,
              where to stand, and who needs to be in the room — before the shift
              happens."
            </blockquote>
            <p className="text-sm text-[var(--foreground-muted)]">
              Pre-Shift Strike is how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* How We Work */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
              How We Work
            </p>
            <h2 className="text-[var(--foreground)]">Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="text-lg font-serif text-[var(--foreground)] mb-3">
                Selectivity
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                We work selectively. HAKA does not seek visibility. We operate
                where relevance is decided.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-[var(--foreground)] mb-3">
                Discretion
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                We operate with discretion. Confidential by default. Our work
                and our clients remain private.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-[var(--foreground)] mb-3">
                Judgment
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                We prioritize judgment over process. Advisory is not execution
                support — it is strategic clarity under complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Contact
              </p>
              <h2 className="text-[var(--foreground)]">Begin a conversation</h2>
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
