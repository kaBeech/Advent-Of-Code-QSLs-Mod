import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { completePart1 } from "../completePart1.ts";

Deno.test("Adjusts number of games", async () => {
  const result = await completePart1(1);
  assertEquals(typeof result.updatedDay.part1Completed, "Date");
});
