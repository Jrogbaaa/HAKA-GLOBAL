"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Get all marketplace items
export const getMarketplaceItems = async (category?: string) => {
  try {
    const items = await db.marketplaceItem.findMany({
      where: {
        available: true,
        ...(category && category !== "all" ? { category } : {}),
      },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });
    return { success: true, data: items };
  } catch (error) {
    console.error("Error fetching marketplace items:", error);
    return { success: false, error: "Failed to fetch items" };
  }
};

// Get featured marketplace items
export const getFeaturedMarketplaceItems = async (limit = 3) => {
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
  } catch (error) {
    console.error("Error fetching featured items:", error);
    return { success: false, error: "Failed to fetch featured items" };
  }
};

// Get single marketplace item
export const getMarketplaceItem = async (id: string) => {
  try {
    const item = await db.marketplaceItem.findUnique({
      where: { id },
    });
    if (!item) {
      return { success: false, error: "Item not found" };
    }
    return { success: true, data: item };
  } catch (error) {
    console.error("Error fetching marketplace item:", error);
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
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, error: "Failed to submit inquiry" };
  }
};

