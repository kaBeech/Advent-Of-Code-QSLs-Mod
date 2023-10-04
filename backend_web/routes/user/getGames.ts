import { getAllGames } from "../../db.ts";

export const getGames = async (ctx: any) => {
  ctx.response.body = await getAllGames();
};
