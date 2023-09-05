import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { rollChallengeModifier } from "./components/rollChallengeModifier.ts";
import { createGame, deleteGame, getAllGames, getGameById } from "./db.ts";

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
   * See All Games (eventually will be Continue Game)
   */
  .get("/game", (context) => {
    context.response.body = getAllGames();
  })
  /**
   * Resume Game
   */
  .get("/game/:id", (context) => {
    const { id } = context.params;
    context.response.body = getGameById(+id);
  })
  /**
   * Start New Game
   */
  .post("/game", async (context) => {
    const { name, playerName, year } = await context.request.body({
      type: "json",
    })
      .value;
    context.response.body = createGame(name, playerName, year);
  })
  /**
   * Delete Game
   */
  .delete("/game/:id", (context) => {
    const { id } = context.params;
    context.response.body = deleteGame(+id);
  })
  /**
   * Roll a Challenge Modifier
   */
  .get("/roll/challenge_modifier", (context) => {
    context.response.body = rollChallengeModifier();
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
