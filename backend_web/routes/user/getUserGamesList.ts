import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getUserGamesListById } from "../../db.ts";

export const getUserGamesList = async (ctx: Context) => {
  const userId = await ctx.state.session.get("userId") as string;
  const userData = await getUserGamesListById(userId);
  ctx.response.body = userData;
};
