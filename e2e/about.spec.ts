import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("should display about page correctly", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /ABOUT HAKA/i })).toBeVisible();
  });

  test("should display tagline", async ({ page }) => {
    await expect(page.getByText(/Anticipation · Affairs · Influence/i)).toBeVisible();
  });

  test("should display main content sections", async ({ page }) => {
    // Check key content is present in the article
    const article = page.locator("article");
    await expect(article.getByText(/decisions take shape/i).first()).toBeVisible();
    await expect(article.getByText(/Personal and Corporate Affairs/i).first()).toBeVisible();
    await expect(article.getByText(/Pre-Shift Strike/i)).toBeVisible();
    await expect(page.getByText(/AI as Strategic Leverage/i)).toBeVisible();
  });

  test("should display bullet points", async ({ page }) => {
    await expect(page.getByText(/before narratives settle/i)).toBeVisible();
    await expect(page.getByText(/before consensus becomes public/i)).toBeVisible();
    await expect(page.getByText(/before the shift occurs/i)).toBeVisible();
  });

  test("should have email input section", async ({ page }) => {
    await expect(page.getByText(/Enter your email address/i)).toBeVisible();
    await expect(page.getByRole("textbox", { name: /email/i })).toBeVisible();
  });

  test("should have footer with links", async ({ page }) => {
    await expect(page.getByText(/All rights reserved/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Privacy Policy/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Legal Notice/i })).toBeVisible();
  });

  test("should have hero image", async ({ page }) => {
    await expect(page.getByRole("img", { name: /HAKA Global - Strategic Advisory/i })).toBeVisible();
  });
});
