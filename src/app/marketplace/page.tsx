import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { getMarketplaceItems } from "@/lib/actions/marketplace";
import { MarketplaceGrid } from "./MarketplaceGrid";

export const metadata: Metadata = {
  title: "Luxury Assets & Collectibles",
  description:
    "Luxury goods treated as investment-grade assets, driven by scarcity, demand, and access. Sourcing, access, and resale of highly sought-after pieces.",
};

// Demo items for initial display
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

export default async function MarketplacePage() {
  // Try to fetch from database, fallback to demo items
  let items = demoItems;
  try {
    const result = await getMarketplaceItems();
    if (result.success && result.data && result.data.length > 0) {
      items = result.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        imageUrl: item.imageUrl,
        price: item.price ? Number(item.price) : null,
        featured: item.featured,
        available: item.available,
      }));
    }
  } catch {
    // Use demo items on error
  }

  return (
    <>
      <PageHeader
        subtitle="HAKA Global Investment"
        title="Luxury Assets & Collectibles"
        description="Luxury goods treated as investment-grade assets, driven by scarcity, demand, and access. We provide sourcing, access, and resale of highly sought-after and often inaccessible pieces."
      />

      <MarketplaceGrid items={items} />
    </>
  );
}
