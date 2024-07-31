import {
  createUser,
  getUserIdById,
  updateUserName,
  updateUserOAuthInfo,
} from "../../db.ts";
import { Context, Next } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const getOrCreateUser = async (ctx: Context, next: Next) => {
  try {
    const userId = ctx.state.session.get("userId") as string;
    const oauthUrl = ctx.state.session.get("oauthURL") as string;
    const oauthUsername = ctx.state.session.get("oauthUsername") as string;
    const oauthName = ctx.state.session.get("oauthName") as string;
    const oauthAvatarUrl = ctx.state.session.get(
      "oauthAvatarURL",
    ) as string;
    let user;
    try {
      user = await getUserIdById(userId);
    } catch (errorFromGet) {
      try {
        user = await createUser(userId);
      } catch (errorFromCreate) {
        console.error(
          `Get User failed. Create User also failed. Error messages follow. `,
          `Error from Create action: ${errorFromCreate}. `,
          `Error from Get action: ${errorFromGet}. `,
        );
        throw new Error(
          `Error from Create action: ${errorFromCreate}. Error from Get action: ${errorFromGet}. `,
        );
      }
    }
    await updateUserName(userId, oauthUsername);
    if (oauthName !== "") {
      await updateUserOAuthInfo(
        userId,
        oauthUrl,
        oauthUsername,
        oauthAvatarUrl,
        oauthName,
      );
    } else {
      await updateUserOAuthInfo(
        userId,
        oauthUrl,
        oauthUsername,
        oauthAvatarUrl,
      );
    }
    ctx.response.status = 201;
    ctx.response.body = {
      message: "User created",
      userId: user.id,
    };
  } catch (err) {
    console.log(err);
    return next;
  }
};
