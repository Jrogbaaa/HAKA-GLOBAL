"use server";

import { db } from "@/lib/db";

// Get all published insights
export const getInsights = async (category?: string) => {
  try {
    const insights = await db.insight.findMany({
      where: {
        published: true,
        ...(category && category !== "all" ? { category } : {}),
      },
      orderBy: { publishedAt: "desc" },
    });
    return { success: true, data: insights };
  } catch (error) {
    console.error("Error fetching insights:", error);
    return { success: false, error: "Failed to fetch insights" };
  }
};

// Get featured insights
export const getFeaturedInsights = async (limit = 3) => {
  try {
    const insights = await db.insight.findMany({
      where: {
        published: true,
      },
      take: limit,
      orderBy: { publishedAt: "desc" },
    });
    return { success: true, data: insights };
  } catch (error) {
    console.error("Error fetching featured insights:", error);
    return { success: false, error: "Failed to fetch featured insights" };
  }
};

// Get single insight by slug
export const getInsightBySlug = async (slug: string) => {
  try {
    const insight = await db.insight.findUnique({
      where: { slug },
    });
    if (!insight || !insight.published) {
      return { success: false, error: "Insight not found" };
    }
    return { success: true, data: insight };
  } catch (error) {
    console.error("Error fetching insight:", error);
    return { success: false, error: "Failed to fetch insight" };
  }
};

