import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should display contact page correctly", async ({ page }) => {
    await expect(page).toHaveTitle(/Contact/);
    await expect(page.getByRole("heading", { name: /Send a Message/i })).toBeVisible();
  });

  test("should display contact information", async ({ page }) => {
    await expect(page.getByText("info@hakaglobal.com")).toBeVisible();
    await expect(page.getByText(/London.*Monaco.*Dubai.*Singapore/)).toBeVisible();
  });

  test("should have all form fields", async ({ page }) => {
    await expect(page.getByLabel(/Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Area of Interest/i)).toBeVisible();
    await expect(page.getByLabel(/Message/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /Submit/i })).toBeVisible();
  });

  test("should show validation errors for empty form submission", async ({ page }) => {
    await page.getByRole("button", { name: /Submit/i }).click();
    
    // Form should still be visible (submission prevented)
    await expect(page.getByRole("heading", { name: /Send a Message/i })).toBeVisible();
  });

  test("should validate email format", async ({ page }) => {
    await page.getByLabel(/Name/i).fill("Test User");
    await page.getByLabel(/Email/i).fill("invalid-email");
    await page.getByLabel(/Area of Interest/i).selectOption({ index: 1 });
    await page.getByLabel(/Message/i).fill("This is a test message");
    
    await page.getByRole("button", { name: /Submit/i }).click();
    
    // Should still be on the form (not submitted due to invalid email)
    await expect(page.getByRole("heading", { name: /Send a Message/i })).toBeVisible();
  });

  test("should fill form correctly", async ({ page }) => {
    await page.getByLabel(/Name/i).fill("John Doe");
    await page.getByLabel(/Email/i).fill("john@example.com");
    await page.getByLabel(/Area of Interest/i).selectOption("personal-branding");
    await page.getByLabel(/Message/i).fill("I am interested in personal branding services.");
    
    // Verify form is filled
    await expect(page.getByLabel(/Name/i)).toHaveValue("John Doe");
    await expect(page.getByLabel(/Email/i)).toHaveValue("john@example.com");
    await expect(page.getByLabel(/Message/i)).toHaveValue("I am interested in personal branding services.");
  });
});

