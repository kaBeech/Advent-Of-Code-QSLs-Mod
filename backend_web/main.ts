import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v4.0.5/mod.ts";
import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.2/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { create } from "https://deno.land/x/djwt@v2.4/mod.ts";

import {
  createGame,
  createUser,
  getAllChallengeModifiers,
  getAllGames,
  getGamesByUserId,
  getUserById,
  getUserByIdWithRelations,
  getUserByUsername,
  updateUser,
  upsertUser,
} from "./db.ts";
import { completePart1 } from "./routes/day/completePart1.ts";
import { completePart2 } from "./routes/day/completePart2.ts";
import { rerollModifierOption } from "./routes/day/rerollModifierOption.ts";
import { rerollChallengeModifier } from "./routes/day/rerollChallengeModifier.ts";
import { rollInitialModifier } from "./routes/day/rollInitialModifier.ts";
import { startNextDay } from "./routes/day/startNextDay.ts";
import { completeCurrentDay } from "./routes/game/completeCurrentDay.ts";
import { key } from "./util/apiKey.ts";
import { authenticate } from "./middleware/authenticate.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { getDay } from "./routes/day/getDay.ts";
import { getAllDays } from "./routes/game/getAllDays.ts";
import { deleteGame } from "./routes/game/deleteGame.ts";
import { startNewGame } from "./routes/game/startNewGame.ts";
import { getGame } from "./routes/game/getGame.ts";
import { getGames } from "./routes/user/getGames.ts";

const _dotEnv = await config();
const githubClientId = Deno.env.get("GITHUB_CLIENT_ID");
const githubClientSecret = Deno.env.get("GITHUB_CLIENT_SECRET");

const oauth2Client = new OAuth2Client({
  clientId: githubClientId!,
  clientSecret: githubClientSecret!,
  authorizationEndpointUri: "https://github.com/login/oauth/authorize",
  tokenUri: "https://github.com/login/oauth/access_token",
  redirectUri: "http://127.0.0.1:8000/oauth2/callback",
  defaults: {
    scope: "user:read",
  },
});

type AppState = {
  session: Session;
};

const app = new Application<AppState>();
const router = new Router<AppState>();

router
  /**
   * Hello World!
   */
  .get("/", (ctx) => {
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
  })
  /**
   * Signup
   */
  .get("/sign-up", (ctx) =>
    ctx.response.body = `<html lang="en">
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
  </html>`)
  .post("/sign-up", async (ctx, next) => {
    try {
      const body = await ctx.request.body().value;
      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(body.get("password")!, salt);
      const user = await createUser(
        Math.floor(Math.random() * 1000000000).toString(),
        body.get("username")!,
        hashedPassword,
      );
      const _result = user;
      ctx.response.status = 201;
      ctx.response.body = {
        message: "User created",
        userId: user.id,
        user: user.username,
      };
    } catch (err) {
      return next;
    }
  })
  /**
   * Login
   */
  .post(
    "/log-in",
    async (ctx: any, next: any) => {
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
    },
  )
  .get("/login", async (ctx) => {
    // Construct the URL for the authorization redirect and get a PKCE codeVerifier
    const { uri, codeVerifier } = await oauth2Client.code.getAuthorizationUri();

    // Store both the state and codeVerifier in the user session
    ctx.state.session.flash("codeVerifier", codeVerifier);

    // Redirect the user to the authorization endpoint
    ctx.response.redirect(uri);
  })
  .get("/oauth2/callback", async (ctx) => {
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
  })
  /**
   * Log Out
   */
  .get(
    "/logout",
    (ctx) => {
      ctx.response.body = "You've logged out";
    },
  )
  /**
   * Get User with Relations
   */
  .get(
    "/userdata-jwt",
    authenticate,
    async (ctx) => {
      const userId = await ctx.state.session.get("userId") as string;
      const userData = await getUserByIdWithRelations(userId);
      ctx.response.body = userData;
    },
  )
  .get(
    "/userdata",
    // authenticate,
    async (ctx) => {
      const userId = await ctx.state.session.get("userId") as string;
      const userData = await getUserByIdWithRelations(userId);
      ctx.response.body = userData;
    },
  )
  /**
   * Get All Challenge Modifiers
   */
  .get("/modifier", async (ctx) => {
    ctx.response.body = await getAllChallengeModifiers();
  })
  .get("/user/:id/game", getGames)
  .get("/user/:id/game/:gamenumber", getGame)
  .post("/game", startNewGame)
  .delete("/game/:gamenumber", deleteGame)
  .get("/game/:gamenumber/day", getAllDays)
  .get("/game/:gamenumber/day/:daynumber", getDay)
  .put("/game/:gameNumber/day/complete", completeCurrentDay)
  .put("/game/:gameNumber/day/:dayNumber", startNextDay)
  .put("/game/:gameNumber/day/:dayNumber/roll", rollInitialModifier)
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/modifier",
    rerollChallengeModifier,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/option",
    rerollModifierOption,
  )
  .put("/game/:gameNumber/day/:dayNumber/complete/part1", completePart1)
  .put("/game/:gameNumber/day/:dayNumber/complete/part2", completePart2);

app.use(Session.initMiddleware());
app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body =
    `404 | Page not found! Requested ${ctx.request.method} on ${ctx.request.url}`;
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
