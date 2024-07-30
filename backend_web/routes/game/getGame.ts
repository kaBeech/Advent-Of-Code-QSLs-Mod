import { RouterContext, State } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getGameByUserIdAndGameNumber } from "../../db.ts";

export const getGame = async (
  ctx: RouterContext<
    "/game/:gameNumber",
    {
      gameNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGameByUserIdAndGameNumber(userId, gameNumber);
  ctx.response.body = games.find((game) => game.number === +gameNumber);
};
