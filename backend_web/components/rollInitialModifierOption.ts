import { updateDayModifierOption } from "../db.ts";
import { rollModifierOption } from "./rollModifierOption.ts";

export const rollInitialModifierOption = async (
  state: { day: { modifierOptionId: number | null; id: number } },
  challengeModifierId: number,
) => {
  const selectedModifierOption = await rollModifierOption(
    challengeModifierId,
  );
  state.day.modifierOptionId = selectedModifierOption.id;
  await updateDayModifierOption(state.day.id, selectedModifierOption.id);
  return selectedModifierOption;
};
