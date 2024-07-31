import { RouterContext, State } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getPublicGameSimpleById } from "../../db/db.ts";

export const getPublicGameSimple = async (
  ctx: RouterContext<
    "/game/public/:id/simple",
    {
      id: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { id } = ctx.params;
  const game = await getPublicGameSimpleById(+id);
  ctx.response.body = game;
};
