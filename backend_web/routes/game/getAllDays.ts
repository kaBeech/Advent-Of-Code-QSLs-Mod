import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getUserGameDataById } from "../../db.ts";

export const getAllDays = async (
  ctx: RouterContext<
    "/game/:gameNumber/day",
    {
      gameNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserGameDataById(userId);
  ctx.response.body =
    userData.Game.find((game) => game.number === +gameNumber)!.Day;
};
