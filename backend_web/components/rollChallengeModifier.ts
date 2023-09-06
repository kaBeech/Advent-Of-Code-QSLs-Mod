import { ChallengeModifier } from "../generated/client/index.d.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollChallengeModifier = (
  challengeModifiers: ChallengeModifier[],
) => {
  const selectedChallengeModifier = pickRandomly(challengeModifiers);
  return selectedChallengeModifier;
};

export { rollChallengeModifier };
