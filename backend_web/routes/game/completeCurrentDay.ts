import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { GameController } from "../../components/GameController.ts";
import { getGamesByUserId, updateGame } from "../../db.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const completeCurrentDay = async (
  ctx: RouterContext<
    "/game/:gameNumber",
    {
      gameNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  const game = games.find((game) => game.number === +gameNumber);
  const updatedGame = GameController(game!).completeCurrentDay();
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
