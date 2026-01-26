import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("should display about page correctly", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /About/i })).toBeVisible();
  });

  test("should display tagline", async ({ page }) => {
    await expect(page.getByText(/Anticipation/i).first()).toBeVisible();
    await expect(page.getByText(/Affairs · Influence/i)).toBeVisible();
  });

  test("should display main content sections", async ({ page }) => {
    // Check key content is present on the page
    await expect(page.getByText(/decisions take shape/i).first()).toBeVisible();
    await expect(page.getByText(/Personal and Corporate Affairs/i).first()).toBeVisible();
    await expect(page.getByText(/Pre-Shift Strike/i).first()).toBeVisible();
    await expect(page.getByText(/AI as Strategic Leverage/i)).toBeVisible();
  });

  test("should display bullet points", async ({ page }) => {
    await expect(page.getByText(/before narratives settle/i)).toBeVisible();
    await expect(page.getByText(/before consensus becomes public/i)).toBeVisible();
    await expect(page.getByText(/before the shift occurs/i)).toBeVisible();
  });

  test("should have how we operate section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /How We Operate/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Selectivity/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Discretion/i })).toBeVisible();
  });

  test("should have footer with links", async ({ page }) => {
    await expect(page.getByText(/All rights reserved/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Privacy Policy/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Legal Notice/i })).toBeVisible();
  });

  test("should have hero image", async ({ page }) => {
    await expect(page.getByRole("img", { name: /skyscrapers/i })).toBeVisible();
  });
});
