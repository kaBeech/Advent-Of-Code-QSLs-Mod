import { DayController } from "../../components/DayController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getUserByIdWithRelations,
  updateDay,
} from "../../db.ts";

export const rollInitialModifier = async (
  userId: number,
  gameNumber: number,
  dayNumber: number,
) => {
  const userData = await getUserByIdWithRelations(userId);
  const game = userData.Game[gameNumber - 1];
  const day = game.Day[dayNumber - 1];
  const challengeModifiers = await getAllChallengeModifiers();
  const modifierOptions = await getAllModifierOptions();
  const updatedDay = await DayController(day!).rollInitialChallengeModifier(
    game!,
    challengeModifiers,
    modifierOptions,
  );
  await updateDay(updatedDay);
  return updatedDay;
};
