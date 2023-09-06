import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {
  createDay,
  createGame,
  deleteGame,
  getAllChallengeModifiers,
  getAllGames,
  getAllModifierOptions,
  getDayById,
  getDaysByGameId,
  getGameById,
  getModifierOptionsByChallengeModifierId,
  updateDay,
  updateGame,
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
   * Get all Days for a Game
   */
  .get("/game/:id/day", async (context) => {
    const { id } = context.params;
    context.response.body = await getDaysByGameId(+id);
  })
  /**
   * Get a Day
   */
  .get("/game/:id/day/:id", async (context) => {
    const { id } = context.params;
    context.response.body = await getDayById(+id);
  })
  /**
   * Start the next Day
   */
  .post("/game/:id/day", async (context) => {
    const { id } = context.params;
    const game = await getGameById(+id);
    const updatedGame = GameController(game!).startNextDay();
    const nextDay = await createDay(updatedGame.id, updatedGame.currentDay);
    await updateGame(updatedGame);
    context.response.body = nextDay;
  })
  /**
   * Roll a Day's initial Challenge Modifier
   */
  .put("/game/:id/day/:id/roll", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    const game = await getGameById(day!.gameId);
    const challengeModifiers = await getAllChallengeModifiers();
    const modifierOptions = await getAllModifierOptions();
    const updatedDay = await DayController(day!).rollInitialChallengeModifier(
      game!,
      challengeModifiers,
      modifierOptions,
    );
    await updateDay(updatedDay);
    context.response.body = updatedDay;
  })
  /**
   * Reroll a Day's Challenge Modifier
   */
  .put("/game/:id/day/:id/reroll/modifier", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    const game = await getGameById(day!.gameId);
    const challengeModifiers = await getAllChallengeModifiers();
    const modifierOptions = await getAllModifierOptions();
    const updatedDay = await DayController(day!).rerollChallengeModifier(
      game!,
      challengeModifiers,
      modifierOptions,
    );
    const updatedGame = GameController(game!).spendRerollTokens(2);
    await updateDay(updatedDay);
    await updateGame(updatedGame);
    context.response.body = updatedDay;
  })
  /**
   * Reroll a Day's Modifier Option
   */
  .put("/game/:id/day/:id/reroll/option", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    const game = await getGameById(day!.gameId);
    const modifierOptions = await getModifierOptionsByChallengeModifierId(
      day!.challengeModifierId!,
    );
    const updatedDay = await DayController(day!).rerollModifierOption(
      game!.currentDay,
      modifierOptions,
      false,
      game!,
    );
    const updatedGame = GameController(game!).spendRerollTokens(1);
    await updateDay(updatedDay);
    await updateGame(updatedGame);
    context.response.body = updatedDay;
  })
  /**
   * Complete Part 1 for a Day
   */
  .put("/game/:id/day/:id/complete/part1", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    const game = await getGameById(day!.gameId);
    const updatedDay = DayController(day!).completePart1(game!.currentDay);
    const updatedGame = GameController(game!).gainRerollTokens(1);
    await updateDay(updatedDay);
    await updateGame(updatedGame);
    context.response.body = updatedDay;
  })
  /**
   * Complete Part 2 for a Day
   */
  .put("/game/:id/day/:id/complete/part2", async (context) => {
    const { id } = context.params;
    const day = await getDayById(+id);
    const game = await getGameById(day!.gameId);
    const updatedDay = await DayController(day!).completePart2(
      game!.currentDay,
    );
    const updatedGame = GameController(game!).gainRerollTokens(1);
    await updateDay(updatedDay);
    await updateGame(updatedGame);
    context.response.body = updatedDay;
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
