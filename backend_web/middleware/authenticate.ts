import { verify } from "https://deno.land/x/djwt@v2.9.1/mod.ts";
import { key } from "../util/apiKey.ts";
import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const authenticate = async (ctx: Context, next: any) => {
  try {
    const headers: Headers = ctx.request.headers;
    const authorization = headers.get("Authorization");
    if (!authorization) {
      ctx.response.status = 401;
      return;
    }
    const jwt = authorization.split(" ")[1];

    if (!jwt) {
      ctx.response.status = 401;
      return;
    }
    const payload = await verify(jwt, key);
    if (!payload) {
      throw new Error("!payload");
    }
    ctx.state.session.set("userId", payload.payload.id);
    await next();
  } catch (error) {
    ctx.response.status = 401;
    ctx.response.body = {
      message: "You are not authorized to access this route",
    };
    return;
  }
};
