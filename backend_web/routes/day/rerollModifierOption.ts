import { DayController } from "../../components/DayController.ts";
import { GameController } from "../../components/GameController.ts";
import {
  getModifierOptionsByChallengeModifierId,
  getUserByIdWithRelations,
  updateDay,
  updateGame,
} from "../../db.ts";

export const rerollModifierOption = async (ctx: any) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  const game = userData.Game[gameNumber - 1];
  const day = game.Day[dayNumber - 1];
  const modifierOptions = await getModifierOptionsByChallengeModifierId(
    day!.challengeModifierId!,
  );
  const updatedDay = DayController(day!).rerollModifierOption(
    game!.currentDay,
    modifierOptions,
    game!,
  );
  const updatedGame = GameController(game!).spendRerollTokens(1);
  await updateDay(updatedDay);
  await updateGame(updatedGame);
  ctx.response.body = { updatedDay, updatedGame };
};
