import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FeaturedMarketplace } from "@/components/sections/FeaturedMarketplace";
import { CTASection } from "@/components/sections/CTASection";
import { getFeaturedMarketplaceItems } from "@/lib/actions/marketplace";

// Demo items for initial display (before database is seeded)
const demoItems = [
  {
    id: "1",
    title: "Patek Philippe Nautilus",
    category: "watches",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    price: 185000,
  },
  {
    id: "2",
    title: "Bentley Continental GT",
    category: "vehicles",
    imageUrl: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
    price: 245000,
  },
  {
    id: "3",
    title: "Monaco Penthouse",
    category: "property",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: null,
  },
];

export default async function HomePage() {
  // Try to fetch from database, fallback to demo items
  let items = demoItems;
  try {
    const result = await getFeaturedMarketplaceItems(3);
    if (result.success && result.data && result.data.length > 0) {
      items = result.data.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        imageUrl: item.imageUrl,
        price: item.price ? Number(item.price) : null,
      }));
    }
  } catch {
    // Use demo items on error
  }

  return (
    <>
      <Hero
        subtitle="Haka Global"
        title="A Private Gateway to Influence, Assets, and Opportunity"
        description="Personal Branding. Global Real Estate. Strategic Investments. Luxury Access."
        primaryCta={{
          label: "Explore Services",
          href: "/services",
        }}
        secondaryCta={{
          label: "Private Access",
          href: "/contact",
        }}
        size="full"
      />

      <ServiceGrid />

      <FeaturedMarketplace items={items} />

      <CTASection />
    </>
  );
}
