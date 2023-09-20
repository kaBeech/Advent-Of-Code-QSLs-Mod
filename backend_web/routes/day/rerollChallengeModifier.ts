import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getDaysByUserIdAndGameNumber,
  getGamesByUserId,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollChallengeModifier = async (
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
