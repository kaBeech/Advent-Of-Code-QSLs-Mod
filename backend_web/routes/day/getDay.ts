import { getUserByIdWithRelations } from "../../db.ts";

export const getDay = async (ctx: any) => {
  const { gamenumber, daynumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  ctx.response.body = userData.Game.find((game) => game.number === +gamenumber)!
    .Day.find((day) => day.number === +daynumber);
};
