import { RouterContext, State } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getChallengeModifierDataById } from "../../db.ts";

export const getChallengeModifierData = async (
    ctx: RouterContext<
        "/modifier/:id",
        {
            id: string;
        } & Record<string | number, string | undefined>,
        State
    >,
) => {
    const { id } = ctx.params;
    ctx.response.body = await getChallengeModifierDataById(+id);
};
