import { expect, test } from "@playwright/test";

test("About page has title", async ({ page }) => {
  await page.goto("/about");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Xtreme Xmas Code - About/);
});

test("About page links to homepage", async ({ page }) => {
  await page.goto("/about");

  // create a locator
  const anchor = page.locator("a.logo");

  // Expect an attribute "to be strictly equal" to the value.
  await expect(anchor).toHaveAttribute("href", "/");
});
