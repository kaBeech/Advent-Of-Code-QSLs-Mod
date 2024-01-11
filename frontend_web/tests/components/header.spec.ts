import { expect, test } from "@playwright/test";

test.describe("header navigation (standard)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("about");
  });

  test("logo links to homepage", async ({ page }) => {
    const anchor = page.locator("a#logo");

    await expect(anchor).toHaveAttribute("href", "/");
  });

  test("about links to about page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopAbout");

    await expect(anchor).toHaveAttribute("href", "about");
  });

  test("calendar links to calendar page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopCalendar");

    await expect(anchor).toHaveAttribute("href", "calendar");
  });

  test("modifiers links to modifiers page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopModifiers");

    await expect(anchor).toHaveAttribute("href", "modifier");
  });

  test("settings links to settings page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopSettings");

    await expect(anchor).toHaveAttribute("href", "settings");
  });

  test("AoC links to Advent Of Code page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopAOC");

    await expect(anchor).toHaveAttribute("href", "https://adventofcode.com/");
  });

  test("games links to games page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopGames");

    await expect(anchor).toHaveAttribute("href", "games");
  });

  test("support links to support page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopSupport");

    await expect(anchor).toHaveAttribute("href", "support");
  });

  test("leaderboard links to leaderboard page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopLeaderboard");

    await expect(anchor).toHaveAttribute("href", "leaderboard");
  });

  test("sponsors links to sponsors page", async ({ page }) => {
    const anchor = page.locator("a#headerDesktopSponsors");

    await expect(anchor).toHaveAttribute("href", "sponsors");
  });
});

test.describe("header lights", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("about");
  });

  test("lights start out off", async ({ page }) => {
    const lightSwitch = page.locator("span#lightSwitch");
    const headerLights = page.locator("span#headerLights");

    await expect(lightSwitch).toContainText("󱨦");
    await expect(headerLights).toContainText("~~~");
    await expect(headerLights).toContainText("󰛩");
  });

  test("lights toggle on", async ({ page }) => {
    const lightSwitch = page.locator("span#lightSwitch");
    const headerLights = page.locator("span#headerLights");

    await lightSwitch.click();

    await expect(lightSwitch).toContainText("󱨥");
    await expect(headerLights).toContainText("");
    await expect(headerLights).toContainText("󰛨");
  });
});
