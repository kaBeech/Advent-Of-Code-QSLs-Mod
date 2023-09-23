import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
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
} from "./db.ts";
import { completePart1 } from "./routes/day/completePart1.ts";
import { completePart2 } from "./routes/day/completePart2.ts";
import { rerollModifierOption } from "./routes/day/rerollModifierOption.ts";
import { rerollChallengeModifier } from "./routes/day/rerollChallengeModifier.ts";
import { rollInitialModifier } from "./routes/day/rollInitialModifier.ts";
import { startNextDay } from "./routes/day/startNextDay.ts";
import { completeCurrentDay } from "./routes/game/completeCurrentDay.ts";

const app = new Application();
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
   * Get All Challenge Modifiers
   */
  .get("/modifier", async (context) => {
    context.response.body = await getAllChallengeModifiers();
  })
  /**
   * Create User
   */
  .post("/user", async (context) => {
    context.response.body = await createUser();
  })
  /**
   * Get User with Relations
   */
  .get("/user/:id", async (context) => {
    const { id } = context.params;
    const games = await getUserByIdWithRelations(+id);
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
    const games = await getGamesByUserId(+id);
    context.response.body = games.find((game) => game.number === +gamenumber);
  })
  /**
   * Start New Game
   */
  .post("/user/:id/game", async (context) => {
    const { id } = context.params;
    const user = await getUserById(+id);
    const { name, year, playerName } = await context.request
      .body({
        type: "json",
      })
      .value;
    user!.numberOfGames++;
    await updateUser(user!);
    context.response.body = await createGame(
      +id,
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
    const games = await getGamesByUserId(+id);
    const game = games.find((game) => game.number === +gamenumber);
    context.response.body = await deleteGame(game!.id);
  })
  /**
   * Get all Days for a Game
   */
  .get("/user/:id/game/:gamenumber/day", async (context) => {
    const { id, gamenumber } = context.params;
    const userData = await getUserByIdWithRelations(+id);
    context.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day;
  })
  /**
   * Get a Day
   */
  .get("/user/:id/game/:gamenumber/day/:daynumber", async (context) => {
    const { id, gamenumber, daynumber } = context.params;
    const userData = await getUserByIdWithRelations(+id);
    context.response.body = userData.Game.find((game) =>
      game.number === +gamenumber
    )!.Day.find((day) => day.number === +daynumber);
  })
  /**
   * Complete a Game's current Day
   */
  .put("/user/:id/game/:gamenumber/day/complete", async (context) => {
    const { id, gamenumber } = context.params;
    context.response.body = await completeCurrentDay(+id, +gamenumber);
  })
  /**
   * Start the next Day
   */
  .put("/user/:id/game/:gamenumber/day/:daynumber", async (context) => {
    const { id, gamenumber, daynumber } = context.params;
    context.response.body = await startNextDay(+id, +gamenumber, +daynumber);
  })
  /**
   * Roll a Day's initial Challenge Modifier
   */
  .put("/user/:id/game/:gamenumber/day/:daynumber/roll", async (context) => {
    const { id, gamenumber, daynumber } = context.params;
    context.response.body = await rollInitialModifier(
      +id,
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
        +id,
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
        +id,
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
      context.response.body = await completePart1(+id, +gamenumber, +daynumber);
    },
  )
  /**
   * Complete Part 2 for a Day
   */
  .put(
    "/user/:id/game/:gamenumber/day/:daynumber/complete/part2",
    async (context) => {
      const { id, gamenumber, daynumber } = context.params;
      context.response.body = await completePart2(+id, +gamenumber, +daynumber);
    },
  );

app.use(router.routes());
app.use(router.allowedMethods());

app.use((context: Context) => {
  context.response.status = 404;
  context.response.body =
    `404 | Page not found! Requested ${context.request.method} on ${context.request.url}`;
});

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
