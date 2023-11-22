import { Context, Next } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const dotEnv = await config();

export const authenticate = async (ctx: Context, next: Next) => {
  try {
    const headers: Headers = ctx.request.headers;
    const authorization = headers.get("Authorization");
    if (!authorization) {
      ctx.response.status = 401;
      return;
    }
    const xmasSecret = authorization.split(" ")[1];
    if (!xmasSecret) {
      ctx.response.status = 401;
      return;
    }
    if (xmasSecret !== dotEnv.XMAS_SECRET) {
      throw new Error("XMAS_SECRET does not match");
    }

    const userId = headers.get("UserId");
    ctx.state.session.set("userId", userId);
    const oauthURL = headers.get("OAuthUrl");
    ctx.state.session.set("oauthURL", oauthURL);
    const oauthUsername = headers.get("OAuthUsername");
    ctx.state.session.set("oauthUsername", oauthUsername);
    const oauthName = headers.get("OAuthName");
    ctx.state.session.set("oauthName", oauthName);
    const oauthAvatarURL = headers.get("OAuthAvatarURL");
    ctx.state.session.set("oauthAvatarURL", oauthAvatarURL);

    await next();
  } catch (error) {
    console.log(error);
    ctx.response.status = 401;
    ctx.response.body = {
      message: "You are not authorized to access this route",
    };
    return;
  }
};
