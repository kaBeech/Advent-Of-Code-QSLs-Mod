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
  await assertRejects(() => {
    return dayController.rollInitialChallengeModifier();
  });
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
  );
});

Deno.test("Reroll returns a ChallengeModifier", async () => {
  const result = await dayController.rerollChallengeModifier();
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.hasOptions, "boolean");
});

Deno.test("Reroll throws error if day is not current", async () => {
  const dayController = DayController({
    ...exampleDay,
    number: 90,
  });
  await assertRejects(
    () => {
      return dayController.rerollChallengeModifier();
    },
  );
});

Deno.test("Reroll throws error if day does not have a ChallengeModifier", async () => {
  const dayController = DayController({
    ...exampleDay,
    challengeModifierId: null,
  });
  await assertRejects(
    () => {
      return dayController.rerollChallengeModifier();
    },
  );
});

Deno.test("Completes Part 1", async () => {
  const result = await dayController.completePart1();
  assertEquals(result.part1Completed, true);
});
