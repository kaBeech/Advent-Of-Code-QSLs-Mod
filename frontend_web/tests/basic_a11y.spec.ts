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

test.describe("challenge modifier page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("modifier/11");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("modifier option page", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("modifier/11/option/202");

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

test.describe("leaderboard game viewer", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("game/public/13");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("leaderboard day viewer", () => {
  test("does not have any automatically detectable accessibility issues", async ({ page }) => {
    await page.goto("game/public/13/day/1");

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
      await page.locator("a#headerDesktopCalendar").click();

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("settings page", () => {
    test("does not have any automatically detectable accessibility issues", async ({ page }) => {
      await page.locator("a#headerDesktopSettings").click();

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("game viewer", () => {
    test("does not have any automatically detectable accessibility issues", async ({ page }) => {
      await page.locator("a#headerDesktopGames").click();

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("day viewer", () => {
    test("does not have any automatically detectable accessibility issues", async ({ page }) => {
      await page.locator("a#headerDesktopCalendar").click();
      await page.getByText("°Continue Current Day°").click();

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
