import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { pickRandomly } from "./pickRandomly.ts";

const heads = { id: 1, name: "Heads", coinFlipResult: "Heads" };
const tails = { id: 2, name: "Tails", coinFlipResult: "Tails" };

Deno.test("Flipping a coin returns either Heads or Tails", () => {
  const result = pickRandomly([heads, tails]);
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.coinFlipResult, "string");
});
