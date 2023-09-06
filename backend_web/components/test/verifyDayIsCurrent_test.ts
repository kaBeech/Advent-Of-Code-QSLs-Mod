import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { verifyDayIsCurrent } from "../verifyDayIsCurrent.ts";
import { assertThrows } from "https://deno.land/std@0.152.0/testing/asserts.ts";

Deno.test("Returns true when day is current", async () => {
  const result = await verifyDayIsCurrent(2, 2);
  assertEquals(result, true);
});

Deno.test("Throws error when day is not current", () => {
  assertThrows(
    () => {
      return verifyDayIsCurrent(1, 2);
    },
    Error,
    "This method only permitted on current day",
  );
});
