import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { exampleGame, exampleRanks } from "./exampleObjects.ts";
import { GameController } from "../GameController.ts";
import { assertThrows } from "https://deno.land/std@0.152.0/testing/asserts.ts";

const gameController = GameController(exampleGame);

Deno.test("Starts first day", () => {
  const result = gameController.startNextDay();
  assertEquals(result.currentDay, 1);
});

Deno.test("Starting next day throws error if current day is not completed", () => {
  const gameController = GameController({
    ...exampleGame,
    currentDay: 1,
    currentDayCompleted: false,
  });
  assertThrows(
    () => {
      return gameController.startNextDay();
    },
    Error,
    "Day 1 has not been completed yet",
  );
});

Deno.test("Starts next day", () => {
  const gameController = GameController({
    ...exampleGame,
    currentDay: 1,
    currentDayCompleted: true,
  });
  const result = gameController.startNextDay();
  assertEquals(result.currentDay, 2);
});

Deno.test("Starting next day throws error if current day is already Christmas", () => {
  const gameController = GameController({
    ...exampleGame,
    currentDay: 25,
    currentDayCompleted: true,
  });
  assertThrows(
    () => {
      return gameController.startNextDay();
    },
    Error,
    "It's already Christmas (Day 25)!!!",
  );
});

Deno.test("Adjusts reroll tokens", () => {
  const result = gameController.adjustCurrentRerollTokens(1);
  assertEquals(result.currentRerollTokens, 8);
});

Deno.test("Spends reroll tokens", () => {
  const result = gameController.spendRerollTokens(1, false, 0, 3);
  assertEquals(result.rerollTokensSpent, 1);
  assertEquals(result.currentRerollTokens, 7);
});

Deno.test("Completes current day", () => {
  const result = gameController.completeCurrentDay(exampleRanks);
  assertEquals(result.currentDay, 1);
  assertEquals(result.currentDayCompleted, true);
});

Deno.test("Starting next day throws error if current day is already completed", () => {
  assertThrows(
    () => {
      return gameController.completeCurrentDay(exampleRanks);
    },
    Error,
    "Current day (1) already completed",
  );
});

Deno.test("Sets name", () => {
  const result = gameController.setName("New Name");
  assertEquals(result.name, "New Name");
});

Deno.test("Setting name to empty string throws error", () => {
  assertThrows(
    () => {
      return gameController.setName("");
    },
    Error,
    "Name cannot be empty",
  );
});

Deno.test("Setting name to string longer than 24 characters throws error", () => {
  assertThrows(
    () => {
      return gameController.setName("This game name is too long");
    },
    Error,
    "Name cannot be longer than 24 characters",
  );
});

Deno.test("Sets player name", () => {
  const result = gameController.setPlayerName("New Player Name");
  assertEquals(result.playerName, "New Player Name");
});

Deno.test("Setting player name to empty string throws error", () => {
  assertThrows(
    () => {
      return gameController.setPlayerName("");
    },
    Error,
    "Player name cannot be empty",
  );
});

Deno.test("Setting player name to string longer than 24 characters throws error", () => {
  assertThrows(
    () => {
      return gameController.setPlayerName("This player name is too long");
    },
    Error,
    "Player name cannot be longer than 24 characters",
  );
});

Deno.test("Sets repository link", () => {
  const result = gameController.setRepositoryLink(
    "https://github.com/kaBeech/Advent-Of-Code",
  );
  assertEquals(
    result.repositoryLink,
    "https://github.com/kaBeech/Advent-Of-Code",
  );
});

Deno.test("Setting repository link to string longer than 255 characters throws error", () => {
  assertThrows(
    () => {
      return gameController.setRepositoryLink(
        "https://github.com/kaBeech/Advent-Of-Code#but-with-a-name-so-long-it-is-amazing-Krungthepmahanakhon-Amonrattanakosin-Mahintharayutthaya-Mahadilokphop-Noppharatratchathaniburirom-Udomratchaniwetmahasathan-Amonphimanawatansathit-Sakkathattiyawitsanukamprasit",
      );
    },
    Error,
    "Repository link cannot be longer than 255 characters",
  );
});

Deno.test("Sets progress sheet link", () => {
  const result = gameController.setProgressSheetLink(
    "https://www.kabeech.com/projects/#adventOfCode",
  );
  assertEquals(
    result.progressSheetLink,
    "https://www.kabeech.com/projects/#adventOfCode",
  );
});

Deno.test("Setting progress sheet link to string longer than 255 characters throws error", () => {
  assertThrows(
    () => {
      return gameController.setProgressSheetLink(
        "https://www.kabeech.com/contact#Hey-did-you-know-you-can-hire-me?-At-least-you-can-right-now-if-youre-quick-But-dont-wait-too-long-because-someones-gonna-see-this-amazing-project-and-give-me-an-incredible-job-offer-soon!-So-get-on-it-now-and-send-me-an-email!",
      );
    },
    Error,
    "Progress sheet link cannot be longer than 255 characters",
  );
});
