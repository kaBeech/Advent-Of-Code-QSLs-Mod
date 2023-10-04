import { GameController } from "../../components/GameController.ts";
import { getGamesByUserId, updateGame } from "../../db.ts";

export const completeCurrentDay = async (ctx: any) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  const game = games[gameNumber - 1];
  const updatedGame = GameController(game!).completeCurrentDay();
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
