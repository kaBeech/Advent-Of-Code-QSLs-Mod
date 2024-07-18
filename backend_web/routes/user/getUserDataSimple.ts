import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getUserDataSimpleById } from "../../db.ts";

export const getUserDataSimple = async (ctx: Context) => {
  const userId = await ctx.state.session.get("userId") as string;
  const userData = await getUserDataSimpleById(userId);
  ctx.response.body = userData;
};
