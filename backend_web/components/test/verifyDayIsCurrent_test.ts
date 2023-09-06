import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { verifyDayIsCurrent } from "../verifyDayIsCurrent.ts";
import { assertRejects } from "https://deno.land/std@0.197.0/assert/assert_rejects.ts";

Deno.test("Returns true when day is current", async () => {
  const result = await verifyDayIsCurrent({ number: 2, gameId: 1 });
  assertEquals(result, true);
});

Deno.test("Throws error when day is not current", async () => {
  await assertRejects(
    () => {
      return verifyDayIsCurrent({ number: 1, gameId: 2 });
    },
    Error,
    "This method only permitted on current day",
  );
});
