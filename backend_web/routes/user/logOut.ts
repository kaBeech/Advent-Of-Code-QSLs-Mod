import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const logOut = (ctx: Context) => {
  ctx.response.body = "You've logged out";
};
