import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { DayController } from "../DayController.ts";
import { exampleDay } from "./exampleObjects.ts";
import { assertRejects } from "https://deno.land/std@0.197.0/assert/assert_rejects.ts";

const dayController = DayController(exampleDay);

Deno.test("Initial roll returns a ChallengeModifier", async () => {
  const result = await dayController.rollInitialChallengeModifier();
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.hasOptions, "boolean");
});

Deno.test("Initial roll throws error if day is not current", async () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  await assertRejects(
    () => {
      return dayController.rollInitialChallengeModifier();
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Initial roll throws error if day already has a ChallengeModifier", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 1,
  });
  await assertRejects(
    () => {
      return dayController.rollInitialChallengeModifier();
    },
    Error,
    "Challenge modifier already rolled",
  );
});

Deno.test("ChallengeModifier reroll returns a ChallengeModifier", async () => {
  const result = await dayController.rerollChallengeModifier();
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.hasOptions, "boolean");
});

Deno.test("ChallengeModifier reroll throws error if day is not current", async () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  await assertRejects(
    () => {
      return dayController.rerollChallengeModifier();
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("ChallengeModifier reroll throws error if day does not have a ChallengeModifier", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: null,
  });
  await assertRejects(
    () => {
      return dayController.rerollChallengeModifier();
    },
    Error,
    "Roll initial challenge modifier first",
  );
});

Deno.test("ModifierOption reroll returns a ModifierOption if ChallengeModifier has options", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: 5,
  });
  const result = await dayController.rerollModifierOption();
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.challengeModifierId, "number");
});

Deno.test("ModifierOption reroll throws error if day is not current", async () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  await assertRejects(
    () => {
      return dayController.rerollModifierOption();
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("ModifierOption reroll throws error if day does not have a ChallengeModifier", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: null,
  });
  await assertRejects(
    () => {
      return dayController.rerollModifierOption();
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
      return dayController.rerollModifierOption();
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("ModifierOption reroll throws error if day does not have a ModifierOption", async () => {
  const dayController = DayController({
    ...exampleDay,
    modifierOptionId: 0,
  });
  await assertRejects(
    () => {
      return dayController.rerollModifierOption();
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("ModifierOption reroll throws error if day does not have a ModifierOption", async () => {
  const dayController = DayController({
    ...exampleDay,
    modifierOptionId: null,
  });
  await assertRejects(
    () => {
      return dayController.rerollModifierOption();
    },
    Error,
    "No modifier option to reroll",
  );
});

Deno.test("Completes Part 1", async () => {
  const result = await dayController.completePart1();
  assertEquals(result.part1Completed, true);
});

Deno.test("Completing Part 1 throws error if day is not current", async () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  await assertRejects(
    () => {
      return dayController.completePart1();
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Completing Part 1 throws error if day is already completed", async () => {
  const dayController = DayController({
    ...exampleDay,
    part1Completed: true,
  });
  await assertRejects(
    () => {
      return dayController.completePart1();
    },
    Error,
    "Part 1 already completed",
  );
});

Deno.test("Completes Part 2", async () => {
  const result = await dayController.completePart2();
  assertEquals(result.part2Completed, true);
});

Deno.test("Completing Part 2 throws error if day is not current", async () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  await assertRejects(
    () => {
      return dayController.completePart2();
    },
    Error,
    "This method only permitted on current day",
  );
});

Deno.test("Completing Part 2 throws error if day is already completed", async () => {
  const dayController = DayController({
    ...exampleDay,
    part2Completed: true,
  });
  await assertRejects(
    () => {
      return dayController.completePart2();
    },
    Error,
    "Part 2 already completed",
  );
});
