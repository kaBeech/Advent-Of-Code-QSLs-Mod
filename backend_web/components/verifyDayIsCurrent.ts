import { getGameById } from "../db.ts";

export const verifyDayIsCurrent = async (
  state: { day: { number: number; gameId: number } },
) => {
  const game = await getGameById(state.day.gameId);
  if (game!.currentDay !== state.day.number) {
    throw new Error("This method only permitted on current day");
  }
  return true;
};
