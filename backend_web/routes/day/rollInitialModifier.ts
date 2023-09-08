import { DayController } from "../../components/DayController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getDayById,
  getGameById,
  updateDay,
} from "../../db.ts";

export const rollInitialModifier = async (dayId: number) => {
  const day = await getDayById(dayId);
  const game = await getGameById(day!.gameId);
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
