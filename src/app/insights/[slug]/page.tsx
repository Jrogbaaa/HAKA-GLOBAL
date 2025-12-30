import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsightBySlug } from "@/lib/actions/insights";
import { InsightDetail } from "./InsightDetail";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

// Demo insights for development
const demoInsights: Record<string, {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string | null;
  category: string;
  author: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}> = {
  "strategic-positioning-global-markets": {
    id: "1",
    title: "The Art of Strategic Positioning in Global Markets",
    slug: "strategic-positioning-global-markets",
    excerpt:
      "How high-net-worth individuals are leveraging market volatility to build diversified portfolios across emerging and established economies.",
    createdAt: new Date("2024-12-15"),
    updatedAt: new Date("2024-12-15"),
    published: true,
    content: `
## Understanding the Current Landscape

The global financial landscape has undergone a remarkable transformation over the past decade. High-net-worth individuals are increasingly recognizing that traditional investment approaches no longer suffice in an era of unprecedented market volatility and geopolitical uncertainty.

## The Multi-Asset Approach

Sophisticated investors are now adopting multi-asset strategies that span across:

- **Developed Markets**: Stable returns with established regulatory frameworks
- **Emerging Markets**: Higher growth potential with calculated risk exposure
- **Alternative Assets**: Real estate, private equity, and collectibles for diversification

## Key Considerations

When positioning your portfolio for global markets, consider these essential factors:

1. **Currency Exposure**: Understanding and managing forex risk
2. **Regulatory Environment**: Navigating different jurisdictions
3. **Timing and Entry Points**: Identifying optimal market conditions
4. **Exit Strategies**: Planning for liquidity needs

## The Haka Global Perspective

At Haka Global, we believe that strategic positioning is not merely about asset allocation—it's about understanding the interconnected nature of global markets and anticipating shifts before they occur.

Our advisors bring decades of experience in identifying opportunities that remain invisible to conventional analysis. Whether you're looking to expand into new markets or optimize your existing portfolio, we provide the insight and access you need.

## Looking Forward

The coming years will present both challenges and opportunities for global investors. Those who position themselves strategically today will be best placed to capitalize on tomorrow's markets.
    `,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "strategy",
    author: "Haka Global",
    publishedAt: new Date("2024-12-15"),
  },
  "real-estate-monaco-dubai": {
    id: "2",
    title: "Real Estate Opportunities in Monaco and Dubai",
    slug: "real-estate-monaco-dubai",
    excerpt:
      "Exploring the shifting dynamics of ultra-luxury property markets in the world's most prestigious destinations.",
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2024-12-01"),
    published: true,
    content: `
## The Premium Property Paradox

In an age of digital assets and virtual experiences, physical real estate in prime locations continues to command extraordinary premiums. Monaco and Dubai represent the pinnacle of this phenomenon—markets where exclusivity, lifestyle, and investment potential converge.

## Monaco: The Enduring Appeal

Monaco's property market remains one of the most expensive per square meter globally. Key factors driving demand include:

- **Tax Efficiency**: Favorable fiscal environment for residents
- **Security**: One of the world's safest jurisdictions
- **Lifestyle**: Mediterranean climate and world-class amenities
- **Scarcity**: Limited land means perpetual supply constraints

## Dubai: The Rising Star

Dubai has transformed from a regional hub to a global luxury destination. Current opportunities include:

- **Vision 2040**: Ambitious development plans creating new premium zones
- **Golden Visa**: Long-term residency options for property investors
- **Infrastructure**: World-leading connectivity and services
- **Tax-Free**: No property or income taxes

## Investment Considerations

When evaluating opportunities in these markets, consider:

1. **Entry Costs**: Beyond purchase price, factor in fees and taxes
2. **Rental Yields**: Understanding realistic return expectations
3. **Currency Dynamics**: USD-pegged dirham vs. EUR-linked Monaco
4. **Exit Liquidity**: Time to sale and buyer pool depth

## Our Approach

Haka Global maintains exclusive relationships with developers and private sellers in both markets. We provide our clients with access to off-market opportunities and conduct thorough due diligence on every transaction.
    `,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    category: "market-trends",
    author: "Haka Global",
    publishedAt: new Date("2024-12-01"),
  },
  "building-influence-executive-brand": {
    id: "3",
    title: "Building Influence: The Modern Executive Brand",
    slug: "building-influence-executive-brand",
    excerpt:
      "Why personal branding has become essential for C-suite executives and how to cultivate authentic authority.",
    createdAt: new Date("2024-11-20"),
    updatedAt: new Date("2024-11-20"),
    published: true,
    content: `
## The Evolution of Executive Presence

The traditional notion of executive presence—commanding a boardroom through physical authority alone—has given way to a more nuanced reality. Today's most influential leaders understand that their personal brand extends far beyond the office walls.

## Why Personal Branding Matters

In an interconnected world, your reputation precedes you:

- **Talent Attraction**: Top performers seek inspiring leaders
- **Business Development**: Clients invest in people, not just companies
- **Board Opportunities**: Visibility leads to strategic invitations
- **Legacy Building**: Shaping how you'll be remembered

## The Pillars of Executive Branding

### 1. Authentic Narrative
Your story must be genuine. Audiences detect inauthenticity instantly. The goal is not to create a persona, but to strategically communicate your authentic self.

### 2. Thought Leadership
Consistently sharing valuable insights positions you as an authority. This might include:
- Speaking engagements at industry events
- Published articles and whitepapers
- Podcast appearances
- Social media presence

### 3. Visual Identity
From professional photography to consistent styling, visual elements reinforce your brand.

### 4. Media Relations
Strategic media engagement amplifies your message to the right audiences.

## The Haka Global Methodology

We work with executives to develop comprehensive personal branding strategies that align with their professional goals and personal values. Our approach is discreet, sophisticated, and results-driven.

Every engagement begins with deep discovery—understanding not just what you do, but who you are and what legacy you wish to leave.
    `,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    category: "lifestyle",
    author: "Haka Global",
    publishedAt: new Date("2024-11-20"),
  },
};

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const result = await getInsightBySlug(slug);
  const dbInsight = result.success ? result.data : null;
  const insight = dbInsight || demoInsights[slug];

  if (!insight) {
    return { title: "Article Not Found" };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  
  const result = await getInsightBySlug(slug);
  const dbInsight = result.success ? result.data : null;
  const demoInsight = demoInsights[slug];
  
  const insight = dbInsight || demoInsight;

  if (!insight) {
    notFound();
  }

  const formattedInsight = {
    id: insight.id,
    title: insight.title,
    slug: insight.slug,
    excerpt: insight.excerpt,
    content: insight.content,
    imageUrl: insight.imageUrl || "",
    category: insight.category,
    author: insight.author,
    publishedAt: insight.publishedAt || new Date(),
  };

  return <InsightDetail insight={formattedInsight} />;
}

