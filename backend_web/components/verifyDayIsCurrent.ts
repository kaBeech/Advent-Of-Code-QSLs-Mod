import { getGameById } from "../db.ts";

export const verifyDayIsCurrent = async (
  state: { number: number; gameId: number },
) => {
  const game = await getGameById(state.gameId);
  if (game!.currentDay !== state.number) {
    throw new Error(
      `This method only permitted on current day. Current day is ${
        game!.currentDay
      }, but day ${state.number} was requested.`,
    );
  }
  return true;
};
