import { expect, test } from "@playwright/test";

test.describe("Header_navigation_standard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("Logo links to homepage", async ({ page }) => {
    const anchor = page.locator("a#logo");

    await expect(anchor).toHaveAttribute("href", "/");
  });

  test("About links to about page", async ({ page }) => {
    const anchor = page.locator("a#about");

    await expect(anchor).toHaveAttribute("href", "/about");
  });

  test("Calendar links to calendar page", async ({ page }) => {
    const anchor = page.locator("a#calendar");

    await expect(anchor).toHaveAttribute("href", "/calendar");
  });

  test("Modifiers links to modifiers page", async ({ page }) => {
    const anchor = page.locator("a#modifiers");

    await expect(anchor).toHaveAttribute("href", "/modifiers");
  });

  test("Settings links to settings page", async ({ page }) => {
    const anchor = page.locator("a#settings");

    await expect(anchor).toHaveAttribute("href", "/settings");
  });

  test("AoC links to Advent Of Code page", async ({ page }) => {
    const anchor = page.locator("a#aoc");

    await expect(anchor).toHaveAttribute("href", "https://adventofcode.com/");
  });

  test("Games links to games page", async ({ page }) => {
    const anchor = page.locator("a#games");

    await expect(anchor).toHaveAttribute("href", "/games");
  });

  test("Support links to support page", async ({ page }) => {
    const anchor = page.locator("a#support");

    await expect(anchor).toHaveAttribute("href", "/support");
  });

  test("Leaderboard links to leaderboard page", async ({ page }) => {
    const anchor = page.locator("a#leaderboard");

    await expect(anchor).toHaveAttribute("href", "/leaderboard");
  });

  test("Sponsors links to sponsors page", async ({ page }) => {
    const anchor = page.locator("a#sponsors");

    await expect(anchor).toHaveAttribute("href", "/sponsors");
  });
});

test.describe("Header_lights", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("Lights start out off", async ({ page }) => {
    const lightSwitch = page.locator("span#lightSwitch");
    const headerLights = page.locator("span#headerLights");

    await expect(lightSwitch).toContainText("󱨦");
    await expect(headerLights).toContainText("~~~");
    await expect(headerLights).toContainText("󰛩");
  });

  test("Lights toggle on", async ({ page }) => {
    const lightSwitch = page.locator("span#lightSwitch");
    const headerLights = page.locator("span#headerLights");

    await lightSwitch.click();

    await expect(lightSwitch).toContainText("󱨥");
    await expect(headerLights).toContainText("");
    await expect(headerLights).toContainText("󰛨");
  });
});
