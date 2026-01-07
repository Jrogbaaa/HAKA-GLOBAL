"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Check if database is properly configured
const isDatabaseConfigured = () => {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl || dbUrl.length === 0) return false;
  if (dbUrl.includes("placeholder")) return false;
  // Skip local Prisma dev proxy URLs that aren't running
  if (dbUrl.includes("prisma+postgres://localhost")) return false;
  return true;
};

// Get all marketplace items
export const getMarketplaceItems = async (category?: string) => {
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const items = await db.marketplaceItem.findMany({
      where: {
        available: true,
        ...(category && category !== "all" ? { category } : {}),
      },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });
    return { success: true, data: items };
  } catch {
    return { success: false, error: "Failed to fetch items" };
  }
};

// Get featured marketplace items
export const getFeaturedMarketplaceItems = async (limit = 3) => {
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const items = await db.marketplaceItem.findMany({
      where: {
        available: true,
        featured: true,
      },
      take: limit,
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: items };
  } catch {
    return { success: false, error: "Failed to fetch featured items" };
  }
};

// Get single marketplace item
export const getMarketplaceItem = async (id: string) => {
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const item = await db.marketplaceItem.findUnique({
      where: { id },
    });
    if (!item) {
      return { success: false, error: "Item not found" };
    }
    return { success: true, data: item };
  } catch {
    return { success: false, error: "Failed to fetch item" };
  }
};

// Submit marketplace inquiry
export const submitMarketplaceInquiry = async (data: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  itemId: string;
}) => {
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const inquiry = await db.marketplaceInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message || null,
        itemId: data.itemId,
      },
    });
    revalidatePath("/marketplace");
    return { success: true, data: inquiry };
  } catch {
    return { success: false, error: "Failed to submit inquiry" };
  }
};
