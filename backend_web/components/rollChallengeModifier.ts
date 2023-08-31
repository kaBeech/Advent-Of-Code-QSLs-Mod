import { ChallengeModifier } from "../generated/client/deno/index.d.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollChallengeModifier = (challengeModifiers: ChallengeModifier[]) => {
  const selectedChallengeModifier = pickRandomly(challengeModifiers);
  let text = selectedChallengeModifier.text;
  if (selectedChallengeModifier.options.length > 0) {
    text += `${pickRandomly(selectedChallengeModifier.options)}`;
  }
  return {
    id: selectedChallengeModifier.id,
    text: `Complete this challenge ${text}!`,
  };
};

export { rollChallengeModifier };
