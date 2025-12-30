import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { getInsights } from "@/lib/actions/insights";
import { InsightsGrid } from "./InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Strategic insights - Curated intelligence on wealth, reputation, and luxury living. Perspectives for the modern leader.",
};

// Demo articles for initial display
const demoInsights = [
  {
    id: "1",
    title: "Navigating Volatility: The 2024 Wealth Outlook",
    slug: "navigating-volatility-2024",
    excerpt:
      "In an era of shifting geopolitical tides and economic uncertainty, traditional asset allocation is no longer sufficient. We explore the strategies defining the next decade of wealth preservation and growth for ultra-high-net-worth portfolios.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw",
    category: "investments",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-12-15"),
    featured: true,
  },
  {
    id: "2",
    title: "The Architecture of Influence",
    slug: "architecture-of-influence",
    excerpt:
      "Why executive presence is your most valuable intangible asset. We breakdown the core pillars of constructing a resilient personal brand in the digital age.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVntMkMHHMNY3TOWGwCKXSuE52G2u46LPYjVH0C4M1pZTArGVtIex0jPirzuJTZYUqDonXtfmpTicPq__1HwUSVGmCnCjmkZgEso-xHqY_LjCPvf5sUKH6wwkLRH1uuU60hPS966wOmSnX_P4AYMsjtY24A1BdI1wBNpbM6Z6KISYrUw1jAVCkv4B67uN3Lp1zo1ux2WgFz9aunSXm7z_Ta5IiY4wJ760oPnjn-5ulEdKUe9so-DISVdK9ua0Gbv8nlt8zLQzbO8",
    category: "strategy",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-12-10"),
    featured: false,
  },
  {
    id: "3",
    title: "Beyond the Penthouse",
    slug: "beyond-the-penthouse",
    excerpt:
      "Exploring the rising trend of private islands and secluded estates. Privacy is the new ultimate luxury for the global elite seeking sanctuary.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAADPByCw6acvB4Qx5xtuFP-dvN7EeIHq1yyOgTalG6yY23KYZkHv8vBGQkwoXgzDtlRZnVIkoSya0bEKYEAjeyWPb9wp-SdHYBQ9OdR8zDbUZzrdkEyACzgzwuXVgt0JkqItX8Yoy6bwD-X7Qz0KQ3IERuM1m7lwpS8-Rx4tow_b-u6qyNd5LPEkq-jqsEWjw2qiT29atsJ4klKzwkSlHuug6th6viuYBHyqJax6Ii8D2PCH_yDZtYbr11Xf_Ar49Ya4OBDqtzrgE",
    category: "market-trends",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-12-01"),
    featured: false,
  },
  {
    id: "4",
    title: "Vintage Complications: An Investment Class",
    slug: "vintage-complications",
    excerpt:
      "Analyzing the market performance of rare independent horology versus blue-chip brands over the last five years.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJS9hkR03JjBvCKU3EQEae7ROhxUgMrHEQXZe6Kl1XD3hjT8eQaBxYDlEJ_m4J8vYFpFSvBSOFU98jPdTuuFc-pjODHPhflEB4huFk8u7gk4rbeJ7VAuEVh4LNx8ORHLlPQPUOoth6JAlw2rOIJ97mFJbVszt4w7a9zh7_xKFgd98PLNEzjvKv7k22DzYoBHCvnJMWyOFlfYQxSDd9jgbYDulvCGbYv6MuuIAorzGulNWm3iTQl4iooz7PgkLE7WmPbUqdPOJHGjw",
    category: "lifestyle",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-11-20"),
    featured: false,
  },
  {
    id: "5",
    title: "The Psychology of Legacy",
    slug: "psychology-of-legacy",
    excerpt:
      "Preparing the next generation for wealth stewardship involves more than financial literacy—it requires a transfer of values and vision.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnxEkcjhjYkzHjwFSLLW7Q21i9AEgnDVvMNGGUvmQxyqweUJJz93duzjL5OF3GairMOe0uUzrdAriPyzx9k-xRMCxJkSTyid5Ivl7HA3rrZijT20XZTLGyxeSXGfnCW0LdG05csu_3cMbXdaMxwk8LRkVqkv7jsU7XOeS1Mzer6nzdTFCbtdya1N0MYu9Qmx4JyQT6UbnJgm3Sea5Da-shxnvY2uWo6diNoMrNwgvy6CLKBaw3zG0h-AcNX7hGlanLkzLzlcX7Smw",
    category: "investments",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-11-15"),
    featured: false,
  },
  {
    id: "6",
    title: "Digital Assets in the Luxury Sphere",
    slug: "digital-assets-luxury",
    excerpt:
      "How blockchain technology is revolutionizing provenance in fine art and luxury collectibles, ensuring authenticity and value.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw",
    category: "market-trends",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-11-05"),
    featured: false,
  },
  {
    id: "7",
    title: "Crisis Management for Public Figures",
    slug: "crisis-management-public-figures",
    excerpt:
      "Strategic responses to public challenges. Why speed, transparency, and a pre-built reservoir of goodwill are your best defenses.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVntMkMHHMNY3TOWGwCKXSuE52G2u46LPYjVH0C4M1pZTArGVtIex0jPirzuJTZYUqDonXtfmpTicPq__1HwUSVGmCnCjmkZgEso-xHqY_LjCPvf5sUKH6wwkLRH1uuU60hPS966wOmSnX_P4AYMsjtY24A1BdI1wBNpbM6Z6KISYrUw1jAVCkv4B67uN3Lp1zo1ux2WgFz9aunSXm7z_Ta5IiY4wJ760oPnjn-5ulEdKUe9so-DISVdK9ua0Gbv8nlt8zLQzbO8",
    category: "strategy",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-10-28"),
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
    // Use demo insights on error
  }

  return (
    <>
      <PageHeader
        subtitle="The Journal"
        title="Strategic Insights"
        description="Curated intelligence on wealth, reputation, and luxury living. Perspectives for the modern leader."
      />

      <InsightsGrid insights={insights} />

      {/* Newsletter Section */}
      <section className="w-full flex justify-center py-20 bg-[var(--background)] border-t border-white/5">
        <div className="w-full max-w-3xl px-6 text-center">
          <span className="material-symbols-outlined text-4xl text-[var(--primary)] mb-4">
            mail
          </span>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Subscribe to Haka Weekly
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 font-light">
            Join our exclusive list to receive hand-picked insights on wealth,
            property, and branding directly to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-[var(--surface)] border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
              aria-label="Email address"
              tabIndex={0}
            />
            <button
              type="button"
              className="bg-[var(--primary)] text-[var(--background)] font-bold rounded-full px-8 py-3 hover:bg-white transition-colors uppercase tracking-wide text-sm"
              tabIndex={0}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
