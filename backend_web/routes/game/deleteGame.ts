import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { deleteGameById, getGamesByUserId } from "../../db.ts";

export const deleteGame = async (
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
  ctx.response.body = await deleteGameById(game!.id);
};
