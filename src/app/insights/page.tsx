import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { getInsights } from "@/lib/actions/insights";
import { InsightsGrid } from "./InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Strategic perspectives on affairs, intelligence, and investment. Context and analysis for decision-makers.",
};

// Demo articles for initial display
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
  {
    id: "4",
    title: "Scarcity and Access: Investment-Grade Assets",
    slug: "scarcity-access-investment",
    excerpt:
      "Analyzing the market dynamics of luxury assets driven by scarcity, demand, and access. Why access defines value in collectible markets.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJS9hkR03JjBvCKU3EQEae7ROhxUgMrHEQXZe6Kl1XD3hjT8eQaBxYDlEJ_m4J8vYFpFSvBSOFU98jPdTuuFc-pjODHPhflEB4huFk8u7gk4rbeJ7VAuEVh4LNx8ORHLlPQPUOoth6JAlw2rOIJ97mFJbVszt4w7a9zh7_xKFgd98PLNEzjvKv7k22DzYoBHCvnJMWyOFlfYQxSDd9jgbYDulvCGbYv6MuuIAorzGulNWm3iTQl4iooz7PgkLE7WmPbUqdPOJHGjw",
    category: "investment",
    author: "HAKA Global",
    published: true,
    publishedAt: new Date("2024-11-20"),
    featured: false,
  },
  {
    id: "5",
    title: "AI as Strategic Leverage",
    slug: "ai-strategic-leverage",
    excerpt:
      "How AI-driven strategic intelligence enhances contextual analysis, maps complex environments, and supports higher-quality decisions at critical moments.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnxEkcjhjYkzHjwFSLLW7Q21i9AEgnDVvMNGGUvmQxyqweUJJz93duzjL5OF3GairMOe0uUzrdAriPyzx9k-xRMCxJkSTyid5Ivl7HA3rrZijT20XZTLGyxeSXGfnCW0LdG05csu_3cMbXdaMxwk8LRkVqkv7jsU7XOeS1Mzer6nzdTFCbtdya1N0MYu9Qmx4JyQT6UbnJgm3Sea5Da-shxnvY2uWo6diNoMrNwgvy6CLKBaw3zG0h-AcNX7hGlanLkzLzlcX7Smw",
    category: "intelligence",
    author: "HAKA Global",
    published: true,
    publishedAt: new Date("2024-11-15"),
    featured: false,
  },
  {
    id: "6",
    title: "Positioning Before the Shift",
    slug: "positioning-before-shift",
    excerpt:
      "Understanding Pre-Shift Strike: knowing when to move, where to stand, and who needs to be in the room — before the shift happens.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw",
    category: "strategy",
    author: "HAKA Global",
    published: true,
    publishedAt: new Date("2024-11-05"),
    featured: false,
  },
  {
    id: "7",
    title: "Reputational Capital in Complex Environments",
    slug: "reputational-capital",
    excerpt:
      "Building, protecting, and reinforcing legitimacy and trust among key stakeholders. Why reputation architecture precedes consensus.",
    content: "",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVntMkMHHMNY3TOWGwCKXSuE52G2u46LPYjVH0C4M1pZTArGVtIex0jPirzuJTZYUqDonXtfmpTicPq__1HwUSVGmCnCjmkZgEso-xHqY_LjCPvf5sUKH6wwkLRH1uuU60hPS966wOmSnX_P4AYMsjtY24A1BdI1wBNpbM6Z6KISYrUw1jAVCkv4B67uN3Lp1zo1ux2WgFz9aunSXm7z_Ta5IiY4wJ760oPnjn-5ulEdKUe9so-DISVdK9ua0Gbv8nlt8zLQzbO8",
    category: "affairs",
    author: "HAKA Global",
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
        subtitle="Perspectives"
        title="Strategic Insights"
        description="Context and analysis for decision-makers. Perspectives on affairs, intelligence, and investment."
      />

      <InsightsGrid insights={insights} />

      {/* CTA Section */}
      <section className="w-full flex justify-center py-20 bg-[var(--background)] border-t border-white/5">
        <div className="w-full max-w-3xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            Start a Conversation
          </p>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Discretion starts here.
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 font-light">
            HAKA engages selectively. If context, timing, and access are
            critical to your decisions, you may initiate a conversation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--primary)] text-[var(--background)] font-bold rounded-lg px-10 py-4 hover:bg-white transition-colors"
            tabIndex={0}
          >
            Initiate a Conversation
          </a>
        </div>
      </section>
    </>
  );
}
