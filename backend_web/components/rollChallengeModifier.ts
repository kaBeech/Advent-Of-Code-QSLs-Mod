import { getAllChallengeModifiers } from "../db.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollChallengeModifier = async () => {
  const selectedChallengeModifier = pickRandomly(
    await getAllChallengeModifiers(),
  );
  return selectedChallengeModifier;
};

export { rollChallengeModifier };
