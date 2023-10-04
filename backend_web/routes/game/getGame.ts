import { getGamesByUserId } from "../../db.ts";

export const getGame = async (ctx: any) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  ctx.response.body = games.find((game) => game.number === +gameNumber);
};
