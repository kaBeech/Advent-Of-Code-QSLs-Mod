import { create } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { upsertUser } from "../../db.ts";
import { key } from "../../util/apiKey.ts";
import { oauth2Client } from "../../util/oauth2Client.ts";
import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";

export const getOAuthData = async (
  ctx: RouterContext<
    "/oauth2/callback",
    Record<string | number, string | undefined>,
    State
  >,
) => {
  // Make sure the codeVerifier is present for the user's session
  const codeVerifier = ctx.state.session.get("codeVerifier");
  if (typeof codeVerifier !== "string") {
    throw new Error("invalid codeVerifier");
  }

  // Exchange the authorization code for an access token
  const tokens = await oauth2Client.code.getToken(ctx.request.url, {
    codeVerifier,
  });

  // Use the access token to make an authenticated API request
  const userResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });
  const res = await userResponse.json();
  const userId = res.id.toString();
  const user = await upsertUser(userId);
  const payload = {
    id: userId,
    name: user.username,
  };
  const jwt = await create({ alg: "HS512", typ: "JWT" }, { payload }, key);
  ctx.state.session.set("userId", userId);
  if (jwt) {
    ctx.response.status = 200;
    ctx.response.body = {
      userId: user.id,
      username: user.username,
      token: jwt,
    };
  } else {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
    };
  }
  console.debug(user);
  console.debug(`Hello, ${res.login}!`);
};
