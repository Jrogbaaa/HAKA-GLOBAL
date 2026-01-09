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
    // Check for the form fields using their aria-labels
    await expect(page.getByRole("textbox", { name: /Your name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Your organization/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Your contact details/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Your message/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Submit/i })).toBeVisible();
  });

  test("should fill form correctly", async ({ page }) => {
    // Use aria-label based selectors
    await page.getByRole("textbox", { name: /Your name/i }).fill("John Doe");
    await page.getByRole("textbox", { name: /Your organization/i }).fill("Test Corp");
    await page.getByRole("textbox", { name: /Your contact details/i }).fill("john@example.com");
    await page.getByRole("textbox", { name: /Your message/i }).fill("I am interested in your services.");
    
    // Verify form is filled
    await expect(page.getByRole("textbox", { name: /Your name/i })).toHaveValue("John Doe");
    await expect(page.getByRole("textbox", { name: /Your organization/i })).toHaveValue("Test Corp");
    await expect(page.getByRole("textbox", { name: /Your contact details/i })).toHaveValue("john@example.com");
    await expect(page.getByRole("textbox", { name: /Your message/i })).toHaveValue("I am interested in your services.");
  });

  test("should display location information", async ({ page }) => {
    await expect(page.getByText(/Madrid/i)).toBeVisible();
    await expect(page.getByText(/Barcelona/i)).toBeVisible();
    await expect(page.getByText(/Roma/i)).toBeVisible();
  });
});
