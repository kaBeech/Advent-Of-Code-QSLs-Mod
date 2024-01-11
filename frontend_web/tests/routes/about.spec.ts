import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("about page (accessibility)", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("about");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
