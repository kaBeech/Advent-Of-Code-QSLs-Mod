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
    ...challengeModifierRemover(state),
    ...part1Completer(state),
    ...part2Completer(state),
    ...part2RerollBonusCalculator(state),
  };
};

const initialChallengeModifierRoller = (state: DayControllerState) => ({
  rollInitialChallengeModifier: (
    game: Game,
    challengeModifiers: ChallengeModifier[],
    modifierOptions: ModifierOption[],
  ) => {
    verifyDayIsCurrent(state.day.number, game!.currentDay);
    if (state.day.dateFirstRolled) {
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
    state.day.dateFirstRolled = new Date();
    return state.day;
  },
});

const challengeModifierReroller = (state: DayControllerState) => ({
  rerollChallengeModifier: (
    game: Game,
    challengeModifiers: ChallengeModifier[],
    modifierOptions: ModifierOption[],
    currentChallengeModifier?: ChallengeModifier,
  ) => {
    verifyDayIsCurrent(state.day.number, game.currentDay);
    if (!state.day.dateFirstRolled) {
      throw new Error("Roll initial challenge modifier first");
    }
    if (game.currentRerollTokens < 2) {
      throw new Error("Not enough reroll tokens");
    }
    const selectedChallengeModifier = rollChallengeModifier(
      challengeModifiers,
      currentChallengeModifier,
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
    } else {
      state.day.modifierOptionId = null;
    }
    state.day.challengeModifierRerollsUsed += 1;
    if (state.day.part1Completed) {
      state.day.rerollTokensSpentDuringPart2 += 2;
    }
    netScoreCalculator(state).calculateNetScore();
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
      throw new Error("Roll challenge modifier first");
    }
    if (!state.day.modifierOptionId || state.day.modifierOptionId === 0) {
      throw new Error("No modifier option to reroll");
    }
    if (game && game.currentRerollTokens < 1) {
      throw new Error("Not enough reroll tokens");
    }
    const currentModifierOption = modifierOptions.find(
      (option) => option.id === state.day.modifierOptionId,
    );
    const filteredModifierOptions = modifierOptions.filter(
      (option) => option.challengeModifierId === state.day.challengeModifierId,
    );
    const selectedModifierOption = rollModifierOption(
      filteredModifierOptions,
      currentModifierOption,
    );
    state.day.modifierOptionId = selectedModifierOption.id;
    state.day.modifierOptionRerollsUsed += 1;
    if (state.day.part1Completed) {
      state.day.rerollTokensSpentDuringPart2 += 1;
    }
    netScoreCalculator(state).calculateNetScore();
    return state.day;
  },
});

const challengeModifierRemover = (state: DayControllerState) => ({
  removeChallengeModifier: (game: Game) => {
    verifyDayIsCurrent(state.day.number, game.currentDay);
    if (!state.day.challengeModifierId) {
      throw new Error("No current Challenge Modifier to remove");
    }
    state.day.challengeModifierId = null;
    state.day.modifierOptionId = null;
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
    state.day.modifierWhenPart1CompletedId = state.day.challengeModifierId;
    state.day.optionWhenPart1CompletedId = state.day.modifierOptionId;
    netScoreCalculator(state).calculateNetScore();
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
    netScoreCalculator(state).calculateNetScore();
    return state.day;
  },
});

const netScoreCalculator = (state: DayControllerState) => ({
  calculateNetScore: () => {
    let netTokensGained = 0;
    state.day.modifierWhenPart1CompletedId && netTokensGained++;
    state.day.part2Completed && state.day.challengeModifierId &&
      netTokensGained++;
    netTokensGained -= state.day.challengeModifierRerollsUsed * 2;
    netTokensGained -= state.day.modifierOptionRerollsUsed;
    const part2RerollBonus = part2RerollBonusCalculator(state)
      .calculatePart2RerollBonus();
    state.day.netScore = 10 * netTokensGained + part2RerollBonus;

    return state.day.netScore;
  },
});

const part2RerollBonusCalculator = (state: DayControllerState) => ({
  calculatePart2RerollBonus: () => {
    let part2RerollBonus = 0;
    if (state.day.part2Completed && !state.day.challengeModifierId) {
      return part2RerollBonus;
    }
    part2RerollBonus =
      state.day.modifierWhenPart1CompletedId && state.day.challengeModifierId
        ? 20 * state.day.rerollTokensSpentDuringPart2
        : 0;
    if (part2RerollBonus > 40) {
      part2RerollBonus = 40;
    }

    return part2RerollBonus;
  },
});
