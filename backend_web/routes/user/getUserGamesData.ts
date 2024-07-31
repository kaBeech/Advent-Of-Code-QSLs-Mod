import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getUserGameDataById } from "../../db/db.ts";

export const getUserGamesData = async (ctx: Context) => {
  const userId = await ctx.state.session.get("userId") as string;
  const userData = await getUserGameDataById(userId);
  ctx.response.body = userData;
};
