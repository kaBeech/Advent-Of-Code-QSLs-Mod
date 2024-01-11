import { expect, test } from "@playwright/test";

test.describe("Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("Logo links to homepage", async ({ page }) => {
    const anchor = page.locator("a.logo");

    await expect(anchor).toHaveAttribute("href", "/");
  });
});
