import { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/sections";
import { MarketplaceGrid } from "./MarketplaceGrid";

export const metadata: Metadata = {
  title: "Marketplace | Luxury Assets & Collectibles",
  description:
    "Luxury goods treated as investment-grade assets, driven by scarcity, demand, and access. Sourcing, access, and resale of highly sought-after pieces.",
};

// Demo items for display
const demoItems = [
  {
    id: "1",
    title: "Patek Philippe Nautilus 5711",
    description:
      "Iconic luxury timepiece in white gold with blue dial. Mint condition with complete documentation.",
    category: "watches",
    imageUrl:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    price: 185000,
    featured: true,
    available: true,
  },
  {
    id: "2",
    title: "Hermès Birkin 25",
    description:
      "Rare Hermès Birkin 25 in Togo leather, Gold hardware. Full set with original receipt.",
    category: "luxury-assets",
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    price: 45000,
    featured: true,
    available: true,
  },
  {
    id: "3",
    title: "Audemars Piguet Royal Oak",
    description:
      "41mm Royal Oak Selfwinding in stainless steel. Blue dial, full set.",
    category: "watches",
    imageUrl:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
    price: 65000,
    featured: true,
    available: true,
  },
  {
    id: "4",
    title: "Cartier Panthère Necklace",
    description:
      "High jewelry collection piece with emeralds and onyx. Limited edition.",
    category: "jewelry",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    price: 425000,
    featured: false,
    available: true,
  },
  {
    id: "5",
    title: "Rolex Daytona 116500LN",
    description:
      "Ceramic bezel Daytona in stainless steel. White dial, unworn condition.",
    category: "watches",
    imageUrl:
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&q=80",
    price: 38000,
    featured: false,
    available: true,
  },
  {
    id: "6",
    title: "Chanel Classic Flap Medium",
    description:
      "Caviar leather in black with gold hardware. Excellent condition.",
    category: "luxury-assets",
    imageUrl:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    price: 12500,
    featured: false,
    available: true,
  },
];

export default function MarketplacePage() {
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
                "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
              transform: "translate(30%, -40%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(238, 189, 43, 0.3) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Marketplace
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Luxury assets &
              <br />
              <span className="gradient-text">collectibles.</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Investment-grade luxury goods driven by scarcity, demand, and
              access. Curated pieces available to qualified buyers through our
              global network.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {["All", "Watches", "Jewelry", "Handbags", "Art", "Collectibles"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    category === "All"
                      ? "bg-[var(--primary)] text-[var(--background)]"
                      : "text-[var(--text-secondary)] hover:text-white hover:bg-[var(--surface)]"
                  }`}
                  tabIndex={0}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Marketplace Grid */}
      <MarketplaceGrid items={demoItems} />

      {/* Consignment Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] mb-6">
                <span className="text-sm font-medium text-[var(--primary)]">
                  Consignment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Sell with HAKA
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Our consignment service provides discrete access to qualified
                buyers globally. We handle authentication, valuation, and
                transaction management for high-value pieces.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20"
                tabIndex={0}
              >
                Inquire About Consignment
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
                  icon: "verified",
                  title: "Authentication",
                  description:
                    "Every piece verified by industry experts before listing.",
                },
                {
                  icon: "security",
                  title: "Secure Transactions",
                  description:
                    "End-to-end secure handling and payment processing.",
                },
                {
                  icon: "public",
                  title: "Global Reach",
                  description:
                    "Access to qualified buyers across our international network.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 flex items-start gap-4 hover:border-[var(--border-hover)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary-muted)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--primary)] text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.description}
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
        title="Looking for something specific?"
        description="Our sourcing team can locate rare and sought-after pieces through our network."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
        secondaryCta={{ text: "View Investment", href: "/investment" }}
        variant="gradient"
      />
    </>
  );
}
