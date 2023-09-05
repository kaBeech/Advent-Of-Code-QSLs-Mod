import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { rollModifierOption } from "../rollModifierOption.ts";

Deno.test("Rolling returns a ModifierOption", async () => {
  const result = await rollModifierOption(5);
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.challengeModifierId, "number");
});
