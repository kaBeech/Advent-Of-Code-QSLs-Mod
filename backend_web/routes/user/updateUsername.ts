import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getUserById, updateUserName } from "../../db.ts";

export const updateUsername = async (
  ctx: RouterContext<
    "/user/username",
    Record<string | number, string | undefined>,
    State
  >,
) => {
  const body = await ctx.request.body().value;
  //   const username = body.get("username");
  const bodyData = await body.read();
  const username = bodyData.fields.username;
  const userId = ctx.state.session.get("userId") as string;
  const user = await getUserById(userId);
  if (username === "username") {
    const updatedUser = await updateUserName(userId, user.oauthName!);
    ctx.response.body = updatedUser;
  } else if (username === "name") {
    const updatedUser = await updateUserName(userId, user.oauthUsername!);
    ctx.response.body = updatedUser;
  } else {
    throw new Error("Invalid username");
  }
};
