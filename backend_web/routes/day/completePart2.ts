import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import { getDayById, getGameById, updateDay, updateGame } from "../../db.ts";

export const completePart2 = async (dayId: number) => {
  const day = await getDayById(dayId);
  const game = await getGameById(day!.gameId);
  const updatedDay = await DayController(day!).completePart2(game!.currentDay);
  const updatedGame = GameController(game!).adjustCurrentRerollTokens(1);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  return { updatedDay, updatedGame };
};
