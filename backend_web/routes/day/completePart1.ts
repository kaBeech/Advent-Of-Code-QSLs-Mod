import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import { getDayByUserIdGameNumberAndDayNumber, getGameByUserIdAndGameNumber, updateDay, updateGame } from "../../db/db.ts";

export const completePart1 = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber/complete/part1",
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
  const game = await getGameByUserIdAndGameNumber(userId, +gameNumber);
  const day = await getDayByUserIdGameNumberAndDayNumber(userId, +gameNumber, +dayNumber);
  const updatedDay = DayController(day!).completePart1(game!.currentDay);
  let rerollTokensEarned = 0;
  if (day!.ChallengeModifier) {
    rerollTokensEarned = 1;
  }
  const updatedGame = GameController(game!).adjustCurrentRerollTokens(
    rerollTokensEarned,
  );
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  ctx.response.body = { updatedDay, updatedGame };
};
