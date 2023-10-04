import { getUserByIdWithRelations } from "../../db.ts";

export const getDay = async (ctx: any) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  ctx.response.body = userData.Game.find((game) => game.number === +gameNumber)!
    .Day.find((day) => day.number === +dayNumber);
};
