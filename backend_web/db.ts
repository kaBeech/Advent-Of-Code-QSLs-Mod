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

export async function updateGame(
  id: number,
  name: string,
  playerName: string,
  currentRerollTokens: number,
  rerollTokensGaines: number,
  rerollTokensSpent: number,
  repositoryLink: string,
  progressSheetLink: string,
  days: Day[],
) {
  const result = await prisma.game.update({
    where: {
      id,
    },
    data: {
      name,
      player_name: playerName,
      current_reroll_tokens: currentRerollTokens,
      reroll_tokens_gained: rerollTokensGaines,
      reroll_tokens_spent: rerollTokensSpent,
      repository_link: repositoryLink,
      progress_sheet_link: progressSheetLink,
      days,
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

export async function updateDay(
  id: number,
  part1Completed?: boolean,
  part2Completed?: boolean,
  modifier?: ChallengeModifier,
  mainRerollsUsed?: number,
  secondaryRerollsUsed?: number,
) {
  const result = await prisma.day.update({
    where: {
      id,
    },
    data: {
      part1_completed: part1Completed,
      part2_completed: part2Completed,
      modifier,
      main_rerolls_used: mainRerollsUsed,
      secondary_rerolls_used: secondaryRerollsUsed,
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
