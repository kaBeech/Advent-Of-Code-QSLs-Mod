import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v4.0.5/mod.ts";
import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.2/mod.ts";

import {
  createGame,
  createUser,
  deleteGame,
  getAllChallengeModifiers,
  getAllGames,
  getGamesByUserId,
  getUserById,
  getUserByIdWithRelations,
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

const app = new Application<AppState>();
const router = new Router();

router
  /**
   * Hello World!
   */
  .get("/", (context) => {
    context.response.body =
      "You have successfully pinged the Advent Of Code: Xtreme Xmas API!";
  })
  /**
   * Login
   */
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
    ctx.state.session.flash("userId", userId);
    console.debug(user);
    console.log(res);
    console.debug(`Hello, ${res.login}!`);
    ctx.response.redirect("/userdata");
  })
  /**
   * Log Out
   */
  .get(
    "/logout",
    (ctx: any, next: any) => {
      ctx.response.body = "You've logged out";
    },
  )
  /**
   * Get User with Relations
   */
  .get(
    "/userdata",
    async (ctx) => {
      const userId = ctx.state.session.get("userId");
      const userData = await getUserByIdWithRelations(userId);
      ctx.response.body = userData;
    },
  ) /**
   * Get All Challenge Modifiers
   */
  .get("/modifier", async (context) => {
    context.response.body = await getAllChallengeModifiers();
  })
  /**
   * Create User
   */
  .put("/user/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await createUser(id);
  })
  /**
   * Get User with Relations
   */
  .get("/user/:id", async (context) => {
    const { id } = context.params;
    const games = await getUserByIdWithRelations(id);
    context.response.body = games;
  })
  /**
   * Get All Games (eventually will be Continue Game)
   */
  .get("/user/:id/game", async (context) => {
    context.response.body = await getAllGames();
  })
  /**
   * Resume Game
   */
  .get("/user/:id/game/:gamenumber", async (context) => {
    const { id, gamenumber } = context.params;
    const games = await getGamesByUserId(id);
    context.response.body = games.find((game) => game.number === +gamenumber);
  })
  /**
   * Start New Game
   */
  .post("/user/:id/game", async (context) => {
    const { id } = context.params;
    const user = await getUserById(id);
    const { name, year, playerName } = await context.request
      .body({
        type: "json",
      })
      .value;
    user!.numberOfGames++;
    await updateUser(user!);
    context.response.body = await createGame(
      id,
      user!.numberOfGames,
      name,
      year,
      playerName,
    );
  })
  /**
   * Delete Game
   */
  .delete("/user/:id/game/:gamenumber", async (context) => {
    const { id, gamenumber } = context.params;
    const games = await getGamesByUserId(id);
    const game = games.find((game) => game.number === +gamenumber);
    context.response.body = await deleteGame(game!.id);
  })
  /**
   * Get all Days for a Game
   */
  .get("/user/:id/game/:gamenumber/day", async (context) => {
    const { id, gamenumber } = context.params;
    const userData = await getUserByIdWithRelations(id);
    context.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day;
  })
  /**
   * Get a Day
   */
  .get("/user/:id/game/:gamenumber/day/:daynumber", async (context) => {
    const { id, gamenumber, daynumber } = context.params;
    const userData = await getUserByIdWithRelations(id);
    context.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day.find((day) => day.number === +daynumber);
  })
  /**
   * Complete a Game's current Day
   */
  .put("/user/:id/game/:gamenumber/day/complete", async (context) => {
    const { id, gamenumber } = context.params;
    context.response.body = await completeCurrentDay(id, +gamenumber);
  })
  /**
   * Start the next Day
   */
  .put("/user/:id/game/:gamenumber/day/:daynumber", async (context) => {
    const { id, gamenumber, daynumber } = context.params;
    context.response.body = await startNextDay(id, +gamenumber, +daynumber);
  })
  /**
   * Roll a Day's initial Challenge Modifier
   */
  .put("/user/:id/game/:gamenumber/day/:daynumber/roll", async (context) => {
    const { id, gamenumber, daynumber } = context.params;
    context.response.body = await rollInitialModifier(
      id,
      +gamenumber,
      +daynumber,
    );
  })
  /**
   * Reroll a Day's Challenge Modifier
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/reroll/modifier",
    async (context) => {
      const { id, gamenumber, daynumber } = context.params;
      context.response.body = await rerollChallengeModifier(
        id,
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
    async (context) => {
      const { id, gamenumber, daynumber } = context.params;
      context.response.body = await rerollModifierOption(
        id,
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
    async (context) => {
      const { id, gamenumber, daynumber } = context.params;
      context.response.body = await completePart1(id, +gamenumber, +daynumber);
    },
  )
  /**
   * Complete Part 2 for a Day
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/complete/part2",
    async (context) => {
      const { id, gamenumber, daynumber } = context.params;
      context.response.body = await completePart2(id, +gamenumber, +daynumber);
    },
  );

app.use(Session.initMiddleware());
app.use(router.routes());
app.use(router.allowedMethods());

app.use((context: Context) => {
  context.response.status = 404;
  context.response.body =
    `404 | Page not found! Requested ${context.request.method} on ${context.request.url}`;
});

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
