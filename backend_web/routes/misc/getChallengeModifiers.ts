import { getAllChallengeModifiers } from "../../db.ts";

export const getChallengeModifiers = async (ctx: any) => {
  ctx.response.body = await getAllChallengeModifiers();
};
