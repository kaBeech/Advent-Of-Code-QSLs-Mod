import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getGamesByUserId, updateGame } from "../../db.ts";
import { GameController } from "../../components/GameController.ts";

export const updateGamePublicStatus = async (
  ctx: RouterContext<
    "/game/:gameNumber/public",
    {
      gameNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const body = await ctx.request.body().value;
  const bodyData = await body.read();
  const isPublic = bodyData.fields.isPublic;
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const games = await getGamesByUserId(userId);
  const game = games.find((game) => game.number === +gameNumber);
  const updatedGame = GameController(game!).setPublicStatus(
    isPublic == "true" ? true : false,
  );
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
