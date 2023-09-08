import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getDayById,
  getGameById,
  getModifierOptionsByChallengeModifierId,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollModifierOption = async (dayId: number) => {
  const day = await getDayById(dayId);
  const game = await getGameById(day!.gameId);
  const modifierOptions = await getModifierOptionsByChallengeModifierId(
    day!.challengeModifierId!,
  );
  const updatedDay = await DayController(day!).rerollModifierOption(
    game!.currentDay,
    modifierOptions,
    false,
    game!,
  );
  const updatedGame = GameController(game!).spendRerollTokens(1);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  return { updatedDay, updatedGame };
};
