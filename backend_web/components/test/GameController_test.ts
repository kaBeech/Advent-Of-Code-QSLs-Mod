import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { exampleGame } from "./exampleObjects.ts";
import { assertRejects } from "https://deno.land/std@0.197.0/assert/assert_rejects.ts";
import { GameController } from "../GameController.ts";

const gameController = GameController(exampleGame);

Deno.test("Starts first day", async () => {
  const result = await gameController.startNextDay();
  assertEquals(result.currentDay, 1);
});

Deno.test("Starting next day throws error if current day is not completed", async () => {
  const gameController = GameController({
    ...exampleGame,
    currentDay: 1,
    currentDayCompleted: false,
  });
  await assertRejects(
    () => {
      return gameController.startNextDay();
    },
    Error,
    "Day 1 has not been completed yet",
  );
});

Deno.test("Starts next day", async () => {
  const gameController = GameController({
    ...exampleGame,
    currentDay: 1,
    currentDayCompleted: true,
  });
  const result = await gameController.startNextDay();
  assertEquals(result.currentDay, 2);
});

Deno.test("Starting next day throws error if current day is already Christmas", async () => {
  const gameController = GameController({
    ...exampleGame,
    currentDay: 25,
    currentDayCompleted: true,
  });
  await assertRejects(
    () => {
      return gameController.startNextDay();
    },
    Error,
    "It's already Christmas (Day 25)!!!",
  );
});

Deno.test("Completes current day", async () => {
  const result = await gameController.completeCurrentDay();
  assertEquals(result.currentDay, 1);
  assertEquals(result.currentDayCompleted, true);
});

Deno.test("Starting next day throws error if current day is already completed", async () => {
  await assertRejects(
    () => {
      return gameController.completeCurrentDay();
    },
    Error,
    "Current day (1) already completed",
  );
});

Deno.test("Adjusts current reroll tokens by positive amount", async () => {
  const result = await gameController.adjustCurrentRerollTokens(1);
  assertEquals(result.currentRerollTokens, 8);
});

Deno.test("Adjusts current reroll tokens by negative amount", async () => {
  const result = await gameController.adjustCurrentRerollTokens(-1);
  assertEquals(result.currentRerollTokens, 7);
});

Deno.test("Adjusts reroll tokens gained by positive amount", async () => {
  const result = await gameController.adjustRerollTokensGained(1);
  assertEquals(result.rerollTokensGained, 8);
});

Deno.test("Adjusts reroll tokens gained by negative amount", async () => {
  const result = await gameController.adjustRerollTokensGained(-1);
  assertEquals(result.rerollTokensGained, 7);
});

Deno.test("Adjusts reroll tokens spent by positive amount", async () => {
  const result = await gameController.adjustRerollTokensSpent(1);
  assertEquals(result.rerollTokensSpent, 1);
});

Deno.test("Adjusts reroll tokens spent by negative amount", async () => {
  const result = await gameController.adjustRerollTokensSpent(-1);
  assertEquals(result.rerollTokensSpent, 0);
});

Deno.test("Sets name", async () => {
  const result = await gameController.setName("New Name");
  assertEquals(result.name, "New Name");
});

Deno.test("Setting name to empty string throws error", async () => {
  await assertRejects(
    () => {
      return gameController.setName("");
    },
    Error,
    "Name cannot be empty",
  );
});

Deno.test("Setting name to string longer than 24 characters throws error", async () => {
  await assertRejects(
    () => {
      return gameController.setName("This game name is too long");
    },
    Error,
    "Name cannot be longer than 24 characters",
  );
});

Deno.test("Sets player name", async () => {
  const result = await gameController.setPlayerName("New Player Name");
  assertEquals(result.playerName, "New Player Name");
});

Deno.test("Setting player name to empty string throws error", async () => {
  await assertRejects(
    () => {
      return gameController.setPlayerName("");
    },
    Error,
    "Player name cannot be empty",
  );
});

Deno.test("Setting player name to string longer than 24 characters throws error", async () => {
  await assertRejects(
    () => {
      return gameController.setPlayerName("This player name is too long");
    },
    Error,
    "Player name cannot be longer than 24 characters",
  );
});

Deno.test("Sets repository link", async () => {
  const result = await gameController.setRepositoryLink(
    "https://github.com/kaBeech/Advent-Of-Code",
  );
  assertEquals(
    result.repositoryLink,
    "https://github.com/kaBeech/Advent-Of-Code",
  );
});

Deno.test("Setting repository link to string longer than 255 characters throws error", async () => {
  await assertRejects(
    () => {
      return gameController.setRepositoryLink(
        "https://github.com/kaBeech/Advent-Of-Code#but-with-a-name-so-long-it-is-amazing-Krungthepmahanakhon-Amonrattanakosin-Mahintharayutthaya-Mahadilokphop-Noppharatratchathaniburirom-Udomratchaniwetmahasathan-Amonphimanawatansathit-Sakkathattiyawitsanukamprasit",
      );
    },
    Error,
    "Repository link cannot be longer than 255 characters",
  );
});

Deno.test("Sets progress sheet link", async () => {
  const result = await gameController.setProgressSheetLink(
    "https://www.kabeech.com/projects/#adventOfCode",
  );
  assertEquals(
    result.progressSheetLink,
    "https://www.kabeech.com/projects/#adventOfCode",
  );
});

Deno.test("Setting progress sheet link to string longer than 255 characters throws error", async () => {
  await assertRejects(
    () => {
      return gameController.setProgressSheetLink(
        "https://www.kabeech.com/contact#Hey-did-you-know-you-can-hire-me?-At-least-you-can-right-now-if-youre-quick-But-dont-wait-too-long-because-someones-gonna-see-this-amazing-project-and-give-me-an-incredible-job-offer-soon!-So-get-on-it-now-and-send-me-an-email!",
      );
    },
    Error,
    "Progress sheet link cannot be longer than 255 characters",
  );
});
