import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Luxury assets and collectibles sourced through exclusive access and strategic networks.",
};

const MARKETPLACE_CATEGORIES = [
  {
    title: "Fine Watches",
    description:
      "Sourcing and acquisition of investment-grade timepieces from Patek Philippe, Audemars Piguet, Rolex, and other highly selective maisons.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    icon: "watch",
  },
  {
    title: "Hermès & Luxury Leather",
    description:
      "Access to highly sought-after Hermès bags, accessories, and leather goods — including pieces typically unavailable through traditional channels.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    icon: "shopping_bag",
  },
  {
    title: "Fine Jewelry",
    description:
      "Exceptional pieces from Cartier, Van Cleef & Arpels, Bvlgari, and private collections, selected for rarity, provenance, and investment potential.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    icon: "diamond",
  },
  {
    title: "Private Aviation",
    description:
      "Strategic access to private jets, helicopters, and aviation assets through our network of owners, operators, and aviation specialists.",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    icon: "flight",
  },
  {
    title: "Classic Automobiles",
    description:
      "Sourcing and resale of collectible vehicles, from vintage Ferraris to limited-production modern classics, with focus on provenance and condition.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    icon: "directions_car",
  },
  {
    title: "Fine Art & Collectibles",
    description:
      "Access to private collections, emerging artists, and investment-grade works through our network of galleries, collectors, and advisors.",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80",
    icon: "palette",
  },
];

export default function MarketplacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Marketplace
              </p>
              <h1 className="text-[var(--foreground)] text-4xl lg:text-5xl leading-tight">
                Access defines value
              </h1>
            </div>
            <div className="lg:pt-12">
              <p className="text-[var(--foreground-muted)] leading-[1.9] mb-6">
                Luxury goods treated as investment-grade assets, driven by
                scarcity, demand, and access.
              </p>
              <p className="text-[var(--foreground-muted)] leading-[1.9]">
                We provide sourcing, access, and resale of highly sought-after
                and often inaccessible pieces — through private networks and
                proprietary intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* Categories Grid */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
              Categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {MARKETPLACE_CATEGORIES.map((category, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[var(--surface)]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[var(--surface)]/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--foreground)] text-xl">
                      {category.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-[var(--foreground)] mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {category.description}
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

      {/* Featured Maisons */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Maisons & Partners
              </p>
              <h2 className="text-[var(--foreground)]">
                Selective access to
                <br />
                exceptional pieces
              </h2>
            </div>
            <div className="lg:pt-8">
              <p className="text-[var(--foreground-muted)] leading-[1.9] mb-8">
                We work with highly selective brands and private sources,
                including:
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--foreground)]">
                <span>Patek Philippe</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Audemars Piguet</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Rolex</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Hermès</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Chanel</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Goyard</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Cartier</span>
                <span className="text-[var(--foreground-muted)]">·</span>
                <span>Van Cleef & Arpels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="divider" />
      </div>

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Process
              </p>
              <h2 className="text-[var(--foreground)]">
                Discretion and
                <br />
                selectivity
              </h2>
            </div>
            <div className="lg:pt-8">
              <ul className="space-y-4 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>Mandate-based sourcing or consignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>Private transactions, no public listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>Authentication and provenance verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--foreground)]">—</span>
                  <span>Confidential by default</span>
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

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-6">
                Inquiries
              </p>
              <h2 className="text-[var(--foreground)]">
                Source or consign
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
