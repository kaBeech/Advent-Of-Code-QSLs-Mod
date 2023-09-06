import { Game } from "../generated/client/deno/index.d.ts";

export const verifyDayIsCurrent = (
  dayNumber: number,
  currentDay: number,
) => {
  if (dayNumber !== currentDay) {
    throw new Error(
      `This method only permitted on current day. Current day is ${currentDay}, but day ${dayNumber} was requested.`,
    );
  }
  return true;
};
