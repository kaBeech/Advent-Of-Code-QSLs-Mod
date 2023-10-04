import { getUserByIdWithRelations } from "../../db.ts";

export const getAllDays = async (ctx: any) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  ctx.response.body =
    userData.Game.find((game) => game.number === +gameNumber)!.Day;
};
