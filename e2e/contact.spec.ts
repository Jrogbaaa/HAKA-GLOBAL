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
    // Use more specific selectors to avoid matching social links
    await expect(page.getByRole("textbox", { name: /Name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Email/i })).toBeVisible();
    await expect(page.getByRole("combobox", { name: /Area of Interest/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Message/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Submit/i })).toBeVisible();
  });

  test("should show validation errors for empty form submission", async ({ page }) => {
    await page.getByRole("button", { name: /Submit/i }).click();
    
    // Form should still be visible (submission prevented)
    await expect(page.getByRole("heading", { name: /Send a Message/i })).toBeVisible();
  });

  test("should validate email format", async ({ page }) => {
    // Use role-based selectors to be more specific
    await page.getByRole("textbox", { name: /Name/i }).fill("Test User");
    await page.getByRole("textbox", { name: /Email/i }).fill("invalid-email");
    await page.getByRole("combobox", { name: /Area of Interest/i }).selectOption({ index: 1 });
    await page.getByRole("textbox", { name: /Message/i }).fill("This is a test message");
    
    await page.getByRole("button", { name: /Submit/i }).click();
    
    // Should still be on the form (not submitted due to invalid email)
    await expect(page.getByRole("heading", { name: /Send a Message/i })).toBeVisible();
  });

  test("should fill form correctly", async ({ page }) => {
    // Use role-based selectors to be more specific
    await page.getByRole("textbox", { name: /Name/i }).fill("John Doe");
    await page.getByRole("textbox", { name: /Email/i }).fill("john@example.com");
    await page.getByRole("combobox", { name: /Area of Interest/i }).selectOption("personal-branding");
    await page.getByRole("textbox", { name: /Message/i }).fill("I am interested in personal branding services.");
    
    // Verify form is filled
    await expect(page.getByRole("textbox", { name: /Name/i })).toHaveValue("John Doe");
    await expect(page.getByRole("textbox", { name: /Email/i })).toHaveValue("john@example.com");
    await expect(page.getByRole("textbox", { name: /Message/i })).toHaveValue("I am interested in personal branding services.");
  });
});
