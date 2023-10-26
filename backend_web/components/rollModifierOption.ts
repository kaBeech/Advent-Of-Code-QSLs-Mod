import { ModifierOption } from "../generated/client/deno/edge.ts";
import { pickRandomly } from "../util/pickRandomly.ts";

const rollModifierOption = (
  modifierOptions: ModifierOption[],
  currentModifierOption?: ModifierOption,
) => {
  const selectedModifierOption = pickRandomly(
    modifierOptions,
    currentModifierOption,
  );
  return selectedModifierOption;
};

export { rollModifierOption };
