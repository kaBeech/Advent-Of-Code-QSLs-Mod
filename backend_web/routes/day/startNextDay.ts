import { GameController } from "../../components/GameController.ts";
import { createDay, getGamesByUserId, updateGame } from "../../db.ts";

export const startNextDay = async (
  userId: number,
  gameNumber: number,
  dayNumber: number,
) => {
  const games = await getGamesByUserId(userId);
  const game = games[gameNumber - 1];
  if (game.currentDay !== dayNumber - 1) {
    throw new Error(
      `Requested to start Day ${dayNumber}, but current Day is ${game.currentDay}`,
    );
  }
  const updatedGame = GameController(game!).startNextDay();
  const nextDay = await createDay(
    updatedGame.userId,
    updatedGame.id,
    updatedGame.number,
    updatedGame.currentDay,
  );
  await updateGame(updatedGame);
  return nextDay;
};
