import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getModifierOptionsByChallengeModifierId,
  getUserByIdWithRelations,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollModifierOption = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber/reroll/option",
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
  const modifierOptions = await getModifierOptionsByChallengeModifierId(
    day!.challengeModifierId!,
  );
  const updatedDay = DayController(day!).rerollModifierOption(
    game!.currentDay,
    modifierOptions,
    game!,
  );
  const updatedGame = GameController(game!).spendRerollTokens(
    1,
    Boolean(day!.part1Completed),
    day!.rerollTokensSpentDuringPart2,
  );
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  ctx.response.body = { updatedDay, updatedGame };
};
