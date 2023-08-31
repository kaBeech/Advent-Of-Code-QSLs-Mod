import { PrismaClient } from "./generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

/**
 * Game CRUD
 */

export async function getAllGames() {
  const games = await prisma.game.findMany();
  return games;
}

export async function getGameById(id: number) {
  const game = await prisma.game.findUnique({
    where: {
      id: Number(id),
    },
  });
  return game;
}

export async function createGame(
  name: string,
  playerName: string,
  year: number,
) {
  const result = await prisma.game.create({
    data: {
      name,
      player_name: playerName,
      year,
    },
  });
  return result;
}

export async function upsertGame(name: string, playerName: string) {
  const result = await prisma.game.upsert({
    where: {
      name,
    },
    update: {},
    create: {
      name,
      player_name: playerName,
    },
  });
  return result;
}

export async function deleteGame(id: number) {
  const result = await prisma.game.delete({
    where: {
      id: Number(id),
    },
  });
  return result;
}

/**
 * Challenge Modifier CRUD
 */

export async function getAllChallengeModifiers() {
  const challengeModifiers = await prisma.challengeModifier.findMany();
  return challengeModifiers;
}
