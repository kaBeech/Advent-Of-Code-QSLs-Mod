import { GameController } from "../../components/GameController.ts";
import { createDay, getGameById, updateGame } from "../../db.ts";

export const startNextDay = async (dayId: number) => {
  const game = await getGameById(dayId);
  const updatedGame = GameController(game!).startNextDay();
  const nextDay = await createDay(updatedGame.id, updatedGame.currentDay);
  await updateGame(updatedGame);
  return nextDay;
};
