import { createGame } from "../../db.ts";
import { GameController } from "../GameController.ts";

export const exampleGame = await createGame(
  "Example Game",
  "Example Player",
  2021,
);

export const exampleDay = GameController(exampleGame).startNextDay();
