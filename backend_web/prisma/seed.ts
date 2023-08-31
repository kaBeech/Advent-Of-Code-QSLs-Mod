import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const challengeModifierData: Prisma.ChallengeModifierCreateInput[] = [
  {
    name: "new_codebase_language",
    text: "in a programming language not yet used in this codebase",
  },
  {
    name: "new_language",
    text: "in a programming language you've never used before",
  },
  {
    name: "quickly",
    text: "as quickly as you can",
  },
  {
    name: "language_box_1",
    text: "using a random programming language from Language Box 1",
  },
  {
    name: "language_box_2",
    text: "using a random programming language from Language Box 2",
  },
  {
    name: "language_box_3",
    text: "using a random programming language from Language Box 3",
  },
  {
    name: "testing",
    text: "with thorough testing",
  },
  {
    name: "error_handling",
    text: "with thorough error handling",
  },
];

for (const u of challengeModifierData) {
  const challengeModifier = await prisma.challengeModifier.create({
    data: u,
  });
  console.log(`Created challenge modifier with id: ${challengeModifier.id}`);
}

console.log(`Seeding finished.`);

await prisma.$disconnect();
