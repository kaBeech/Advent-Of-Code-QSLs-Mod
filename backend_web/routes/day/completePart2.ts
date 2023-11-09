import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getAllTitles,
  getUserByIdWithRelations,
  updateDay,
  updateGame,
} from "../../db.ts";

export const completePart2 = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber/complete/part2",
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
  const updatedDay = DayController(day!).completePart2(game!.currentDay);
  let rerollTokensEarned = 0;
  if (day!.ChallengeModifier) {
    rerollTokensEarned = 1;
  }
  let updatedGame = GameController(game!).adjustCurrentRerollTokens(
    rerollTokensEarned,
  );
  const titles = await getAllTitles();
  const part2RerollBonus = DayController(day!).calculatePart2RerollBonus();
  updatedGame = GameController(game!).completeCurrentDay(
    part2RerollBonus,
    titles,
  );
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  ctx.response.body = { updatedDay, updatedGame };
};
