import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.197.0/assert/mod.ts";
import { DayController } from "../DayController.ts";
import {
  exampleChallengeModifiers,
  exampleDay,
  exampleGameDay1,
  exampleModifierOptions,
} from "./exampleObjects.ts";
import { assertThrows } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import { assertRejects } from "https://deno.land/std@0.197.0/assert/assert_rejects.ts";

const dayController = DayController(exampleDay);

Deno.test("Initial roll sets a ChallengeModifier", async () => {
  assertEquals(exampleDay.challengeModifierId, null);
  const result = await dayController.rollInitialChallengeModifier(
    exampleGameDay1,
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
  assertRejects(
    () => {
      return dayController.rollInitialChallengeModifier(
        exampleGameDay1,
        exampleChallengeModifiers,
        exampleModifierOptions,
      );
    },
    Error,
    `This method only permitted on current day. Current day is 1, but day 90 was requested.`,
  );
});

Deno.test("Initial roll throws error if day already has a ChallengeModifier", () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 1,
  });
  assertRejects(
    () => {
      return dayController.rollInitialChallengeModifier(
        exampleGameDay1,
        exampleChallengeModifiers,
        exampleModifierOptions,
      );
    },
    Error,
    "Challenge modifier already rolled",
  );
});

Deno.test("ChallengeModifier reroll sets a new ChallengeModifier", async () => {
  const oldResult = exampleDay.challengeModifierId;
  const result = await dayController.rerollChallengeModifier(
    exampleGameDay1,
    exampleChallengeModifiers,
    exampleModifierOptions,
  );
  assertEquals(typeof result.challengeModifierId, "number");
  assertNotEquals(result.challengeModifierId, oldResult);
});

Deno.test("ChallengeModifier reroll throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertRejects(
    () => {
      return dayController.rerollChallengeModifier(
        exampleGameDay1,
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
  assertRejects(
    () => {
      return dayController.rerollChallengeModifier(
        exampleGameDay1,
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
    modifierOptionId: 14,
  });
  const result = await dayController.rerollModifierOption(
    exampleGameDay1.currentDay,
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
  assertRejects(
    () => {
      return dayController.rerollModifierOption(
        exampleGameDay1.currentDay,
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
  assertRejects(
    () => {
      return dayController.rerollModifierOption(
        exampleGameDay1.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "Roll initial challenge modifier first",
  );
});

Deno.test("ModifierOption reroll throws error if ChallengeModifier does not have options", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 1,
  });
  await assertRejects(
    () => {
      return dayController.rerollModifierOption(
        exampleGameDay1.currentDay,
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
  assertRejects(
    () => {
      return dayController.rerollModifierOption(
        exampleGameDay1.currentDay,
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
  assertRejects(
    () => {
      return dayController.rerollModifierOption(
        exampleGameDay1.currentDay,
        exampleModifierOptions,
        true,
      );
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("Completes Part 1", () => {
  const result = dayController.completePart1(exampleGameDay1.currentDay);
  assertEquals(result.part1Completed, new Date());
});

Deno.test("Completing Part 1 throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.completePart1(exampleGameDay1.currentDay);
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Completing Part 1 throws error if day is already completed", () => {
  const dayController = DayController({
    ...exampleDay,
    part1Completed: new Date(),
  });
  assertThrows(
    () => {
      return dayController.completePart1(exampleGameDay1.currentDay);
    },
    Error,
    "Part 1 already completed",
  );
});

Deno.test("Completes Part 2", () => {
  const result = dayController.completePart2(exampleGameDay1.currentDay);
  assertEquals(result.part2Completed, new Date());
});

Deno.test("Completing Part 2 throws error if day is not current", () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  assertThrows(
    () => {
      return dayController.completePart2(exampleGameDay1.currentDay);
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Completing Part 2 throws error if day is already completed", () => {
  const dayController = DayController({
    ...exampleDay,
    part2Completed: new Date(),
  });
  assertThrows(
    () => {
      return dayController.completePart2(exampleGameDay1.currentDay);
    },
    Error,
    "Part 2 already completed",
  );
});
