import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getDaysByUserIdAndGameNumber,
  getGamesByUserId,
  updateDay,
  updateGame,
} from "../../db.ts";

export const completePart1 = async (
  userId: number,
  gameNumber: number,
  dayNumber: number,
) => {
  const days = await getDaysByUserIdAndGameNumber(userId, gameNumber);
  const day = days[dayNumber - 1];
  const games = await getGamesByUserId(userId);
  const game = games[gameNumber - 1];
  const updatedDay = DayController(day!).completePart1(game!.currentDay);
  const updatedGame = GameController(game!).adjustCurrentRerollTokens(1);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  return { updatedDay, updatedGame };
};
