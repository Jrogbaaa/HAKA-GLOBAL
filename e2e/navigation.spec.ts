import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/HAKA/i);
  });

  test("should navigate to about page", async ({ page, isMobile }) => {
    await page.goto("/");
    
    if (isMobile) {
      // On mobile, open the hamburger menu first
      const menuButton = page.getByRole("button", { name: /menu/i });
      await menuButton.click();
      await page.getByRole("link", { name: "About", exact: true }).click();
    } else {
      // Desktop: Use nav element to scope the selector to navigation links only
      await page.locator("nav").getByRole("link", { name: "About" }).click();
    }
    
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: /ABOUT HAKA/i })).toBeVisible();
  });

  test("should navigate to advisory page", async ({ page, isMobile }) => {
    await page.goto("/");
    
    if (isMobile) {
      // On mobile, open the hamburger menu first
      const menuButton = page.getByRole("button", { name: /menu/i });
      await menuButton.click();
      await page.getByRole("link", { name: "Advisory", exact: true }).click();
    } else {
      // Desktop: Use nav element to scope the selector to navigation links only
      await page.locator("nav").getByRole("link", { name: /Advisory/i }).click();
    }
    
    await expect(page).toHaveURL("/advisory");
  });

  test("should navigate to contact page", async ({ page, isMobile }) => {
    await page.goto("/");
    
    if (isMobile) {
      // On mobile, open the hamburger menu first
      const menuButton = page.getByRole("button", { name: /menu/i });
      await menuButton.click();
      await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    } else {
      // Desktop: Use nav element to scope the selector to navigation button only
      await page.locator("nav").getByRole("link", { name: /Contact/i }).click();
    }
    
    await expect(page).toHaveURL("/contact");
  });

  test("should have working mobile menu on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    
    // Mobile menu button should be visible
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();
    
    // Open mobile menu
    await menuButton.click();
    
    // Wait for mobile menu to appear
    await expect(page.getByRole("link", { name: "About", exact: true })).toBeVisible();
  });
});

test.describe("Home Page", () => {
  test("should display main content", async ({ page }) => {
    await page.goto("/");
    
    // Check for main content text
    await expect(page.getByText(/Personal and Corporate Affairs/i)).toBeVisible();
    await expect(page.getByText(/Pre-Shift Strike/i)).toBeVisible();
  });

  test("should have consulting and investing cards", async ({ page }) => {
    await page.goto("/");
    
    // Check for the two main cards
    await expect(page.getByRole("heading", { name: /CONSULTING/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /INVESTING/i })).toBeVisible();
  });

  test("should have email subscription section", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByText(/Enter your email address/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /Subscribe/i })).toBeVisible();
  });
});
