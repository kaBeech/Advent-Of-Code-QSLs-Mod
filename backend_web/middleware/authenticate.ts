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
    const userId = authorization.split(" ")[2];
    ctx.state.session.set("userId", userId);
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
