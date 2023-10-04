import { getUserByIdWithRelations } from "../../db.ts";

export const getUserData = async (ctx: any) => {
  const userId = await ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  ctx.response.body = userData;
};
