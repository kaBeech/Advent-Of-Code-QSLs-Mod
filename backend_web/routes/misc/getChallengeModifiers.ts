import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getAllChallengeModifiers } from "../../db.ts";

export const getChallengeModifiers = async (ctx: Context) => {
  ctx.response.body = await getAllChallengeModifiers();
};
