import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getGameByUserIdAndGameNumber, updateGame } from "../../db.ts";
import { GameController } from "../../components/GameController.ts";

export const updateGameRepositoryLink = async (
  ctx: RouterContext<
    "/game/:gameNumber/repolink",
    {
      gameNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const body = await ctx.request.body().value;
  const bodyData = await body.read();
  const repoLink = bodyData.fields.repositoryLink;
  const { gameNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const game = await getGameByUserIdAndGameNumber(userId, +gameNumber);
  const updatedGame = GameController(game!).setRepositoryLink(repoLink);
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
