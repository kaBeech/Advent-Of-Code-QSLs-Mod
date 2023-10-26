import { ChallengeModifier } from "../generated/client/deno/edge.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollChallengeModifier = (
  challengeModifiers: ChallengeModifier[],
  currentChallengeModifier?: ChallengeModifier,
) => {
  const selectedChallengeModifier = pickRandomly(
    challengeModifiers,
    currentChallengeModifier,
  );
  return selectedChallengeModifier;
};

export { rollChallengeModifier };
