import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getAllChallengeModifiers,
  getAllModifierOptions,
  getUserByIdWithRelations,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollChallengeModifier = async (ctx: any) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  const game = userData.Game[gameNumber - 1];
  const day = game.Day[dayNumber - 1];
  const challengeModifiers = await getAllChallengeModifiers();
  const modifierOptions = await getAllModifierOptions();
  const updatedDay = DayController(day!).rerollChallengeModifier(
    game!,
    challengeModifiers,
    modifierOptions,
  );
  const updatedGame = GameController(game!).spendRerollTokens(2);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
