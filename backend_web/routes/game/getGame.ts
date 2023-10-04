import { getGamesByUserId } from "../../db.ts";

export const getGame = async (ctx: any) => {
  const { id, gamenumber } = ctx.params;
  const games = await getGamesByUserId(id);
  ctx.response.body = games.find((game) => game.number === +gamenumber);
};
