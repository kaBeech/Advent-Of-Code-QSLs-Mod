import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {
  createGame,
  deleteGame,
  getAllGames,
  getDayById,
  getDaysByGameId,
  getGameById,
} from "./db.ts";
import { DayController } from "./components/DayController.ts";
import { GameController } from "./components/GameController.ts";

const app = new Application();
const router = new Router();

router
  /**
   * Hello World!
   */
  .get("/", (context) => {
    context.response.body =
      "You have successfully pinged the Advent Of Code QSL's Mod API!";
  })
  /**
   * Get All Games (eventually will be Continue Game)
   */
  .get("/game", async (context) => {
    context.response.body = await getAllGames();
  })
  /**
   * Resume Game
   */
  .get("/game/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await getGameById(+id);
  })
  /**
   * Start New Game
   */
  .post("/game", async (context) => {
    const { name, playerName, year } = await context.request.body({
      type: "json",
    })
      .value;
    context.response.body = await createGame(name, playerName, year);
  })
  /**
   * Delete Game
   */
  .delete("/game/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await deleteGame(+id);
  })
  /**
   * Get All Days for a Game
   */
  .get("/game/:id/day", async (context) => {
    const { id } = context.params;
    context.response.body = await getDaysByGameId(+id);
  })
  /**
   * Get a Day
   */
  .get("/day/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await getDayById(+id);
  })
  /**
   * Start the next Day
   */
  .post("/game/:id/start_next_day", async (context) => {
    const { id } = context.params;
    const game = await getGameById(+id);
    const day = GameController(game!).startNextDay();
    context.response.body = day;
  })
  /**
   * Roll a Day's initial Challenge Modifier
   */
  .put("/day/:id/roll/initial", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    await DayController(day!).rollInitialChallengeModifier();
    context.response.body = day;
  })
  /**
   * Reroll a Day's Challenge Modifier
   */
  .put("/day/:id/roll/reroll_challenge_modifier", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    await DayController(day!).rerollChallengeModifier();
    context.response.body = day;
  })
  /**
   * Reroll a Day's Modifier Option
   */
  .put("/day/:id/roll/reroll_modifier_option", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    await DayController(day!).rerollModifierOption();
    context.response.body = day;
  })
  /**
   * Complete Part 1 for a Day
   */
  .put("/day/:id/complete_part_1", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    await DayController(day!).completePart1();
    context.response.body = day;
  })
  /**
   * Complete Part 2 for a Day
   */
  .put("/day/:id/complete_part_2", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    await DayController(day!).completePart2();
    context.response.body = day;
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
