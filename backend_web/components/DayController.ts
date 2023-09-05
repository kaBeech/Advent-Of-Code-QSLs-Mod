import {
  getAllChallengeModifiers,
  getGameById,
  getModifierOptionByChallengeModifierId,
  updateDayChallengeModifier,
  updateDayModifierOption,
  updateDayPart1CompletionStatus,
  updateDayPart2CompletionStatus,
  updateGameRerollTokensGained,
} from "../db.ts";
import { Day } from "../generated/client/deno/index.d.ts";
import { pickRandomly } from "../util/pickRandomly.ts";
import { GameController } from "./GameController.ts";
import { rollChallengeModifier } from "./rollChallengeModifier.ts";
import { rollModifierOption } from "./rollModifierOption.ts";

interface DayControllerState {
  day: Day;
}

const initialChallengeModifierRoller = (state: DayControllerState) => ({
  rollInitialChallengeModifier: async () => {
    const selectedChallengeModifier = await rollChallengeModifier();
    state.day.challengeModifierId = selectedChallengeModifier.id;
    updateDayChallengeModifier(state.day.id, selectedChallengeModifier.id);
    if (selectedChallengeModifier.hasOptions) {
      initialModifierOptionRoller(state).rollInitialModifierOption(
        selectedChallengeModifier.id,
      );
    }
    return selectedChallengeModifier;
  },
});

const initialModifierOptionRoller = (state: DayControllerState) => ({
  rollInitialModifierOption: async (challengeModifierId: number) => {
    const selectedModifierOption = await rollModifierOption(
      challengeModifierId,
    );
    state.day.modifierOptionId = selectedModifierOption.id;
    updateDayModifierOption(state.day.id, selectedModifierOption.id);
    return selectedModifierOption;
  },
});

const getGame = async (gameId: number) => {
  const game = await getGameById(gameId);
  return game;
};

const part1Completer = (state: DayControllerState) => ({
  completePart1: async () => {
    state.day.part1Completed = true;
    updateDayPart1CompletionStatus(state.day.id, true);
    const game = await getGameById(state.day.gameId);
    GameController(game!).adjustRerollTokensGained(1);
    GameController(game!).adjustCurrentRerollTokens(1);
    return state.day;
  },
});

const part2Completer = (state: DayControllerState) => ({
  completePart2: async () => {
    state.day.part2Completed = true;
    updateDayPart2CompletionStatus(state.day.id, true);
    const game = await getGame(state.day.gameId);
    GameController(game!).adjustRerollTokensGained(1);
    GameController(game!).adjustCurrentRerollTokens(1);
    return state.day;
  },
});

const DayController = (
  day: Day,
) => {
  const state = {
    day,
  };

  return {
    ...initialChallengeModifierRoller(state),
    ...initialModifierOptionRoller(state),
    ...challengeModifierReroller(state),
    ...challengeModifierOptionReroller(state),
    ...part1Completer(state),
    ...part2Completer(state),
  };
};

export { DayController };
