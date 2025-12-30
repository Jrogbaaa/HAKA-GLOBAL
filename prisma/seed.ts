import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Seed Marketplace Items
  const marketplaceItems = [
    {
      title: "Patek Philippe Nautilus 5711",
      description:
        "Iconic luxury timepiece in white gold with blue dial. Mint condition with complete documentation. This exceptional example of horological excellence features the legendary caliber 26-330 S C movement.",
      category: "watches",
      imageUrl:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
      price: 185000,
      featured: true,
    },
    {
      title: "Bentley Continental GT",
      description:
        "2024 model in Beluga Black with Mulliner specification. Under 1,000 miles. 6.0L W12 engine producing 650 horsepower with hand-stitched leather interior.",
      category: "vehicles",
      imageUrl:
        "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
      price: 245000,
      featured: true,
    },
    {
      title: "Monaco Penthouse",
      description:
        "Exceptional penthouse with panoramic Mediterranean views. Prime location in Fontvieille. 450 sqm residence with 4 bedrooms and private terrace.",
      category: "property",
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      price: null,
      featured: true,
    },
    {
      title: "Basquiat Original Work",
      description:
        "Authenticated 1983 mixed media on canvas. Provenance documentation included. A rare opportunity to acquire museum-quality contemporary art.",
      category: "art",
      imageUrl:
        "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
      price: null,
      featured: false,
    },
    {
      title: "Cartier Panthère Necklace",
      description:
        "High jewelry collection piece with emeralds and onyx. Limited edition from the Maison. Certificate of authenticity included.",
      category: "jewelry",
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      price: 425000,
      featured: false,
    },
    {
      title: "Private Yacht Charter",
      description:
        "7-day Mediterranean experience aboard 60m superyacht. All-inclusive luxury service with professional crew. Customizable itinerary.",
      category: "experiences",
      imageUrl:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      price: 175000,
      featured: false,
    },
  ];

  for (const item of marketplaceItems) {
    await prisma.marketplaceItem.create({
      data: item,
    });
  }
  console.log(`✅ Created ${marketplaceItems.length} marketplace items`);

  // Seed Insights
  const insights = [
    {
      title: "The Art of Strategic Positioning in Global Markets",
      slug: "strategic-positioning-global-markets",
      excerpt:
        "How high-net-worth individuals are leveraging market volatility to build diversified portfolios across emerging and established economies.",
      content: `## Understanding the Current Landscape

The global financial landscape has undergone a remarkable transformation over the past decade. High-net-worth individuals are increasingly recognizing that traditional investment approaches no longer suffice in an era of unprecedented market volatility and geopolitical uncertainty.

## The Multi-Asset Approach

Sophisticated investors are now adopting multi-asset strategies that span across developed markets for stability, emerging markets for growth potential, and alternative assets for diversification.

## Key Considerations

When positioning your portfolio for global markets, consider currency exposure, regulatory environments, timing and entry points, and exit strategies.

## The Haka Global Perspective

At Haka Global, we believe that strategic positioning is not merely about asset allocation—it's about understanding the interconnected nature of global markets and anticipating shifts before they occur.`,
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "strategy",
      published: true,
      publishedAt: new Date("2024-12-15"),
    },
    {
      title: "Real Estate Opportunities in Monaco and Dubai",
      slug: "real-estate-monaco-dubai",
      excerpt:
        "Exploring the shifting dynamics of ultra-luxury property markets in the world's most prestigious destinations.",
      content: `## The Premium Property Paradox

In an age of digital assets and virtual experiences, physical real estate in prime locations continues to command extraordinary premiums. Monaco and Dubai represent the pinnacle of this phenomenon.

## Monaco: The Enduring Appeal

Monaco's property market remains one of the most expensive per square meter globally, driven by tax efficiency, security, lifestyle, and scarcity.

## Dubai: The Rising Star

Dubai has transformed from a regional hub to a global luxury destination, with Vision 2040, Golden Visa programs, world-leading infrastructure, and tax-free benefits.

## Our Approach

Haka Global maintains exclusive relationships with developers and private sellers in both markets, providing access to off-market opportunities.`,
      imageUrl:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      category: "market-trends",
      published: true,
      publishedAt: new Date("2024-12-01"),
    },
    {
      title: "Building Influence: The Modern Executive Brand",
      slug: "building-influence-executive-brand",
      excerpt:
        "Why personal branding has become essential for C-suite executives and how to cultivate authentic authority.",
      content: `## The Evolution of Executive Presence

The traditional notion of executive presence has given way to a more nuanced reality. Today's most influential leaders understand that their personal brand extends far beyond the office walls.

## Why Personal Branding Matters

Your reputation precedes you—affecting talent attraction, business development, board opportunities, and legacy building.

## The Pillars of Executive Branding

Key elements include authentic narrative, thought leadership, visual identity, and strategic media relations.

## The Haka Global Methodology

We work with executives to develop comprehensive personal branding strategies that align with their professional goals and personal values.`,
      imageUrl:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      category: "lifestyle",
      published: true,
      publishedAt: new Date("2024-11-20"),
    },
    {
      title: "Alternative Investments: Beyond Traditional Assets",
      slug: "alternative-investments-beyond-traditional",
      excerpt:
        "From rare collectibles to private equity, understanding the evolving landscape of wealth preservation.",
      content: `## The Case for Alternatives

Traditional portfolios of stocks and bonds may not provide adequate diversification in today's complex financial environment.

## Key Alternative Asset Classes

Consider rare collectibles, private equity, venture capital, real estate, and tangible assets like art and wine.

## Due Diligence Requirements

Alternative investments require specialized knowledge, longer time horizons, and careful consideration of liquidity constraints.

## Our Advisory Approach

Haka Global provides access to vetted alternative investment opportunities with comprehensive due diligence.`,
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      category: "investments",
      published: true,
      publishedAt: new Date("2024-11-05"),
    },
  ];

  for (const insight of insights) {
    await prisma.insight.create({
      data: insight,
    });
  }
  console.log(`✅ Created ${insights.length} insights`);

  console.log("🎉 Database seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

