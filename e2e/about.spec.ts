import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("should display about page correctly", async ({ page }) => {
    await expect(page).toHaveTitle(/About/);
    await expect(page.getByRole("heading", { name: /Excellence Without Compromise/i })).toBeVisible();
  });

  test("should display mission section", async ({ page }) => {
    await expect(page.getByText(/Our Mission/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Empowering Extraordinary Lives/i })).toBeVisible();
  });

  test("should display values section with all values", async ({ page }) => {
    await expect(page.getByText(/Our Values/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Principles That Guide Us/i })).toBeVisible();
    
    // Check all four values - use exact: true to avoid matching "Excellence Without Compromise"
    await expect(page.getByRole("heading", { name: "Discretion", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Global Reach", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Personalization", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Excellence", exact: true })).toBeVisible();
  });

  test("should display stats section", async ({ page }) => {
    await expect(page.getByText("$2B+")).toBeVisible();
    await expect(page.getByText("Assets Managed")).toBeVisible();
    await expect(page.getByText("40+")).toBeVisible();
    await expect(page.getByText("Countries Served")).toBeVisible();
    await expect(page.getByText("500+")).toBeVisible();
    await expect(page.getByText("Elite Clients")).toBeVisible();
    await expect(page.getByText("15+")).toBeVisible();
    await expect(page.getByText("Years of Excellence")).toBeVisible();
  });

  test("should have CTA section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Partner With Us/i })).toBeVisible();
  });
});
