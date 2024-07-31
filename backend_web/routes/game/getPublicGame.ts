import { RouterContext, State } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getPublicGameById } from "../../db/db.ts";

export const getPublicGame = async (
  ctx: RouterContext<
    "/game/public/:id",
    {
      id: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { id } = ctx.params;
  const game = await getPublicGameById(+id);
  ctx.response.body = game;
};
