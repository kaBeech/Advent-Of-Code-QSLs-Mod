import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getDaysByUserIdAndGameNumber,
  getGamesByUserId,
  getModifierOptionsByChallengeModifierId,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollModifierOption = async (
  userId: number,
  gameNumber: number,
  dayNumber: number,
) => {
  const days = await getDaysByUserIdAndGameNumber(userId, gameNumber);
  const day = days[dayNumber - 1];
  const games = await getGamesByUserId(userId);
  const game = games[gameNumber - 1];
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
