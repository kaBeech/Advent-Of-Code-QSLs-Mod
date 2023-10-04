import { DayController } from "../../components/DayController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getUserByIdWithRelations,
  updateDay,
} from "../../db.ts";

export const rollInitialModifier = async (ctx: any) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  const game = userData.Game[gameNumber - 1];
  const day = game.Day[dayNumber - 1];
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
