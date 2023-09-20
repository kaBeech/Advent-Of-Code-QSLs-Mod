import { DayController } from "../../components/DayController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getDaysByUserIdAndGameNumber,
  getGamesByUserId,
  updateDay,
} from "../../db.ts";

export const rollInitialModifier = async (
  userId: number,
  gameNumber: number,
  dayNumber: number,
) => {
  const days = await getDaysByUserIdAndGameNumber(userId, gameNumber);
  const day = days[dayNumber - 1];
  const games = await getGamesByUserId(userId);
  const game = games[gameNumber - 1];
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
