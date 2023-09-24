import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import { getUserByIdWithRelations, updateDay, updateGame } from "../../db.ts";

export const completePart2 = async (
  userId: string,
  gameNumber: number,
  dayNumber: number,
) => {
  const userData = await getUserByIdWithRelations(userId);
  const game = userData.Game[gameNumber - 1];
  const day = game.Day[dayNumber - 1];
  const updatedDay = DayController(day).completePart2(game.currentDay);
  const updatedGame = GameController(game).adjustCurrentRerollTokens(1);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  return { updatedDay, updatedGame };
};
