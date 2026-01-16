import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/HAKA/i);
  });

  test("should navigate to about page via menu", async ({ page }) => {
    await page.goto("/");
    
    // Open the hamburger menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await menuButton.click();
    
    // Click About link
    await page.getByRole("menuitem", { name: "About" }).click();
    
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: /ABOUT HAKA/i })).toBeVisible();
  });

  test("should navigate to advisory page via menu", async ({ page }) => {
    await page.goto("/");
    
    // Open the hamburger menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await menuButton.click();
    
    // Click Consulting link
    await page.getByRole("menuitem", { name: "Consulting" }).click();
    
    await expect(page).toHaveURL("/advisory");
    await expect(page.getByRole("heading", { name: /HAKA GLOBAL CONSULTING/i })).toBeVisible();
  });

  test("should navigate to investment page via menu", async ({ page }) => {
    await page.goto("/");
    
    // Open the hamburger menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await menuButton.click();
    
    // Click Investment link
    await page.getByRole("menuitem", { name: "Investment" }).click();
    
    await expect(page).toHaveURL("/investment");
    await expect(page.getByRole("heading", { name: /HAKA GLOBAL INVESTMENT/i })).toBeVisible();
  });

  test("should navigate to contact page via menu", async ({ page }) => {
    await page.goto("/");
    
    // Open the hamburger menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await menuButton.click();
    
    // Click Contact link
    await page.getByRole("menuitem", { name: "Contact" }).click();
    
    await expect(page).toHaveURL("/contact");
    await expect(page.getByRole("heading", { name: /START A CONVERSATION/i })).toBeVisible();
  });

  test("should have working hamburger menu", async ({ page }) => {
    await page.goto("/");
    
    // Menu button should be visible
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();
    
    // Open menu
    await menuButton.click();
    
    // Menu items should be visible
    await expect(page.getByRole("menuitem", { name: "About" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "Investment" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "Consulting" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "Contact" })).toBeVisible();
  });

  test("should close menu when clicking outside", async ({ page }) => {
    await page.goto("/");
    
    // Open menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await menuButton.click();
    
    // Verify menu is open - wait for menu to appear
    const aboutMenuItem = page.getByRole("menuitem", { name: "About" });
    await expect(aboutMenuItem).toBeVisible({ timeout: 5000 });
    
    // Click outside the menu (on the main content area)
    await page.locator("main").click({ force: true });
    
    // Menu should be closed
    await expect(aboutMenuItem).not.toBeVisible({ timeout: 5000 });
  });
});

test.describe("Home Page", () => {
  test("should display main content", async ({ page }) => {
    await page.goto("/");
    
    // Check for main content text within main element (not navigation)
    const main = page.locator("main");
    await expect(main.getByText(/Personal and Corporate Affairs/i).first()).toBeVisible();
    await expect(main.getByText(/Pre-Shift Strike/i).first()).toBeVisible();
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

  test("should navigate to advisory via consulting card", async ({ page }) => {
    await page.goto("/");
    
    // Click the consulting card
    await page.getByRole("link", { name: /Explore Consulting services/i }).click();
    
    await expect(page).toHaveURL("/advisory");
  });

  test("should navigate to investment via investing card", async ({ page }) => {
    await page.goto("/");
    
    // Click the investing card
    await page.getByRole("link", { name: /Explore Investing services/i }).click();
    
    await expect(page).toHaveURL("/investment");
  });
});
