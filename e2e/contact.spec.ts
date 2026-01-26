import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should display contact page correctly", async ({ page }) => {
    // Page title should contain the site name
    await expect(page).toHaveTitle(/HAKA/i);
    // Main heading should be visible
    await expect(page.getByRole("heading", { name: /START A CONVERSATION/i })).toBeVisible();
  });

  test("should have all form fields", async ({ page }) => {
    // Check for the form fields using their aria-labels from translations
    await expect(page.getByRole("textbox", { name: /Name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Organization/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Contact details/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Context/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Submit/i })).toBeVisible();
  });

  test("should fill form correctly", async ({ page }) => {
    // Use aria-label based selectors matching the actual translations
    await page.getByRole("textbox", { name: /Name/i }).fill("John Doe");
    await page.getByRole("textbox", { name: /Organization/i }).fill("Test Corp");
    await page.getByRole("textbox", { name: /Contact details/i }).fill("john@example.com");
    await page.getByRole("textbox", { name: /Context/i }).fill("I am interested in your services.");
    
    // Verify form is filled
    await expect(page.getByRole("textbox", { name: /Name/i })).toHaveValue("John Doe");
    await expect(page.getByRole("textbox", { name: /Organization/i })).toHaveValue("Test Corp");
    await expect(page.getByRole("textbox", { name: /Contact details/i })).toHaveValue("john@example.com");
    await expect(page.getByRole("textbox", { name: /Context/i })).toHaveValue("I am interested in your services.");
  });

  test("should display location information", async ({ page }) => {
    await expect(page.getByText(/Madrid/i)).toBeVisible();
    await expect(page.getByText(/Barcelona/i)).toBeVisible();
    await expect(page.getByText(/Roma/i)).toBeVisible();
  });
});
