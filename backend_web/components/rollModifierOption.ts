import { getModifierOptionsByChallengeModifierId } from "../db.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollModifierOption = async (challengeModifierId: number) => {
  const selectedModifierOption = pickRandomly(
    await getModifierOptionsByChallengeModifierId(challengeModifierId),
  );
  return selectedModifierOption;
};

export { rollModifierOption };
