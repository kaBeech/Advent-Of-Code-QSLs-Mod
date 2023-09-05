import {
  getAllChallengeModifiers,
  getModifierOptionByChallengeModifierId,
  updateDayChallengeModifier,
  updateDayModifierOption,
  updateDayPart1CompletionStatus,
  updateDayPart2CompletionStatus,
} from "../db.ts";
import { Day } from "../generated/client/deno/index.d.ts";
import { pickRandomly } from "../util/pickRandomly.ts";
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
