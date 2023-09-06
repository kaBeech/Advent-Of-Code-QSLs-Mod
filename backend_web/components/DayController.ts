import { getGameById } from "../db.ts";
import { Day } from "../generated/client/deno/index.d.ts";
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
  rollInitialChallengeModifier: async () => {
    await verifyDayIsCurrent(state.day);
    if (state.day.challengeModifierId) {
      throw new Error("Challenge modifier already rolled");
    }
    const selectedChallengeModifier = await rollChallengeModifier();
    state.day.challengeModifierId = selectedChallengeModifier.id;
    if (selectedChallengeModifier.hasOptions) {
      const selectedModifierOption = await rollModifierOption(
        selectedChallengeModifier.id,
      );
      state.day.modifierOptionId = selectedModifierOption.id;
    }
    return state.day;
  },
});

const challengeModifierReroller = (state: DayControllerState) => ({
  rerollChallengeModifier: async () => {
    await verifyDayIsCurrent(state.day);
    if (!state.day.challengeModifierId) {
      throw new Error("Roll initial challenge modifier first");
    }
    const game = await getGameById(state.day.gameId);
    if (game!.currentRerollTokens < 2) {
      throw new Error("Not enough reroll tokens");
    }
    state.day.challengeModifierRerollsUsed += 1;
    const selectedChallengeModifier = await rollChallengeModifier();
    state.day.challengeModifierId = selectedChallengeModifier.id;
    if (selectedChallengeModifier.hasOptions) {
      const result = await modifierOptionReroller(state).rerollModifierOption(
        true,
      );
      state.day = result;
    }
    return state.day;
  },
});

const modifierOptionReroller = (state: DayControllerState) => ({
  rerollModifierOption: async (
    gratis?: boolean,
  ) => {
    await verifyDayIsCurrent(state.day);
    if (!state.day.challengeModifierId) {
      throw new Error("Roll initial challenge modifier first");
    }
    if (!state.day.modifierOptionId || state.day.modifierOptionId === 0) {
      throw new Error("No modifier option to reroll");
    }
    if (!gratis) {
      const game = await getGameById(state.day.gameId);
      if (game!.currentRerollTokens < 1) {
        throw new Error("Not enough reroll tokens");
      }
    }
    state.day.modifierOptionRerollsUsed += 1;
    const selectedModifierOption = await rollModifierOption(
      state.day.challengeModifierId,
    );
    state.day.modifierOptionId = selectedModifierOption.id;
    return state.day;
  },
});

const part1Completer = (state: DayControllerState) => ({
  completePart1: async () => {
    await verifyDayIsCurrent(state.day);
    if (state.day.part1Completed) {
      throw new Error("Part 1 already completed");
    }
    state.day.part1Completed = true;
    return state.day;
  },
});

const part2Completer = (state: DayControllerState) => ({
  completePart2: async () => {
    await verifyDayIsCurrent(state.day);
    if (!state.day.part1Completed) {
      throw new Error("Part 1 not yet completed");
    }
    if (state.day.part2Completed) {
      throw new Error("Part 2 already completed");
    }
    state.day.part2Completed = true;
    return state.day;
  },
});
