import { PrismaClient } from "./generated/client/deno/edge.ts";
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { rollChallengeModifier } from "./components/rollChallengeModifier.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});
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
   * Game CRUD
   */
  .get("/game", async (context) => {
    const games = await prisma.game.findMany();
    context.response.body = games;
  })
  .get("/game/:id", async (context) => {
    const { id } = context.params;
    const game = await prisma.game.findUnique({
      where: {
        id: Number(id),
      },
    });
    context.response.body = game;
  })
  .post("/game", async (context) => {
    const { name, playerName } = await context.request.body({ type: "json" })
      .value;
    const result = await prisma.game.create({
      data: {
        name,
        player_name: playerName,
      },
    });
    context.response.body = result;
  })
  .delete("/game/:id", async (context) => {
    const { id } = context.params;
    const game = await prisma.game.delete({
      where: {
        id: Number(id),
      },
    });
    context.response.body = game;
  })
  /**
   * Roll
   */
  .get("/roll/challenge_modifier", async (context) => {
    const challengeModifiers = await prisma.challengeModifier.findMany();
    context.response.body = rollChallengeModifier(challengeModifiers);
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
