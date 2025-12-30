import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketplaceItem } from "@/lib/actions/marketplace";
import { MarketplaceItemDetail } from "./MarketplaceItemDetail";

interface MarketplaceItemPageProps {
  params: Promise<{ id: string }>;
}

// Demo item for development
const getDemoItem = (id: string) => {
  const items: Record<string, {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    price: number | null;
    featured: boolean;
    available: boolean;
  }> = {
    "1": {
      id: "1",
      title: "Patek Philippe Nautilus 5711",
      description: "Iconic luxury timepiece in white gold with blue dial. Mint condition with complete documentation. This exceptional example of horological excellence features the legendary caliber 26-330 S C movement, a symbol of Patek Philippe's commitment to perfection.",
      category: "watches",
      imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
      price: 185000,
      featured: true,
      available: true,
    },
    "2": {
      id: "2",
      title: "Bentley Continental GT",
      description: "2024 model in Beluga Black with Mulliner specification. Under 1,000 miles. This masterpiece of British craftsmanship features hand-stitched leather interior, 6.0L W12 engine producing 650 horsepower, and the latest infotainment technology.",
      category: "vehicles",
      imageUrl: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
      price: 245000,
      featured: true,
      available: true,
    },
    "3": {
      id: "3",
      title: "Monaco Penthouse",
      description: "Exceptional penthouse with panoramic Mediterranean views. Prime location in Fontvieille. This 450 sqm residence offers 4 bedrooms, private terrace, dedicated parking, and 24-hour concierge service in one of the world's most prestigious addresses.",
      category: "property",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      price: null,
      featured: true,
      available: true,
    },
  };
  return items[id] || null;
};

export async function generateMetadata({
  params,
}: MarketplaceItemPageProps): Promise<Metadata> {
  const { id } = await params;
  
  // Try database first, then demo
  const result = await getMarketplaceItem(id);
  const item = result.success ? result.data : getDemoItem(id);

  if (!item) {
    return { title: "Item Not Found" };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

export default async function MarketplaceItemPage({
  params,
}: MarketplaceItemPageProps) {
  const { id } = await params;
  
  // Try database first, then demo
  const result = await getMarketplaceItem(id);
  let item = result.success ? result.data : null;
  
  if (!item) {
    item = getDemoItem(id);
  }

  if (!item) {
    notFound();
  }

  const formattedItem = {
    id: item.id,
    title: item.title,
    description: item.description,
    category: item.category,
    imageUrl: item.imageUrl,
    price: item.price ? Number(item.price) : null,
    featured: item.featured,
    available: item.available,
  };

  return <MarketplaceItemDetail item={formattedItem} />;
}

