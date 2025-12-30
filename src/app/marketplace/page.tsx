import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { getMarketplaceItems } from "@/lib/actions/marketplace";
import { MarketplaceGrid } from "./MarketplaceGrid";

export const metadata: Metadata = {
  title: "Luxury Marketplace",
  description:
    "Discover a curated collection of exceptional luxury assets - rare timepieces, fine art, luxury vehicles, and exclusive experiences.",
};

// Demo items for initial display
const demoItems = [
  {
    id: "1",
    title: "Patek Philippe Nautilus 5711",
    description: "Iconic luxury timepiece in white gold with blue dial. Mint condition with complete documentation.",
    category: "watches",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    price: 185000,
    featured: true,
    available: true,
  },
  {
    id: "2",
    title: "Bentley Continental GT",
    description: "2024 model in Beluga Black with Mulliner specification. Under 1,000 miles.",
    category: "vehicles",
    imageUrl: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
    price: 245000,
    featured: true,
    available: true,
  },
  {
    id: "3",
    title: "Monaco Penthouse",
    description: "Exceptional penthouse with panoramic Mediterranean views. Prime location in Fontvieille.",
    category: "property",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: null,
    featured: true,
    available: true,
  },
  {
    id: "4",
    title: "Basquiat Original Work",
    description: "Authenticated 1983 mixed media on canvas. Provenance documentation included.",
    category: "art",
    imageUrl: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
    price: null,
    featured: false,
    available: true,
  },
  {
    id: "5",
    title: "Cartier Panthère Necklace",
    description: "High jewelry collection piece with emeralds and onyx. Limited edition.",
    category: "jewelry",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    price: 425000,
    featured: false,
    available: true,
  },
  {
    id: "6",
    title: "Private Yacht Charter",
    description: "7-day Mediterranean experience aboard 60m superyacht. All-inclusive luxury service.",
    category: "experiences",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    price: 175000,
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
      <Hero
        subtitle="Curated Collection"
        title="Luxury Marketplace"
        description="Discover exceptional assets and experiences curated for the most discerning collectors."
        size="large"
        showScrollIndicator={false}
      />

      <MarketplaceGrid items={items} />
    </>
  );
}

