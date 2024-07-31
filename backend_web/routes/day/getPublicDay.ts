import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getPublicDayByGameIdAndNumber } from "../../db.ts";

export const getPublicDay = async (
  ctx: RouterContext<
    "/game/public/:gameId/day/:dayNumber",
    {
      gameId: string;
    } & {
      dayNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameId, dayNumber } = ctx.params;
  const day = await getPublicDayByGameIdAndNumber(+gameId, +dayNumber);
  ctx.response.body = day;
};
