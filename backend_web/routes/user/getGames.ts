import { getGamesByUserId } from "../../db.ts";

export const getGames = async (ctx: any) => {
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  ctx.response.body = games;
};
