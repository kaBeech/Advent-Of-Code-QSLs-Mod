import { expect, test } from "@playwright/test";

test.describe("new game", () => {
  test("day 1 happy path", async ({ page }) => {
    await page.goto("https://www.xtremexmascode.com/chester/");
    await page.getByText("°Chester The Tester°").click();
    await page.getByRole("link", { name: "°Games°" }).click();
    await page.getByRole("link", { name: "°Games°" }).click();
    await page.getByRole("link", { name: "°Start a New Game!°" }).click();
    await expect(page.getByRole("heading")).toContainText("Create New Game");
    await expect(page.getByRole("list")).toContainText("Name:");
    await expect(page.locator("#name")).toBeVisible();
    await page.locator("#name").click();
    await page.locator("#name").fill("Playwright Test Game");
    await expect(page.getByRole("list")).toContainText("Year:");
    await expect(page.locator("#year")).toBeVisible();
    await page.locator("#year").click();
    await page.locator("#year").fill("2014");
    await expect(page.getByRole("list")).toContainText("*Repository Link");
    await expect(page.locator("#repositoryLink")).toBeVisible();
    await expect(page.getByRole("list")).toContainText("*Public?");
    await expect(page.getByLabel("*Public?")).not.toBeChecked();
    await page.getByLabel("*Public?").check();
    await expect(page.getByLabel("*Public?")).toBeChecked();
    await page.getByLabel("*Public?").uncheck();
    await expect(page.getByLabel("*Public?")).not.toBeChecked();
    await expect(page.locator("#name")).toHaveValue("Playwright Test Game");
    await expect(page.locator("#year")).toHaveValue("2014");
    await page.locator("#repositoryLink").click();
    await page.locator("#repositoryLink").press("Control+a");
    await page.locator("#repositoryLink").fill("test");
    await expect(page.locator("#repositoryLink")).toHaveValue("test");
    await page.locator("#repositoryLink").click();
    await page.locator("#repositoryLink").fill("");
    await expect(page.locator("#repositoryLink")).toBeEmpty();
    await expect(page.getByRole("article")).toContainText(
      "*Only required for Game to show on the Leaderboard",
    );
    await expect(page.getByRole("article")).toContainText("Number Of Games:");
    await expect(page.getByRole("article")).toContainText("°Create New Game°");
    await page.getByText("°Create New Game°").click();
    await page.getByRole("heading", { name: "Playwright Test Game" }).click();
    await expect(page.locator("h1")).toContainText("Playwright Test Game");
    await expect(page.getByRole("article")).toContainText("Year: 2014");
    await expect(page.getByRole("article")).toContainText("Score: 0");
    await expect(page.getByRole("article")).toContainText(
      "Current Reroll Tokens: 24",
    );
    await expect(page.getByRole("article")).toContainText(
      "°Continue Current Day°",
    );
    await expect(page.getByRole("article")).toContainText("°Edit Game°");
    await expect(page.getByRole("article")).toContainText("°Puzzle Link°");
    await page.getByRole("link", { name: "°Continue Current Day°" }).click();
    await expect(page.locator("h1")).toContainText("Playwright Test Game");
    await expect(page.locator("h2")).toContainText("Day 1");
    await expect(page.getByRole("article")).toContainText("°Puzzle Link°");
    await expect(page.getByRole("list")).toContainText(
      "Reroll Tokens Earned: 0",
    );
    await expect(page.getByRole("list")).toContainText(
      "Reroll Tokens Spent During Part 1: 0",
    );
    await expect(page.getByRole("list")).toContainText(
      "Reroll Tokens Spent During Part 2: 0",
    );
    await expect(page.getByRole("list")).toContainText(
      "Current Reroll Tokens: 24",
    );
    await expect(page.getByRole("list")).toContainText("Day Score: 0");
    await expect(page.getByRole("list")).toContainText(
      "Challenge Modifier:None",
    );
    await expect(page.getByRole("article")).toContainText(
      "°Roll Initial Challenge Modifier°",
    );
    await expect(page.getByRole("article")).toContainText("°Back to Calendar°");
    await page.getByText("°Roll Initial Challenge").click();
    await expect(page.getByRole("list")).toContainText(
      "Challenge Modifier:Your challenge is",
    );
    await expect(page.getByRole("list")).toContainText("First Rolled On");
    await expect(page.getByRole("article")).toContainText(
      "°Reroll Challenge Modifier° for ",
    );
    await expect(page.getByRole("article")).toContainText(
      "°Remove Challenge Modifier°",
    );
    await page.getByText("°Reroll Challenge Modifier°").click();
    await expect(page.getByRole("list")).toContainText(
      "Reroll Tokens Spent During Part 1: ",
    );
    await expect(page.getByRole("list")).toContainText(
      "Current Reroll Tokens: 22",
    );
    await expect(page.getByRole("list")).toContainText("Day Score: -20");
    await expect(page.getByRole("list")).toContainText(
      "Challenge Modifier:Your challenge is",
    );
    await expect(page.getByRole("article")).toContainText("°Complete Part 1°");
    await page.getByText("°Complete Part 1°").click();
    await expect(page.getByRole("list")).toContainText(
      "Reroll Tokens Earned: ",
    );
    await expect(page.getByRole("list")).toContainText("Day Score: -10");
    await expect(page.getByRole("article")).toContainText(
      "°Reroll Challenge Modifier° for ",
    );
    await expect(page.getByRole("article")).toContainText(
      "°Complete Part 2° for ",
    );
    await page.getByText("°Reroll Challenge Modifier°").click();
    await expect(page.getByRole("list")).toContainText(
      "Reroll Tokens Spent During Part 2: ",
    );
    await expect(page.getByRole("list")).toContainText(
      "Current Reroll Tokens: 21",
    );
    await expect(page.getByRole("list")).toContainText("Day Score: +10");
    await expect(page.getByRole("list")).toContainText(
      "Challenge Modifier:Your challenge is",
    );
    await expect(page.getByRole("list")).toContainText(
      "Challenge Modifier During Part 1: Your challenge is",
    );
    await page.getByText("°Complete Part 2°").click();
    await expect(page.getByRole("list")).toContainText(
      "Current Reroll Tokens: 22",
    );
    await page.getByText("Day Score: +").click();
    await expect(page.getByRole("list")).toContainText("Day Score: +20");
    await expect(page.getByRole("list")).toContainText("Part 1 Completed On");
    await expect(page.getByRole("list")).toContainText("Part 2 Completed On");
  });
});
