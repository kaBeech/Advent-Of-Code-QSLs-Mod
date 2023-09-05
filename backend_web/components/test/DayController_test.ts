import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { DayController } from "../DayController.ts";
import { exampleDay } from "./exampleObjects.ts";

const dayController = DayController(exampleDay);

Deno.test("Initial roll returns a ChallengeModifier", async () => {
  const result = await dayController.rollInitialChallengeModifier();
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.hasOptions, "boolean");
});
