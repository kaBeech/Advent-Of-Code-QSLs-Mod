import { ModifierOption } from "../generated/client/deno/edge.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollModifierOption = (
  modifierOptions: ModifierOption[],
) => {
  const selectedModifierOption = pickRandomly(modifierOptions);
  return selectedModifierOption;
};

export { rollModifierOption };
