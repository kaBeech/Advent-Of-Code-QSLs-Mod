import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import { UserController } from "../UserController.ts";
import { exampleUser } from "./exampleObjects.ts";

const userController = UserController(exampleUser);

Deno.test("Adjusts number of games", () => {
  const result = userController.adjustNumberOfGames(1);
  assertEquals(result.numberOfGames, 2);
});
