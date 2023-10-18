import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const getHelloWorld = (ctx: Context) => {
  ctx.response.body = {
    message: `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <h1>Sign Up</h1>
    <form action="" method="POST">
      <label for="username">Username</label>
      <input name="username" placeholder="username" type="text" />
      <label for="password">Password</label>
      <input name="password" type="password" />
      <button>Sign Up</button>
    </form>
  </body>
  </html>`,
  };
};
