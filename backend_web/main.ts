import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v4.0.5/mod.ts";
import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.2/mod.ts";
// import { DashportOak } from "https://deno.land/x/dashport@v1.2.1/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { create } from "https://deno.land/x/djwt@v2.4/mod.ts";

import {
  createGame,
  createUser,
  deleteGame,
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
// import { deserializerA, localStrategy, serializerA } from "./dashportConfig.ts";
import { key } from "./util/apiKey.ts";
import { authenticate } from "./middleware/authenticate.ts";

const githubClientId = "1cfb5aa9850ade3203a3";
// const githubClientId = Deno.env.get("GITHUB_CLIENT_ID");
const githubClientSecret = "3b3de07f53954481c2453993a15af07147261214";
// const githubClientSecret = Deno.env.get("GITHUB_CLIENT_SECRET");

const oauth2Client = new OAuth2Client({
  clientId: githubClientId,
  clientSecret: githubClientSecret,
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

// const app = new Application();
// const router = new Router();

const app = new Application<AppState>();
const router = new Router<AppState>();

// const dashport = new DashportOak(app);

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
   * Dashport signup
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
      // const user = new User({
      //   username: req.body.username,
      //   password: req.body.password
      // });
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
      // ctx.response.redirect("/");
    } catch (err) {
      // return next(err);
      return next;
    }
  })
  /**
   * Login
   */
  .post(
    "/log-in",
    // dashport.authenticate(localStrategy, serializerA, deserializerA),
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
    ctx.state.session.set("userId", userId);
    console.debug(user);
    console.debug(`Hello, ${res.login}!`);
    ctx.response.redirect("/userdata");
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
      // const id = await ctx.cookies.get("id");
      const userData = await getUserByIdWithRelations(userId);
      ctx.response.body = userData;
    },
  )
  .get(
    "/userdata",
    // authenticate,
    async (ctx) => {
      const userId = await ctx.state.session.get("userId") as string;
      // const id = await ctx.cookies.get("id");
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
  /**
   * Create User
   */
  .put("/user/:id", async (ctx) => {
    const { id } = ctx.params;
    ctx.response.body = await createUser(id);
  })
  /**
   * Get User with Relations
   */
  .get("/user/:id", async (ctx) => {
    const { id } = ctx.params;
    const games = await getUserByIdWithRelations(id);
    ctx.response.body = games;
  })
  /**
   * Get All Games (eventually will be Continue Game)
   */
  .get("/user/:id/game", async (ctx) => {
    ctx.response.body = await getAllGames();
  })
  /**
   * Resume Game
   */
  .get("/user/:id/game/:gamenumber", async (ctx) => {
    const { id, gamenumber } = ctx.params;
    const games = await getGamesByUserId(id);
    ctx.response.body = games.find((game) => game.number === +gamenumber);
  })
  /**
   * Start New Game
   */
  .post("/user/:id/game", async (ctx) => {
    const { id } = ctx.params;
    const user = await getUserById(id);
    const { name, year, playerName } = await ctx.request
      .body({
        type: "json",
      })
      .value;
    user!.numberOfGames++;
    await updateUser(user!);
    ctx.response.body = await createGame(
      id,
      user!.numberOfGames,
      name,
      year,
      playerName,
    );
  })
  .post("/game", async (ctx) => {
    const userId = ctx.state.session.get("userId") as string;
    const user = await getUserById(userId);
    const { name, year, playerName } = await ctx.request
      .body({
        type: "json",
      })
      .value;
    user!.numberOfGames++;
    await updateUser(user!);
    ctx.response.body = await createGame(
      userId,
      user!.numberOfGames,
      name,
      year,
      playerName,
    );
  })
  /**
   * Delete Game
   */
  .delete("/user/:id/game/:gamenumber", async (ctx) => {
    const { id, gamenumber } = ctx.params;
    const games = await getGamesByUserId(id);
    const game = games.find((game) => game.number === +gamenumber);
    ctx.response.body = await deleteGame(game!.id);
  })
  .delete("/game/:gamenumber", async (ctx) => {
    const { gamenumber } = ctx.params;
    const userId = ctx.state.session.get("userId") as string;
    const games = await getGamesByUserId(userId);
    const game = games.find((game) => game.number === +gamenumber);
    ctx.response.body = await deleteGame(game!.id);
  })
  /**
   * Get all Days for a Game
   */
  .get("/user/:id/game/:gamenumber/day", async (ctx) => {
    const { id, gamenumber } = ctx.params;
    const userData = await getUserByIdWithRelations(id);
    ctx.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day;
  })
  .get("/game/:gamenumber/day", async (ctx) => {
    const { gamenumber } = ctx.params;
    const userId = ctx.state.session.get("userId") as string;
    const userData = await getUserByIdWithRelations(userId);
    ctx.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day;
  })
  /**
   * Get a Day
   */
  .get("/user/:id/game/:gamenumber/day/:daynumber", async (ctx) => {
    const { id, gamenumber, daynumber } = ctx.params;
    const userData = await getUserByIdWithRelations(id);
    ctx.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day.find((day) => day.number === +daynumber);
  })
  .get("/game/:gamenumber/day/:daynumber", async (ctx) => {
    const { gamenumber, daynumber } = ctx.params;
    const userId = ctx.state.session.get("userId") as string;
    const userData = await getUserByIdWithRelations(userId);
    ctx.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day.find((day) => day.number === +daynumber);
  })
  /**
   * Complete a Game's current Day
   */
  .put("/user/:id/game/:gamenumber/day/complete", async (ctx) => {
    const { id, gamenumber } = ctx.params;
    ctx.response.body = await completeCurrentDay(id, +gamenumber);
  })
  .put("/game/:gamenumber/day/complete", async (ctx) => {
    const { gamenumber } = ctx.params;
    const userId = ctx.state.session.get("userId") as string;
    ctx.response.body = await completeCurrentDay(userId, +gamenumber);
  }) /**
   * Start the next Day
   */
  .put("/user/:id/game/:gamenumber/day/:daynumber", async (ctx) => {
    const { id, gamenumber, daynumber } = ctx.params;
    ctx.response.body = await startNextDay(id, +gamenumber, +daynumber);
  })
  .put("/game/:gamenumber/day/:daynumber", async (ctx) => {
    const { gamenumber, daynumber } = ctx.params;
    const userId = ctx.state.session.get("userId") as string;
    ctx.response.body = await startNextDay(userId, +gamenumber, +daynumber);
  })
  /**
   * Roll a Day's initial Challenge Modifier
   */
  .put("/user/:id/game/:gamenumber/day/:daynumber/roll", async (ctx) => {
    const { id, gamenumber, daynumber } = ctx.params;
    ctx.response.body = await rollInitialModifier(
      id,
      +gamenumber,
      +daynumber,
    );
  })
  .put("/game/:gamenumber/day/:daynumber/roll", async (ctx) => {
    const { gamenumber, daynumber } = ctx.params;
    const userId = ctx.state.session.get("userId") as string;
    ctx.response.body = await rollInitialModifier(
      userId,
      +gamenumber,
      +daynumber,
    );
  })
  /**
   * Reroll a Day's Challenge Modifier
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/reroll/modifier",
    async (ctx) => {
      const { id, gamenumber, daynumber } = ctx.params;
      ctx.response.body = await rerollChallengeModifier(
        id,
        +gamenumber,
        +daynumber,
      );
    },
  )
  .put(
    "/game/:gamenumber/day/:daynumber/reroll/modifier",
    async (ctx) => {
      const { gamenumber, daynumber } = ctx.params;
      const userId = ctx.state.session.get("userId") as string;
      ctx.response.body = await rerollChallengeModifier(
        userId,
        +gamenumber,
        +daynumber,
      );
    },
  )
  /**
   * Reroll a Day's Modifier Option
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/reroll/option",
    async (ctx) => {
      const { id, gamenumber, daynumber } = ctx.params;
      ctx.response.body = await rerollModifierOption(
        id,
        +gamenumber,
        +daynumber,
      );
    },
  )
  .put(
    "/game/:gamenumber/day/:daynumber/reroll/option",
    async (ctx) => {
      const { gamenumber, daynumber } = ctx.params;
      const userId = ctx.state.session.get("userId") as string;
      ctx.response.body = await rerollModifierOption(
        userId,
        +gamenumber,
        +daynumber,
      );
    },
  )
  /**
   * Complete Part 1 for a Day
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/complete/part1",
    async (ctx) => {
      const { id, gamenumber, daynumber } = ctx.params;
      ctx.response.body = await completePart1(id, +gamenumber, +daynumber);
    },
  )
  .put(
    "/game/:gamenumber/day/:daynumber/complete/part1",
    async (ctx) => {
      const { gamenumber, daynumber } = ctx.params;
      const userId = ctx.state.session.get("userId") as string;
      ctx.response.body = await completePart1(userId, +gamenumber, +daynumber);
    },
  )
  /**
   * Complete Part 2 for a Day
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/complete/part2",
    async (ctx) => {
      const { id, gamenumber, daynumber } = ctx.params;
      ctx.response.body = await completePart2(id, +gamenumber, +daynumber);
    },
  )
  .put(
    "/game/:gamenumber/day/:daynumber/complete/part2",
    async (ctx) => {
      const { gamenumber, daynumber } = ctx.params;
      const userId = ctx.state.session.get("userId") as string;
      ctx.response.body = await completePart2(userId, +gamenumber, +daynumber);
    },
  );

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
