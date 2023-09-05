import { PrismaClient } from "./generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { ChallengeModifier, Day } from "./generated/client/deno/index.d.ts";

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
      id,
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
      playerName,
      year,
    },
  });
  return result;
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

export async function updateGame(
  id: number,
  name: string,
  playerName: string,
  currentRerollTokens: number,
  rerollTokensGained: number,
  rerollTokensSpent: number,
  repositoryLink: string,
  progressSheetLink: string,
) {
  const result = await prisma.game.update({
    where: {
      id,
    },
    data: {
      name,
      playerName,
      currentRerollTokens,
      rerollTokensGained,
      rerollTokensSpent,
      repositoryLink,
      progressSheetLink,
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

export async function getDayById(id: number) {
  const day = await prisma.day.findUnique({
    where: {
      id,
    },
  });
  return day;
}

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

export async function updateDayPart1CompletionStatus(
  id: number,
  part1Completed: boolean,
) {
  const result = await prisma.day.update({
    where: {
      id,
    },
    data: {
      part1Completed,
    },
  });
  return result;
}

export async function updateDayPart2CompletionStatus(
  id: number,
  part2Completed: boolean,
) {
  const result = await prisma.day.update({
    where: {
      id,
    },
    data: {
      part2Completed,
    },
  });
  return result;
}

export async function updateDayChallengeModifier(
  id: number,
  modifier: ChallengeModifier,
) {
  const result = await prisma.day.update({
    where: {
      id,
    },
    data: {
      challengeModifierId: modifier.id,
    },
  });
  return result;
}

export async function updateDayMainRerollsUsed(
  id: number,
  mainRerollsUsed: number,
) {
  const result = await prisma.day.update({
    where: {
      id,
    },
    data: {
      mainRerollsUsed,
    },
  });
  return result;
}

export async function updateDaySecondaryRerollsUsed(
  id: number,
  secondaryRerollsUsed: number,
) {
  const result = await prisma.day.update({
    where: {
      id,
    },
    data: {
      secondaryRerollsUsed,
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
