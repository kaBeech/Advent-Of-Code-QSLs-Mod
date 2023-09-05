import {
  getGameById,
  updateDayChallengeModifier,
  updateDayChallengeModifierRerollsUsed,
  updateDayModifierOption,
  updateDayModifierOptionRerollsUsed,
  updateDayPart1CompletionStatus,
  updateDayPart2CompletionStatus,
} from "../db.ts";
import { Day, Game } from "../generated/client/deno/index.d.ts";
import { GameController } from "./GameController.ts";
import { rollChallengeModifier } from "./rollChallengeModifier.ts";
import { rollInitialModifierOption } from "./rollInitialModifierOption.ts";
import { rollModifierOption } from "./rollModifierOption.ts";
import { verifyDayIsCurrent } from "./verifyDayIsCurrent.ts";

interface DayControllerState {
  day: Day;
}

export const DayController = (
  day: Day,
) => {
  const state = {
    day,
  };

  return {
    ...initialChallengeModifierRoller(state),
    ...challengeModifierReroller(state),
    ...modifierOptionReroller(state),
    ...part1Completer(state),
    ...part2Completer(state),
  };
};

const initialChallengeModifierRoller = (state: DayControllerState) => ({
  rollInitialChallengeModifier: async () => {
    await verifyDayIsCurrent(state);
    if (state.day.challengeModifierId) {
      throw new Error("Challenge modifier already rolled");
    }
    const selectedChallengeModifier = await rollChallengeModifier();
    state.day.challengeModifierId = selectedChallengeModifier.id;
    await updateDayChallengeModifier(
      state.day.id,
      selectedChallengeModifier.id,
    );
    if (selectedChallengeModifier.hasOptions) {
      await rollInitialModifierOption(
        state,
        selectedChallengeModifier.id,
      );
    }
    return selectedChallengeModifier;
  },
});

const challengeModifierReroller = (state: DayControllerState) => ({
  rerollChallengeModifier: async () => {
    await verifyDayIsCurrent(state);
    if (!state.day.challengeModifierId) {
      throw new Error("Roll initial challenge modifier first");
    }
    const game = await getGameById(state.day.gameId);
    if (game!.currentRerollTokens < 2) {
      throw new Error("Not enough reroll tokens");
    }
    await GameController(game!).adjustCurrentRerollTokens(-2);
    await GameController(game!).adjustRerollTokensSpent(2);
    state.day.challengeModifierRerollsUsed += 1;
    await updateDayChallengeModifierRerollsUsed(
      state.day.id,
      state.day.challengeModifierRerollsUsed,
    );
    const selectedChallengeModifier = await rollChallengeModifier();
    state.day.challengeModifierId = selectedChallengeModifier.id;
    await updateDayChallengeModifier(
      state.day.id,
      selectedChallengeModifier.id,
    );
    if (selectedChallengeModifier.hasOptions) {
      await modifierOptionReroller(state).rerollModifierOption(
        true,
        game!,
      );
    }
    return selectedChallengeModifier;
  },
});

const modifierOptionReroller = (state: DayControllerState) => ({
  rerollModifierOption: async (
    gratis?: boolean,
    gameProp?: Game,
  ) => {
    await verifyDayIsCurrent(state);
    if (!state.day.challengeModifierId) {
      throw new Error("Roll initial challenge modifier first");
    }
    if (!state.day.modifierOptionId || state.day.modifierOptionId === 0) {
      throw new Error("No modifier option to reroll");
    }
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
      await GameController(game!).adjustCurrentRerollTokens(-1);
      await GameController(game!).adjustRerollTokensSpent(1);
    }
    state.day.modifierOptionRerollsUsed += 1;
    await updateDayModifierOptionRerollsUsed(
      state.day.id,
      state.day.modifierOptionRerollsUsed,
    );
    const selectedModifierOption = await rollModifierOption(
      state.day.challengeModifierId,
    );
    state.day.modifierOptionId = selectedModifierOption.id;
    await updateDayModifierOption(state.day.id, selectedModifierOption.id);
    return selectedModifierOption;
  },
});

const part1Completer = (state: DayControllerState) => ({
  completePart1: async () => {
    await verifyDayIsCurrent(state);
    if (state.day.part1Completed) {
      throw new Error("Part 1 already completed");
    }
    state.day.part1Completed = true;
    await updateDayPart1CompletionStatus(state.day.id, true);
    const game = await getGameById(state.day.gameId);
    await GameController(game!).adjustRerollTokensGained(1);
    await GameController(game!).adjustCurrentRerollTokens(1);
    return state.day;
  },
});

const part2Completer = (state: DayControllerState) => ({
  completePart2: async () => {
    await verifyDayIsCurrent(state);
    if (!state.day.part1Completed) {
      throw new Error("Part 1 not yet completed");
    }
    if (state.day.part2Completed) {
      throw new Error("Part 2 already completed");
    }
    state.day.part2Completed = true;
    await updateDayPart2CompletionStatus(state.day.id, true);
    const game = await getGameById(state.day.gameId);
    await GameController(game!).adjustRerollTokensGained(1);
    await GameController(game!).adjustCurrentRerollTokens(1);
    await GameController(game!).completeCurrentDay();
    return state.day;
  },
});
