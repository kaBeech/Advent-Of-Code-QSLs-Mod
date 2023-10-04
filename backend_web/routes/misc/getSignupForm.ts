export const getSignupForm = (ctx: any) => {
  ctx.response.body = `<html lang="en">
      <head>
        <meta charset="UTF-8">
        <title></title>
      </head>
      <body><h1>Hello World! You have successfully pinged the Advent Of Code: Xtreme Xmas API!</h1>
      <h1>Please log in:</h1>
      <form action="/log-in" method="POST">
        <label for="username">Username</label>
        <input name="username" placeholder="username" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <button>Log In</button>
      </form>
      </body>
      </html>
      `;
};
