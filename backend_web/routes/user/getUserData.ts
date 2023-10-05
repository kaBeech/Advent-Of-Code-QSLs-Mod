import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getUserByIdWithRelations } from "../../db.ts";

export const getUserData = async (ctx: Context) => {
  const userId = await ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  ctx.response.body = userData;
};
