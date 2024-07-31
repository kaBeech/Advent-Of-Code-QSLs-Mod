import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getUserNumberOfGamesById } from "../../db/db.ts";

export const getUserNumberOfGames = async (ctx: Context) => {
  const userId = await ctx.state.session.get("userId") as string;
  const userData = await getUserNumberOfGamesById(userId);
  ctx.response.body = userData;
};
