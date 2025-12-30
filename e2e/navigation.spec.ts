import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Haka Global/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: /Excellence Without Compromise/i })).toBeVisible();
  });

  test("should navigate to services page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page).toHaveURL("/services");
  });

  test("should navigate to contact page via Request Access button", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Request Access/i }).first().click();
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
    
    // Navigation links should be visible
    await expect(page.getByRole("link", { name: "About" }).last()).toBeVisible();
  });
});

test.describe("Home Page", () => {
  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("button", { name: /Request Access/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Explore Services/i })).toBeVisible();
  });

  test("should have stats section", async ({ page }) => {
    await page.goto("/");
    
    // Check for stats
    await expect(page.getByText("Assets Managed")).toBeVisible();
    await expect(page.getByText("Global Offices")).toBeVisible();
  });
});

