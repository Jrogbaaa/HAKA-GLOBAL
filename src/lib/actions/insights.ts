"use server";

import { db } from "@/lib/db";

// Check if database is properly configured
const isDatabaseConfigured = () => {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl || dbUrl.length === 0) return false;
  if (dbUrl.includes("placeholder")) return false;
  // Skip local Prisma dev proxy URLs that aren't running
  if (dbUrl.includes("prisma+postgres://localhost")) return false;
  return true;
};

// Get all published insights
export const getInsights = async (category?: string) => {
  // Skip database call if not configured
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const insights = await db.insight.findMany({
      where: {
        published: true,
        ...(category && category !== "all" ? { category } : {}),
      },
      orderBy: { publishedAt: "desc" },
    });
    return { success: true, data: insights };
  } catch {
    // Silently fail - page will use demo data
    return { success: false, error: "Failed to fetch insights" };
  }
};

// Get featured insights
export const getFeaturedInsights = async (limit = 3) => {
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const insights = await db.insight.findMany({
      where: {
        published: true,
      },
      take: limit,
      orderBy: { publishedAt: "desc" },
    });
    return { success: true, data: insights };
  } catch {
    return { success: false, error: "Failed to fetch featured insights" };
  }
};

// Get single insight by slug
export const getInsightBySlug = async (slug: string) => {
  if (!isDatabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  try {
    const insight = await db.insight.findUnique({
      where: { slug },
    });
    if (!insight || !insight.published) {
      return { success: false, error: "Insight not found" };
    }
    return { success: true, data: insight };
  } catch {
    return { success: false, error: "Failed to fetch insight" };
  }
};
