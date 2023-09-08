import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getDayById,
  getGameById,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollChallengeModifier = async (dayId: number) => {
  const day = await getDayById(dayId);
  const game = await getGameById(day!.gameId);
  const challengeModifiers = await getAllChallengeModifiers();
  const modifierOptions = await getAllModifierOptions();
  const updatedDay = await DayController(day!).rerollChallengeModifier(
    game!,
    challengeModifiers,
    modifierOptions,
  );
  const updatedGame = GameController(game!).spendRerollTokens(2);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  return updatedGame;
};
