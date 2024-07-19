import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { DayController } from "../../components/DayController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getUserGameDataById,
  updateDay,
} from "../../db.ts";

export const rollInitialModifier = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber/roll",
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
  const userData = await getUserGameDataById(userId);
  const game = userData.Game.find((game) => game.number === +gameNumber);
  const day = game!.Day.find((day) => day.number === +dayNumber);
  const challengeModifiers = await getAllChallengeModifiers();
  const modifierOptions = await getAllModifierOptions();
  const updatedDay = DayController(day!).rollInitialChallengeModifier(
    game!,
    challengeModifiers,
    modifierOptions,
  );
  await updateDay(updatedDay);
  ctx.response.body = updatedDay;
};
