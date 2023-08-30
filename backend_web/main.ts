import { PrismaClient } from "./generated/client/deno/edge.ts";
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

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
  .get("/", (context) => {
    context.response.body =
      "You have successfully pinged the Advent Of Code QSL's Mod API!";
  })
  .get("/challenge_modifier", async (context) => {
    const challengeModifiers = await prisma.challengeModifier.findMany();
    context.response.body = challengeModifiers;
  })
  .get("/challengeModifier/:id", async (context) => {
    const { id } = context.params;
    const challengeModifier = await prisma.challengeModifier.findUnique({
      where: {
        id: Number(id),
      },
    });
    context.response.body = challengeModifier;
  })
  .post("/challengeModifier", async (context) => {
    const { name, text } = await context.request.body({ type: "json" }).value;
    const result = await prisma.challengeModifier.create({
      data: {
        name,
        text,
      },
    });
    context.response.body = result;
  })
  .delete("/challengeModifier/:id", async (context) => {
    const { id } = context.params;
    const challengeModifier = await prisma.challengeModifier.delete({
      where: {
        id: Number(id),
      },
    });
    context.response.body = challengeModifier;
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
