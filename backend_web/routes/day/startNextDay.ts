import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { GameController } from "../../components/GameController.ts";
import {
  createDay,
  getDayIdByGameIdAndDayNumber,
  getGameByUserIdAndGameNumber,
  updateGame,
} from "../../db/db.ts";

export const startNextDay = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber",
    {
      gameNumber: string;
    } & {
      dayNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const game = await getGameByUserIdAndGameNumber(userId, +gameNumber);
  if (game!.currentDay !== +dayNumber - 1) {
    throw new Error(
      `Requested to start Day ${dayNumber}, but current Day is ${game!.currentDay
      }`,
    );
  }
  let dayExists = true;
  try {
    const dayId = await getDayIdByGameIdAndDayNumber(game!.id, +dayNumber);
    if (!dayId) {
      dayExists = false;
    }
  } catch (_error) {
    dayExists = false;
  }
  if (dayExists) {
    ctx.response.status = 409;
    ctx.response.body = {
      message:
        `Game number ${gameNumber} already exists for Day number ${dayNumber}`,
    };
    return;
  }
  const updatedGame = GameController(game!).startNextDay();
  const nextDay = await createDay(
    updatedGame.userId,
    updatedGame.id,
    updatedGame.number,
    updatedGame.currentDay,
  );
  await updateGame(updatedGame);
  ctx.response.body = nextDay;
};
