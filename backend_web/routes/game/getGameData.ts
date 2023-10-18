import { RouterContext, State } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getGameByNumberAndUserIdWithRelations } from "../../db.ts";

export const getGameData = async (
  ctx: RouterContext<
    "/gamedata/:gameNumber",
    {
      gameNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber } = ctx.params;
  const userId = await ctx.state.session.get("userId") as string;
  const gameData = await getGameByNumberAndUserIdWithRelations(
    userId,
    +gameNumber,
  );
  ctx.response.body = gameData;
};
