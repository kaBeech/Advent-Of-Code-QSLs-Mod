import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("about page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("about");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("modifiers page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("modifier");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("support page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("support");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("leaderboard page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("leaderboard");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("sponsors page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("sponsors");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("log in page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("login");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("pages needing auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("chester");
    await page.getByText("°Chester The Tester°").click();
  });

  test.describe("calendar page", () => {
    test("does not have any automatically detectable accessibility issues", async ({ page }) => {
      await page.goto("calendar");

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("settings page", () => {
    test("does not have any automatically detectable accessibility issues", async ({ page }) => {
      await page.goto("settings");

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("games page", () => {
    test("does not have any automatically detectable accessibility issues", async ({ page }) => {
      await page.goto("games");

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
