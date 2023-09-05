import { getAllChallengeModifiers } from "../db.ts";
import { Day } from "../generated/client/deno/index.d.ts";
import { rollChallengeModifier } from "./rollChallengeModifier.ts";

interface DayControllerState {
  day: Day;
}

const initialChallengeModifierRoller = (state: DayControllerState) => ({
  rollInitialChallengeModifier: async () => {
    const rolledChallengeModifier = rollChallengeModifier(
      await getAllChallengeModifiers(),
    );
    state.day.challengeModifierId = rolledChallengeModifier.id;
    return rolledChallengeModifier;
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
    ...mainReroller(state),
    ...secondaryReroller(state),
    ...part1Completer(state),
    ...part2Completer(state),
  };
};

export { DayController };
