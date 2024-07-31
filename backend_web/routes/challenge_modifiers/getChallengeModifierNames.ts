import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getAllChallengeModifierNames } from "../../db/db.ts";

export const getChallengeModifierNames = async (ctx: Context) => {
    ctx.response.body = await getAllChallengeModifierNames();
};
