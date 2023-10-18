import { Day, Game, PrismaClient, User } from "./generated/client/deno/edge.ts";
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
 * User CRUD
 */

export async function createUser(
  id: string,
  username?: string,
  password?: string,
) {
  const result = await prisma.user.create({
    data: {
      id,
      username,
      password,
    },
  });
  return result;
}

export async function upsertUser(
  id: string,
  username?: string,
  password?: string,
  serializedId?: string,
) {
  const result = await prisma.user.upsert({
    where: {
      id,
    },
    update: {
      username,
      password,
      serializedId,
    },
    create: {
      id,
      username,
      password,
      serializedId,
    },
  });
  return result;
}

export async function getUserByUsername(username: string) {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      username,
    },
  });
  return user;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return user;
}

export async function getUserBySerializedId(serializedId: string) {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      serializedId,
    },
  });
  return user;
}

export async function updateUser(user: User) {
  const result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      numberOfGames: user.numberOfGames,
    },
  });
  return result;
}

export async function deleteUser(id: string) {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
}

/**
 * Game CRUD
 */

export async function createGame(
  userId: string,
  number: number,
  name: string,
  year: number,
  playerName?: string,
) {
  const result = await prisma.game.create({
    data: {
      userId,
      number,
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
  const game = await prisma.game.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return game;
}

export async function getUserByIdWithRelations(
  userId: string,
) {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
    include: {
      Game: {
        include: {
          Day: {
            include: {
              ChallengeModifier: {
                include: {
                  ModifierOption: true,
                },
              },
              ModifierOption: true,
            },
          },
        },
      },
    },
  });
  return user;
}

export async function getGameByNumberAndUserIdWithRelations(
  userId: string,
  gameNumber: number,
) {
  const game = await prisma.game.findFirstOrThrow({
    where: {
      userId,
      number: gameNumber,
    },
    include: {
      Day: {
        include: {
          ChallengeModifier: {
            include: {
              ModifierOption: true,
            },
          },
          ModifierOption: true,
        },
      },
    },
  });
  return game;
}

export async function getGamesByUserId(
  userId: string,
) {
  const games = await prisma.game.findMany({
    where: {
      userId,
    },
  });
  return games;
}

export async function updateGame(game: Game) {
  const result = await prisma.game.update({
    where: {
      id: game.id,
    },
    data: {
      name: game.name,
      playerName: game.playerName,
      currentDay: game.currentDay,
      currentDayCompleted: game.currentDayCompleted,
      currentRerollTokens: game.currentRerollTokens,
      rerollTokensSpent: game.rerollTokensSpent,
      repositoryLink: game.repositoryLink,
      progressSheetLink: game.progressSheetLink,
      public: game.public,
      publicProfileId: game.publicProfileId,
      score: game.score,
      rankId: game.rankId,
      dateCompleted: game.dateCompleted,
    },
  });
  return result;
}

export async function deleteGameById(id: number) {
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
  userId: string,
  gameId: number,
  gameNumber: number,
  dayNumber: number,
) {
  const result = await prisma.day.create({
    data: {
      userId,
      gameId,
      gameNumber,
      number: dayNumber,
    },
  });
  return result;
}

export async function getDayById(id: number) {
  const day = await prisma.day.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return day;
}

export async function updateDay(day: Day) {
  const result = await prisma.day.update({
    where: {
      id: day.id,
    },
    data: {
      gameNumber: day.gameNumber,
      challengeModifierId: day.challengeModifierId,
      modifierOptionId: day.modifierOptionId,
      dateFirstRolled: day.dateFirstRolled,
      part1Completed: day.part1Completed,
      modifierWhenPart1CompletedId: day.modifierWhenPart1CompletedId,
      optionWhenPart1CompletedId: day.optionWhenPart1CompletedId,
      part2Completed: day.part2Completed,
      challengeModifierRerollsUsed: day.challengeModifierRerollsUsed,
      modifierOptionRerollsUsed: day.modifierOptionRerollsUsed,
      rerollTokensSpentDuringPart2: day.rerollTokensSpentDuringPart2,
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

export async function getAllModifierOptions() {
  const modifierOptions = await prisma.modifierOption.findMany();
  return modifierOptions;
}

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
