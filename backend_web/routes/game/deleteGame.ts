import { getGamesByUserId } from "../../db.ts";

export const deleteGame = async (ctx: any) => {
  const { gamenumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  const game = games.find((game) => game.number === +gamenumber);
  ctx.response.body = await deleteGame(game!.id);
};
