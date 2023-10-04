import { create } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { getUserByUsername } from "../../db.ts";
import { key } from "../../util/apiKey.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const logInWithPassword = async (ctx: Context) => {
  const body = await ctx.request.body().value;
  const username = body.get("username");
  const password = body.get("password");
  const user = await getUserByUsername(username);

  if (!user) {
    ctx.response.status = 404;
    ctx.response.body = {
      message: `User "${username}" not found`,
    };
    return;
  }
  if (!user.password) {
    ctx.response.status = 404;
    ctx.response.body = {
      message: `User "${username}" does not have a password`,
    };
    return;
  }
  const confirmPassword = await bcrypt.compare(
    password,
    user.password,
  );
  if (!confirmPassword) {
    ctx.response.body = 404;
    ctx.response.body = { message: "Incorrect password" };
    return;
  }
  const payload = {
    id: user.id,
    name: user.username,
  };
  const jwt = await create({ alg: "HS512", typ: "JWT" }, { payload }, key);
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
  return;
};
