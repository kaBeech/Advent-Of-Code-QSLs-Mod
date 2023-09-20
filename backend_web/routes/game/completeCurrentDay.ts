import { GameController } from "../../components/GameController.ts";
import { getGamesByUserId, updateGame } from "../../db.ts";

export const completeCurrentDay = async (
  userId: number,
  gameNumber: number,
) => {
  const games = await getGamesByUserId(userId);
  const game = games[gameNumber - 1];
  const updatedGame = GameController(game!).completeCurrentDay();
  await updateGame(updatedGame);
  return updatedGame;
};
