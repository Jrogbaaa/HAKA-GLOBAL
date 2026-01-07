import Link from "next/link";

const SERVICE_CARDS = [
  {
    title: "Personal Branding",
    description:
      "Curating the narrative of the world's most influential leaders and visionaries.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    icon: "campaign",
    href: "/advisory",
  },
  {
    title: "Global Real Estate",
    description:
      "Acquisition, management, and development of prime global assets.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    icon: "domain",
    href: "/investment",
  },
  {
    title: "Strategic Advisory",
    description:
      "Strategic counsel for executives navigating complex decisions and transitions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    icon: "insights",
    href: "/advisory",
  },
  {
    title: "Luxury Marketplace",
    description:
      "Sourcing the unobtainable for the discerning few. From art to aviation.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    icon: "diamond",
    href: "/marketplace",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[65vh] flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[var(--foreground)] leading-[0.95] mb-8">
                Pre-Shift
                <br />
                Strike.
              </h1>
            </div>
            <div className="lg:pl-12">
              <p className="text-lg lg:text-xl text-[var(--foreground-muted)] leading-relaxed">
                Strategic advisory and investment for people and companies
                operating where decisions take shape — before they become
                public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_CARDS.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="group block"
                tabIndex={0}
                aria-label={`Learn more about ${card.title}`}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-[var(--surface)]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[var(--surface)]/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--foreground)] text-xl">
                      {card.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-serif text-[var(--foreground)] mb-2 group-hover:text-[var(--foreground-muted)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Philosophy Brief */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Philosophy
              </p>
              <blockquote className="font-serif text-2xl lg:text-3xl text-[var(--foreground)] leading-snug italic">
                "Knowing when to move, where to stand, and who needs to be in
                the room — before the shift happens."
              </blockquote>
            </div>
            <div className="lg:pt-10 space-y-6">
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                We read context, influence outcomes, and position people and
                companies where it matters most. Strategy, reputation, and
                capital move together.
              </p>
              <p className="text-[var(--foreground)] leading-relaxed">
                We advise with clarity. We invest with conviction. We act with
                access.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--foreground-muted)] transition-colors group"
                tabIndex={0}
              >
                <span>Learn about our approach</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Contact
              </p>
              <h2 className="text-[var(--foreground)] mb-4">
                Start a Conversation
              </h2>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Discretion starts here. HAKA engages selectively. If context,
                timing, and access are critical to your decisions, you may
                initiate a conversation.
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--foreground-muted)] mb-2">
                    Madrid
                  </p>
                  <p className="text-sm text-[var(--foreground)]">
                    Calle Hermosilla 7
                    <br />
                    28001
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--foreground-muted)] mb-2">
                    Barcelona
                  </p>
                  <p className="text-sm text-[var(--foreground)]">
                    C/ Sant Gervasi
                    <br />
                    de Cassoles, 59
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--foreground-muted)] mb-2">
                    Rome
                  </p>
                  <p className="text-sm text-[var(--foreground)]">
                    Via Tripoli 5<br />
                    00199
                  </p>
                </div>
              </div>
              <div>
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
