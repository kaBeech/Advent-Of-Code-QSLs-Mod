import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {
  createGame,
  createUser,
  deleteGame,
  getAllGames,
  getDayById,
  getDaysByGameId,
  getGameById,
  getUserById,
} from "./db.ts";
import { completePart1 } from "./routes/day/completePart1.ts";
import { completePart2 } from "./routes/day/completePart2.ts";
import { rerollModifierOption } from "./routes/day/rerollModifierOption.ts";
import { rerollChallengeModifier } from "./routes/day/rerollChallengeModifier.ts";
import { rollInitialModifier } from "./routes/day/rollInitialModifier.ts";
import { startNextDay } from "./routes/day/startNextDay.ts";

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
   * Create User
   */
  .post("/user", async (context) => {
    context.response.body = await createUser();
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
  .get("/user/:id/game/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await getGameById(+id);
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
    context.response.body = await createGame(
      +id,
      user!.numberOfGames + 1,
      name,
      year,
      playerName,
    );
  })
  /**
   * Delete Game
   */
  .delete("/user/:id/game/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await deleteGame(+id);
  })
  /**
   * Get all Days for a Game
   */
  .get("/user/:id/game/:id/day", async (context) => {
    const { id } = context.params;
    context.response.body = await getDaysByGameId(+id);
  })
  /**
   * Get a Day
   */
  .get("/user/:id/game/:id/day/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await getDayById(+id);
  })
  /**
   * Start the next Day
   */
  .post("/user/:id/game/:id/day", async (context) => {
    const { id } = context.params;
    context.response.body = await startNextDay(+id);
  })
  /**
   * Roll a Day's initial Challenge Modifier
   */
  .put("/user/:id/game/:id/day/:id/roll", async (context) => {
    const { id } = context.params;
    context.response.body = await rollInitialModifier(+id);
  })
  /**
   * Reroll a Day's Challenge Modifier
   */
  .put("/user/:id/game/:id/day/:id/reroll/modifier", async (context) => {
    const { id } = context.params;
    context.response.body = await rerollChallengeModifier(+id);
  })
  /**
   * Reroll a Day's Modifier Option
   */
  .put("/user/:id/game/:id/day/:id/reroll/option", async (context) => {
    const { id } = context.params;
    context.response.body = await rerollModifierOption(+id);
  })
  /**
   * Complete Part 1 for a Day
   */
  .put("/user/:id/game/:id/day/:id/complete/part1", async (context) => {
    const { id } = context.params;
    context.response.body = await completePart1(+id);
  })
  /**
   * Complete Part 2 for a Day
   */
  .put("/user/:id/game/:id/day/:id/complete/part2", async (context) => {
    const { id } = context.params;
    context.response.body = await completePart2(+id);
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.use((context: Context) => {
  context.response.status = 404;
  context.response.body =
    `404 | Page not found! Requested ${context.request.method} on ${context.request.url}`;
});

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
