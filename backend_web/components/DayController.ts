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
import { Day, Game } from "../generated/client/deno/index.d.ts";
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
    const game = await getGameById(state.day.gameId);
    GameController(game!).adjustRerollTokensGained(1);
    GameController(game!).adjustCurrentRerollTokens(1);
    return state.day;
  },
});

const challengeModifierReroller = (state: DayControllerState) => ({
  rerollChallengeModifier: async () => {
    const game = await getGameById(state.day.gameId);
    if (game!.currentRerollTokens < 2) {
      throw new Error("Not enough reroll tokens");
    }
    GameController(game!).adjustCurrentRerollTokens(-2);
    GameController(game!).adjustRerollTokensSpent(2);
    state.day.challengModifierRerollsUsed += 1;
    const selectedChallengeModifier = await rollChallengeModifier();
    state.day.challengeModifierId = selectedChallengeModifier.id;
    updateDayChallengeModifier(state.day.id, selectedChallengeModifier.id);
    if (selectedChallengeModifier.hasOptions) {
      modifierOptionReroller(state).rerollModifierOption(
        selectedChallengeModifier.id,
        true,
        game!,
      );
    }
    return selectedChallengeModifier;
  },
});

const modifierOptionReroller = (state: DayControllerState) => ({
  rerollModifierOption: async (
    challengeModifierId: number,
    gratis: boolean,
    gameProp?: Game,
  ) => {
    let game: Game;
    if (gameProp) {
      game = gameProp;
    } else {
      const gameFetched = await getGameById(state.day.gameId);
      game = gameFetched!;
    }
    if (!gratis && game!.currentRerollTokens < 1) {
      throw new Error("Not enough reroll tokens");
    }
    if (!gratis) {
      GameController(game!).adjustCurrentRerollTokens(-1);
      GameController(game!).adjustRerollTokensSpent(1);
    }
    state.day.modifierOptionRerollsUsed += 1;
    const selectedModifierOption = await rollModifierOption(
      challengeModifierId,
    );
    state.day.modifierOptionId = selectedModifierOption.id;
    updateDayModifierOption(state.day.id, selectedModifierOption.id);
    return selectedModifierOption;
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
    ...modifierOptionReroller(state),
    ...part1Completer(state),
    ...part2Completer(state),
  };
};

export { DayController };
