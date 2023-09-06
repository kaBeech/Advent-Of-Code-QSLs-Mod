import { Day, Game, PrismaClient } from "./generated/client/deno/edge.ts";
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

export async function createGame(
  name: string,
  playerName: string,
  year: number,
) {
  const result = await prisma.game.create({
    data: {
      name,
      playerName,
      year,
    },
  });
  return result;
}

export async function getAllGames() {
  const games = await prisma.game.findMany();
  return games;
}

export async function getGameById(id: number) {
  const game = await prisma.game.findUnique({
    where: {
      id,
    },
  });
  return game;
}

export async function upsertGame(
  name: string,
  playerName: string,
  year: number,
) {
  const result = await prisma.game.upsert({
    where: {
      name,
    },
    update: {},
    create: {
      name,
      playerName,
      year,
    },
  });
  return result;
}

export async function updateGame(game: Game) {
  const result = await prisma.game.update({
    where: {
      id: game.id,
    },
    data: {
      ...game,
    },
  });
  return result;
}

export async function deleteGame(id: number) {
  const result = await prisma.game.delete({
    where: {
      id,
    },
  });
  return result;
}

/**
 * Day CRUD
 */

export async function createDay(
  gameId: number,
  dayNumber: number,
) {
  const result = await prisma.day.create({
    data: {
      number: dayNumber,
      gameId,
    },
  });
  return result;
}

export async function getDayById(id: number) {
  const day = await prisma.day.findUnique({
    where: {
      id,
    },
  });
  return day;
}

export async function getDaysByGameId(gameId: number) {
  const days = await prisma.day.findMany({
    where: {
      gameId,
    },
  });
  return days;
}

export async function updateDay(day: Day) {
  const result = await prisma.day.update({
    where: {
      id: day.id,
    },
    data: {
      ...day,
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

/**
 * Modifier Option CRUD
 */

export async function getModifierOptionsByChallengeModifierId(
  challengeModifierId: number,
) {
  const modifierOptions = await prisma.modifierOption.findMany({
    where: {
      challengeModifierId,
    },
  });
  return modifierOptions;
}
