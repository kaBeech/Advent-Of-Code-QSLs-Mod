import {
  ChallengeModifier,
  Day,
  Game,
  ModifierOption,
} from "../generated/client/deno/index.d.ts";
import { rollChallengeModifier } from "./rollChallengeModifier.ts";
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
  rollInitialChallengeModifier: (
    game: Game,
    challengeModifiers: ChallengeModifier[],
    modifierOptions: ModifierOption[],
  ) => {
    verifyDayIsCurrent(state.day.number, game!.currentDay);
    if (state.day.challengeModifierId) {
      throw new Error("Challenge modifier already rolled");
    }
    const selectedChallengeModifier = rollChallengeModifier(challengeModifiers);
    state.day.challengeModifierId = selectedChallengeModifier.id;
    if (selectedChallengeModifier.hasOptions) {
      const filteredModifierOptions = modifierOptions.filter(
        (option) => option.challengeModifierId === selectedChallengeModifier.id,
      );
      const selectedModifierOption = rollModifierOption(
        filteredModifierOptions,
      );
      state.day.modifierOptionId = selectedModifierOption.id;
    }
    return state.day;
  },
});

const challengeModifierReroller = (state: DayControllerState) => ({
  rerollChallengeModifier: (
    game: Game,
    challengeModifiers: ChallengeModifier[],
    modifierOptions: ModifierOption[],
  ) => {
    verifyDayIsCurrent(state.day.number, game.currentDay);
    if (!state.day.challengeModifierId) {
      throw new Error("Roll initial challenge modifier first");
    }
    if (game.currentRerollTokens < 2) {
      throw new Error("Not enough reroll tokens");
    }
    state.day.challengeModifierRerollsUsed += 1;
    const selectedChallengeModifier = rollChallengeModifier(
      challengeModifiers,
    );
    state.day.challengeModifierId = selectedChallengeModifier.id;
    if (selectedChallengeModifier.hasOptions) {
      const filteredModifierOptions = modifierOptions.filter(
        (option) => option.challengeModifierId === selectedChallengeModifier.id,
      );
      const selectedModifierOption = rollModifierOption(
        filteredModifierOptions,
      );
      state.day.modifierOptionId = selectedModifierOption.id;
    }
    return state.day;
  },
});

const modifierOptionReroller = (state: DayControllerState) => ({
  rerollModifierOption: (
    currentDay: number,
    modifierOptions: ModifierOption[],
    game?: Game,
  ) => {
    verifyDayIsCurrent(state.day.number, currentDay);
    if (!state.day.challengeModifierId) {
      throw new Error("Roll initial challenge modifier first");
    }
    if (!state.day.modifierOptionId || state.day.modifierOptionId === 0) {
      throw new Error("No modifier option to reroll");
    }
    if (game && game.currentRerollTokens < 1) {
      throw new Error("Not enough reroll tokens");
    }
    state.day.modifierOptionRerollsUsed += 1;
    const selectedModifierOption = rollModifierOption(
      modifierOptions,
    );
    state.day.modifierOptionId = selectedModifierOption.id;
    return state.day;
  },
});

const part1Completer = (state: DayControllerState) => ({
  completePart1: (currentDay: number) => {
    verifyDayIsCurrent(state.day.number, currentDay);
    if (state.day.part1Completed) {
      throw new Error("Part 1 already completed");
    }
    state.day.part1Completed = new Date();
    return state.day;
  },
});

const part2Completer = (state: DayControllerState) => ({
  completePart2: (currentDay: number) => {
    verifyDayIsCurrent(state.day.number, currentDay);
    if (!state.day.part1Completed) {
      throw new Error("Part 1 not yet completed");
    }
    if (state.day.part2Completed) {
      throw new Error("Part 2 already completed");
    }
    state.day.part2Completed = new Date();
    return state.day;
  },
});
