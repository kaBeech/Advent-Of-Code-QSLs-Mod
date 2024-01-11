import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("login");
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
  await page.locator("#logo").click();
  await page.getByText("°Log Out°").first().click();
});
