import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getDayByUserIdGameNumberAndDayNumber,
  getGameByUserIdAndGameNumber,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollChallengeModifier = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber/reroll/modifier",
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
  const challengeModifiers = await getAllChallengeModifiers();
  const modifierOptions = await getAllModifierOptions();
  const currentChallengeModifier = challengeModifiers.find(
    (modifier) => modifier.id === day!.challengeModifierId,
  );
  const updatedDay = DayController(day!).rerollChallengeModifier(
    game!,
    challengeModifiers,
    modifierOptions,
    currentChallengeModifier,
  );
  const updatedGame = GameController(game!).spendRerollTokens(2);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
