import { getGamesByUserId } from "../../db/db.ts";
import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const getGames = async (ctx: Context) => {
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  ctx.response.body = games;
};
