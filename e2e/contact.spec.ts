import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should display contact page correctly", async ({ page }) => {
    await expect(page).toHaveTitle(/Contact/i);
  });

  test("should have all form fields", async ({ page }) => {
    // Use more specific selectors to avoid matching social links
    await expect(page.getByRole("textbox", { name: /Name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Email/i })).toBeVisible();
    await expect(page.getByRole("combobox", { name: /Area of Interest/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /Message/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Submit/i })).toBeVisible();
  });

  test("should fill form correctly", async ({ page }) => {
    // Use role-based selectors to be more specific
    await page.getByRole("textbox", { name: /Name/i }).fill("John Doe");
    await page.getByRole("textbox", { name: /Email/i }).fill("john@example.com");
    await page.getByRole("combobox", { name: /Area of Interest/i }).selectOption({ index: 1 });
    await page.getByRole("textbox", { name: /Message/i }).fill("I am interested in your services.");
    
    // Verify form is filled
    await expect(page.getByRole("textbox", { name: /Name/i })).toHaveValue("John Doe");
    await expect(page.getByRole("textbox", { name: /Email/i })).toHaveValue("john@example.com");
    await expect(page.getByRole("textbox", { name: /Message/i })).toHaveValue("I am interested in your services.");
  });
});
