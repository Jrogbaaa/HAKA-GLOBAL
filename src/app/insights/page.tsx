import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { getInsights } from "@/lib/actions/insights";
import { InsightsGrid } from "./InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert perspectives on wealth management, global markets, lifestyle, and strategic positioning from Haka Global advisors.",
};

// Demo articles for initial display
const demoInsights = [
  {
    id: "1",
    title: "The Art of Strategic Positioning in Global Markets",
    slug: "strategic-positioning-global-markets",
    excerpt:
      "How high-net-worth individuals are leveraging market volatility to build diversified portfolios across emerging and established economies.",
    content: "",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "strategy",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-12-15"),
  },
  {
    id: "2",
    title: "Real Estate Opportunities in Monaco and Dubai",
    slug: "real-estate-monaco-dubai",
    excerpt:
      "Exploring the shifting dynamics of ultra-luxury property markets in the world's most prestigious destinations.",
    content: "",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    category: "market-trends",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-12-01"),
  },
  {
    id: "3",
    title: "Building Influence: The Modern Executive Brand",
    slug: "building-influence-executive-brand",
    excerpt:
      "Why personal branding has become essential for C-suite executives and how to cultivate authentic authority.",
    content: "",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    category: "lifestyle",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-11-20"),
  },
  {
    id: "4",
    title: "Alternative Investments: Beyond Traditional Assets",
    slug: "alternative-investments-beyond-traditional",
    excerpt:
      "From rare collectibles to private equity, understanding the evolving landscape of wealth preservation.",
    content: "",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    category: "investments",
    author: "Haka Global",
    published: true,
    publishedAt: new Date("2024-11-05"),
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
      }));
    }
  } catch {
    // Use demo insights on error
  }

  return (
    <>
      <Hero
        subtitle="Thought Leadership"
        title="Insights"
        description="Expert perspectives on wealth, influence, and opportunity from our global advisory team."
      />

      <InsightsGrid insights={insights} />
    </>
  );
}

