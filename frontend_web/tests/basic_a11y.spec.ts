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
    await page.goto("https://www.xtremexmascode.com/login/");
    await page.getByRole("main").getByText("°Log In°").click();
    await page.getByRole("button", { name: "Sign in with Reddit" }).click();
    await page.getByPlaceholder("\n        Username\n      ").click();
    await page.getByPlaceholder("\n        Username\n      ").fill(
      process.env.TEST_USER_REDDIT!,
    );
    await page.getByPlaceholder("\n        Password\n      ").click();
    await page.getByPlaceholder("\n        Password\n      ").fill(
      process.env.TEST_PASSWORD_REDDIT!,
    );
    await page.getByRole("button", { name: "Log In" }).click();
    await page.getByRole("button", { name: "Allow" }).click();
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
