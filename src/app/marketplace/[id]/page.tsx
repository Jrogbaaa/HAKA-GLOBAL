import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketplaceItemDetail } from "./MarketplaceItemDetail";

interface MarketplaceItemPageProps {
  params: Promise<{ id: string }>;
}

// Demo items for development
const demoItems: Record<
  string,
  {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    price: number | null;
    featured: boolean;
    available: boolean;
  }
> = {
  "1": {
    id: "1",
    title: "Patek Philippe Nautilus 5711",
    description:
      "Iconic luxury timepiece in white gold with blue dial. Mint condition with complete documentation. This exceptional example of horological excellence features the legendary caliber 26-330 S C movement, a symbol of Patek Philippe's commitment to perfection.",
    category: "watches",
    imageUrl:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    price: 185000,
    featured: true,
    available: true,
  },
  "2": {
    id: "2",
    title: "Hermès Birkin 25",
    description:
      "Rare Hermès Birkin 25 in Togo leather, Gold hardware. Full set with original receipt. The Birkin remains the most coveted handbag in the world, representing the pinnacle of luxury craftsmanship.",
    category: "luxury-assets",
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    price: 45000,
    featured: true,
    available: true,
  },
  "3": {
    id: "3",
    title: "Audemars Piguet Royal Oak",
    description:
      "41mm Royal Oak Selfwinding in stainless steel. Blue dial, full set. Gerald Genta's masterpiece that revolutionized the luxury sports watch category.",
    category: "watches",
    imageUrl:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
    price: 65000,
    featured: true,
    available: true,
  },
  "4": {
    id: "4",
    title: "Cartier Panthère Necklace",
    description:
      "High jewelry collection piece with emeralds and onyx. Limited edition. A stunning example of Cartier's legendary craftsmanship and artistic vision.",
    category: "jewelry",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    price: 425000,
    featured: false,
    available: true,
  },
  "5": {
    id: "5",
    title: "Rolex Daytona 116500LN",
    description:
      "Ceramic bezel Daytona in stainless steel. White dial, unworn condition. One of the most sought-after references in the current Rolex lineup.",
    category: "watches",
    imageUrl:
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&q=80",
    price: 38000,
    featured: false,
    available: true,
  },
  "6": {
    id: "6",
    title: "Chanel Classic Flap Medium",
    description:
      "Caviar leather in black with gold hardware. Excellent condition. The timeless Chanel Classic Flap represents enduring style and investment value.",
    category: "luxury-assets",
    imageUrl:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    price: 12500,
    featured: false,
    available: true,
  },
};

const getDemoItem = (id: string) => demoItems[id] || null;

export async function generateMetadata({
  params,
}: MarketplaceItemPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getDemoItem(id);

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
  const item = getDemoItem(id);

  if (!item) {
    notFound();
  }

  return <MarketplaceItemDetail item={item} />;
}
