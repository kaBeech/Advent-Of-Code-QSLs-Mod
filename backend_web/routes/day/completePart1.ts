import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import { getUserByIdWithRelations, updateDay, updateGame } from "../../db.ts";

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
  const userData = await getUserByIdWithRelations(userId);
  const game = userData.Game.find((game) => game.number === +gameNumber);
  const day = game!.Day.find((day) => day.number === +dayNumber);
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
