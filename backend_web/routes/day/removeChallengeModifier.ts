import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import { getGameByUserIdAndGameNumber, updateDay } from "../../db.ts";

export const removeChallengeModifier = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber/removeChallengeModifier",
    {
      gameNumber: string;
    } & {
      dayNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const game = getGameByUserIdAndGameNumber(userId, +gameNumber);
  const day = game!.Day.find((day) => day.number === +dayNumber);
  const updatedDay = DayController(day!).removeChallengeModifier(game!);
  await updateDay(updatedDay);
  ctx.response.body = updatedDay;
};
