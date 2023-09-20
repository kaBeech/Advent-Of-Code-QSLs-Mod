import { GameController } from "../../components/GameController.ts";
import { getGameById, updateGame } from "../../db.ts";

export const completeCurrentDay = async (gameId: number) => {
  const game = await getGameById(gameId);
  const updatedGame = GameController(game!).completeCurrentDay();
  await updateGame(updatedGame);
  return updatedGame;
};
