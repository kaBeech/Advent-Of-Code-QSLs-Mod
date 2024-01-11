import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

await prisma.day.deleteMany({
  where: { Game: { User: { id: "reddit1" } } },
});

await prisma.game.deleteMany({
  where: { User: { id: "reddit1" } },
});

await prisma.$disconnect();
