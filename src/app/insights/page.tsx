import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
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
      <PageHeader
        subtitle="Perspectives"
        title="Strategic Insights"
        description="Context for decision-makers."
      />

      <InsightsGrid insights={insights} />
    </>
  );
}
