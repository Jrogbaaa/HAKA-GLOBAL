import { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/sections";
import { getInsights } from "@/lib/actions/insights";
import { InsightsGrid } from "./InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Strategic perspectives on affairs, intelligence, and investment. Context and analysis for decision-makers.",
};

// Demo articles for fallback display
const demoInsights = [
  {
    id: "1",
    title: "Anticipation as Strategic Advantage",
    slug: "anticipation-strategic-advantage",
    excerpt:
      "How contextual intelligence and early signal detection reshape decision-making in complex environments. The difference between reacting and positioning.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw",
    category: "intelligence",
    author: "HAKA Global",
    published: true,
    publishedAt: new Date("2024-12-15"),
    featured: true,
  },
  {
    id: "2",
    title: "The Architecture of Influence",
    slug: "architecture-of-influence",
    excerpt:
      "Influence is not pressure — it is strategic alignment achieved early. Understanding the dynamics of consensus-building before positions harden.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVntMkMHHMNY3TOWGwCKXSuE52G2u46LPYjVH0C4M1pZTArGVtIex0jPirzuJTZYUqDonXtfmpTicPq__1HwUSVGmCnCjmkZgEso-xHqY_LjCPvf5sUKH6wwkLRH1uuU60hPS966wOmSnX_P4AYMsjtY24A1BdI1wBNpbM6Z6KISYrUw1jAVCkv4B67uN3Lp1zo1ux2WgFz9aunSXm7z_Ta5IiY4wJ760oPnjn-5ulEdKUe9so-DISVdK9ua0Gbv8nlt8zLQzbO8",
    category: "affairs",
    author: "HAKA Global",
    published: true,
    publishedAt: new Date("2024-12-10"),
    featured: false,
  },
  {
    id: "3",
    title: "Non-Market Strategy: Beyond Traditional Frameworks",
    slug: "non-market-strategy",
    excerpt:
      "Exploring strategy beyond markets: institutions, regulation, public perception, and power dynamics that shape outcomes outside competitive frameworks.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAADPByCw6acvB4Qx5xtuFP-dvN7EeIHq1yyOgTalG6yY23KYZkHv8vBGQkwoXgzDtlRZnVIkoSya0bEKYEAjeyWPb9wp-SdHYBQ9OdR8zDbUZzrdkEyACzgzwuXVgt0JkqItX8Yoy6bwD-X7Qz0KQ3IERuM1m7lwpS8-Rx4tow_b-u6qyNd5LPEkq-jqsEWjw2qiT29atsJ4klKzwkSlHuug6th6viuYBHyqJax6Ii8D2PCH_yDZtYbr11Xf_Ar49Ya4OBDqtzrgE",
    category: "strategy",
    author: "HAKA Global",
    published: true,
    publishedAt: new Date("2024-12-01"),
    featured: false,
  },
];

export default async function InsightsPage() {
  // Try to fetch from database, fallback to demo insights
  let insights = demoInsights;

  try {
    const result = await getInsights();
    if (result.success && result.data && result.data.length > 0) {
      insights = result.data.map((insight) => ({
        id: insight.id,
        title: insight.title,
        slug: insight.slug,
        excerpt: insight.excerpt,
        content: insight.content,
        imageUrl: insight.imageUrl || "",
        category: insight.category,
        author: insight.author,
        published: insight.published,
        publishedAt: insight.publishedAt || new Date(),
        featured: false,
      }));
    }
  } catch {
    // Use demo insights on error - graceful fallback
  }

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
                "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              transform: "translate(20%, -30%)",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Insights
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Strategic
              <br />
              <span className="gradient-text">perspectives.</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Context and analysis for decision-makers. Perspectives on affairs,
              intelligence, investment, and the dynamics that shape outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {["All", "Strategy", "Intelligence", "Affairs", "Investment"].map(
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

      {/* Insights Grid */}
      <InsightsGrid insights={insights} />

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay informed
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Receive our latest insights and perspectives directly.
              Discrete, infrequent, valuable.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors whitespace-nowrap"
                tabIndex={0}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Need strategic counsel?"
        description="Our advisory team provides context and guidance for complex decisions."
        primaryCta={{ text: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
        variant="minimal"
      />
    </>
  );
}
