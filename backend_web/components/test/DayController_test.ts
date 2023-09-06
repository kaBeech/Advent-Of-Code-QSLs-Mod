import {
  assertEquals,
  assertNotEquals,
  assertThrows,
} from "https://deno.land/std@0.197.0/assert/mod.ts";
import { DayController } from "../DayController.ts";
import {
  exampleChallengeModifiers,
  exampleDay,
  exampleGame,
  exampleModifierOptions,
} from "./exampleObjects.ts";

const dayController = DayController(exampleDay);

Deno.test("Initial roll sets a ChallengeModifier", async () => {
  assertEquals(typeof exampleDay.challengeModifierId, "number");
  const result = await dayController.rollInitialChallengeModifier(
    exampleGame,
    exampleChallengeModifiers,
    exampleModifierOptions,
  );
  assertEquals(typeof result.challengeModifierId, "number");
});

Deno.test("Initial roll throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.rollInitialChallengeModifier(
        exampleGame,
        exampleChallengeModifiers,
        exampleModifierOptions,
      );
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Initial roll throws error if day already has a ChallengeModifier", () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 1,
  });
  assertThrows(
    () => {
      return dayController.rollInitialChallengeModifier(
        exampleGame,
        exampleChallengeModifiers,
        exampleModifierOptions,
      );
    },
    Error,
    "Challenge modifier already rolled",
  );
});

Deno.test("ChallengeModifier reroll sets a new ChallengeModifier", async () => {
  const result = await dayController.rerollChallengeModifier(
    exampleGame,
    exampleChallengeModifiers,
    exampleModifierOptions,
  );
  assertEquals(typeof result.challengeModifierId, "number");
  assertNotEquals(result.challengeModifierId, exampleDay.challengeModifierId);
});

Deno.test("ChallengeModifier reroll throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.rerollChallengeModifier(
        exampleGame,
        exampleChallengeModifiers,
        exampleModifierOptions,
      );
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("ChallengeModifier reroll throws error if day does not have a ChallengeModifier", () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: null,
  });
  assertThrows(
    () => {
      return dayController.rerollChallengeModifier(
        exampleGame,
        exampleChallengeModifiers,
        exampleModifierOptions,
      );
    },
    Error,
    "Roll initial challenge modifier first",
  );
});

Deno.test("ModifierOption reroll sets a new ModifierOption if ChallengeModifier has options", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 5,
  });
  const result = await dayController.rerollModifierOption(
    exampleGame.currentDay,
    exampleModifierOptions,
    true,
  );
  assertEquals(typeof result.modifierOptionId, "number");
  assertNotEquals(result.modifierOptionId, exampleDay.modifierOptionId);
});

Deno.test("ModifierOption reroll throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.rerollModifierOption(
        exampleGame.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("ModifierOption reroll throws error if day does not have a ChallengeModifier", () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: null,
  });
  assertThrows(
    () => {
      return dayController.rerollModifierOption(
        exampleGame.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "Roll initial challenge modifier first",
  );
});

Deno.test("ModifierOption reroll throws error if ChallengeModifier does not have options", () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 1,
  });
  assertThrows(
    () => {
      return dayController.rerollModifierOption(
        exampleGame.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("ModifierOption reroll throws error if day does not have a ModifierOption", () => {
  const dayController = DayController({
    ...exampleDay,
    modifierOptionId: 0,
  });
  assertThrows(
    () => {
      return dayController.rerollModifierOption(
        exampleGame.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("ModifierOption reroll throws error if day does not have a ModifierOption", () => {
  const dayController = DayController({
    ...exampleDay,
    modifierOptionId: null,
  });
  assertThrows(
    () => {
      return dayController.rerollModifierOption(
        exampleGame.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("Completes Part 1", () => {
  const result = dayController.completePart1(exampleGame.currentDay);
  assertEquals(result.part1Completed, true);
});

Deno.test("Completing Part 1 throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.completePart1(exampleGame.currentDay);
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Completing Part 1 throws error if day is already completed", () => {
  const dayController = DayController({
    ...exampleDay,
    part1Completed: true,
  });
  assertThrows(
    () => {
      return dayController.completePart1(exampleGame.currentDay);
    },
    Error,
    "Part 1 already completed",
  );
});

Deno.test("Completes Part 2", () => {
  const result = dayController.completePart2(exampleGame.currentDay);
  assertEquals(result.part2Completed, true);
});

Deno.test("Completing Part 2 throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.completePart2(exampleGame.currentDay);
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Completing Part 2 throws error if day is already completed", () => {
  const dayController = DayController({
    ...exampleDay,
    part2Completed: true,
  });
  assertThrows(
    () => {
      return dayController.completePart2(exampleGame.currentDay);
    },
    Error,
    "Part 2 already completed",
  );
});
