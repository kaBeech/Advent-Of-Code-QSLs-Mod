import { RouterContext, State } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getModifierOptionDataById } from "../../db/db.ts";

export const getModifierOptionData = async (
    ctx: RouterContext<
        "/modifier-option/:id",
        {
            id: string;
        } & Record<string | number, string | undefined>,
        State
    >,
) => {
    const { id } = ctx.params;
    ctx.response.body = await getModifierOptionDataById(+id);
};
