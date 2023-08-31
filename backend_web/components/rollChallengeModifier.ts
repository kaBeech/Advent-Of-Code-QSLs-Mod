import { ChallengeModifier } from "../generated/client/deno/index.d.ts";

const rollChallengeModifier = (challengeModifiers: ChallengeModifier[]) => {
  const randomIndex = Math.floor(Math.random() * challengeModifiers.length);
  const selectedChallengeModifier = challengeModifiers[randomIndex];
  return `Complete this challenge ${selectedChallengeModifier.text}`;
};

export { rollChallengeModifier };
