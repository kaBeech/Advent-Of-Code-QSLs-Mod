import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const getHelloWorld = (ctx: Context) => {
  ctx.response.body = {
    message: `You have successfully pinged the Xtreme Xmas API!`,
  };
};
