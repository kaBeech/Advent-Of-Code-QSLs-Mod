import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { deleteGamesByTesterId } from "../../db.ts";

export default async (
  ctx: RouterContext<
    "/chester",
    Record<string | number, string | undefined>,
    State
  >,
) => {
  ctx.response.body = await deleteGamesByTesterId();
};
