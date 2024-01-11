import { expect, test } from "@playwright/test";

test.describe("new game", () => {
  test("day 1 happy path", async ({ page }) => {
    await page.goto("chester");
    setTimeout(async () => {
      await page.getByRole("link", { name: "°Chester The Tester°" }).click();
      await page.getByRole("link", { name: "°Games°" }).click();
      await page.getByRole("link", { name: "°New Game°" }).click();
      await page.locator("#name").click();
      await page.locator("#name").fill("Playwright Test Game");
      await page.locator("#year").click();
      await page.locator("#year").fill("2014");
      await page.locator("#year").press("End");
      await page.getByRole("link", { name: "°Create New Game°" }).click();
      await page.getByRole("link", { name: "°Continue Current Day°" }).click();
      await page.getByRole("link", {
        name: "°Roll Initial Challenge Modifier°",
      })
        .click();
      await page.getByRole("link", { name: "°Reroll Challenge Modifier°" })
        .click();
      await page.getByRole("link", { name: "°Remove Challenge Modifier°" })
        .click();
      await page.getByRole("link", { name: "°Reroll Challenge Modifier°" })
        .click();
      await page.getByRole("link", { name: "°Complete Part 1°" }).click();
      await page.getByRole("link", { name: "°Remove Challenge Modifier°" });
      await page.getByRole("link", { name: "°Reroll Challenge Modifier°" });
      await page.getByRole("link", { name: "°Complete Part 2°" }).click();
      await page.getByRole("link", { name: "°Start Next Day°" }).click();
      await page.getByText("20").click();
      await page.getByRole("link", { name: "°Previous Day°" }).click();
      await page.getByText("20").click();
      await page.getByText("", { exact: true }).click();
      await page.getByText("").click();
      await page.getByText("").click();
      await page.getByText("0", { exact: true }).click();
      await page.getByRole("link", { name: "°Next Day°" }).click();
    }, 1000);
  });
});
