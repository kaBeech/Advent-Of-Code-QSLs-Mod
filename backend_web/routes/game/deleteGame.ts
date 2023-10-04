import { getGamesByUserId } from "../../db.ts";

export const deleteGame = async (ctx: any) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  const game = games.find((game) => game.number === +gameNumber);
  ctx.response.body = await deleteGame(game!.id);
};
