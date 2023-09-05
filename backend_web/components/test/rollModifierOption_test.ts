import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { rollModifierOption } from "../rollModifierOption.ts";
import { ModifierOption } from "../../generated/client/index.d.ts";

Deno.test(function addTest() {
  assertEquals(2 + 3, 5);
});

Deno.test("exploring the testTileMap yields shortestPathToDestination of 31 steps", async () => {
  const result: ModifierOption = await rollModifierOption(5);
  assertEquals(typeof (result.id), "number");
  assertEquals(typeof (result.name), "string");
  assertEquals(typeof (result.text), "string");
  assertEquals(typeof (result.ChallengeModifierId), "number");
});

export { rollModifierOption };
