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
) {
  const result = await prisma.user.create({
    data: {
      id,
      username,
    },
  });
  return result;
}

export async function upsertUser(
  id: string,
  username?: string,
  serializedId?: string,
) {
  const result = await prisma.user.upsert({
    where: {
      id,
    },
    update: {
      username,
      serializedId,
    },
    create: {
      id,
      username,
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

export async function getUserIdById(id: string) {
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      id: true,
    },
    where: {
      id,
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

export async function getUserDataSimpleById(
  userId: string,
) {
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      username: true,
      oauthUsername: true,
      oauthName: true,
    },
    where: {
      id: userId,
    },
  });
  return user;
}

export async function getUserNumberOfGamesById(
  userId: string,
) {
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      numberOfGames: true,
      Game: {
        select: {
          number: true,
        },
      },
    },
    where: {
      id: userId,
    },
  });
  return user;
}

export async function getUserGamesListById(
  userId: string,
) {
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      numberOfGames: true,
      Game: {
        select: {
          name: true,
          number: true,
          year: true,
        },
      },
    },
    where: {
      id: userId,
    },
  });
  return user;
}

export async function getUserGameDataById(
  userId: string,
) {
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      username: true,
      oauthAvatarUrl: true,
      Game: {
        select: {
          year: true,
          name: true,
          id: true,
          isPublic: true,
          repositoryLink: true,
          currentRerollTokens: true,
          currentDay: true,
          currentDayCompleted: true,
          Day: {
            select: {
              modifierWhenPart1CompletedId: true,
              challengeModifierId: true,
              number: true,
              challengeModifierRerollsUsed: true,
              modifierOptionRerollsUsed: true,
              rerollTokensSpentDuringPart2: true,
              score: true,
              part1Completed: true,
              part2Completed: true,
              dateFirstRolled: true,
              ChallengeModifier: {
                select: {
                  text: true,
                  explanatoryUrl: true,
                },
              },
              ModifierOption: {
                select: {
                  text: true,
                  explanatoryUrl: true,
                },
              },
              ModifierWhenPart1Completed: {
                select: {
                  text: true,
                  explanatoryUrl: true,
                },
              },
              OptionWhenPart1Completed: {
                select: {
                  text: true,
                  explanatoryUrl: true,
                },
              },
            },
          },
        },
      },
    },
    where: {
      id: userId,
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

export async function updateUserName(id: string, username: string) {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: {
      username,
    },
  });
  return result;
}

export async function updateUserOAuthInfo(
  id: string,
  oauthUrl: string,
  oauthUsername: string,
  oauthAvatarUrl: string,
  oauthName?: string,
) {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: {
      oauthUrl,
      oauthUsername,
      oauthAvatarUrl,
      oauthName,
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
  isPublic: boolean,
  repositoryLink?: string,
) {
  const result = await prisma.game.create({
    data: {
      userId,
      number,
      name,
      isPublic,
      year,
      repositoryLink,
    },
  });
  return result;
}

export async function getAllGames() {
  const games = await prisma.game.findMany();
  return games;
}

export async function getLeaderboardGamesQuery() {
  const games = await prisma.game.findMany({
    select: {
      id: true,
      playerName: true,
      name: true,
      number: true,
      year: true,
      score: true,
      repositoryLink: true,
      Title: {
        select: {
          id: true,
          name: true,
          minimumScore: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
    },
    where: {
      isPublic: true,
      repositoryLink: {
        not: null,
      },
    },
    take: 20,
    orderBy: {
      score: "desc",
    },
  });
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

export async function getPublicGameById(id: number) {
  const game = await prisma.game.findFirstOrThrow({
    where: {
      id,
      isPublic: true,
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
          ModifierWhenPart1Completed: {
            include: {
              ModifierOption: true,
            },
          },
          OptionWhenPart1Completed: true,
        },
      },
      User: {
        select: {
          username: true,
          oauthAvatarUrl: true,
        },
      },
    },
  });
  return game;
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
          ModifierWhenPart1Completed: {
            include: {
              ModifierOption: true,
            },
          },
          OptionWhenPart1Completed: true,
        },
      },
      User: {
        select: {
          username: true,
          oauthAvatarUrl: true,
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
      rerollTokensSpentDuringPart2Raw: game.rerollTokensSpentDuringPart2Raw,
      part2RerollBonus: game.part2RerollBonus,
      repositoryLink: game.repositoryLink,
      progressSheetLink: game.progressSheetLink,
      isPublic: game.isPublic,
      publicProfileId: game.publicProfileId,
      score: game.score,
      titleId: game.titleId,
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

export async function deleteGamesByTesterId() {
  const deletedDays = await prisma.day.deleteMany({
    where: { Game: { User: { id: "reddit1" } } },
  });

  const deletedGames = await prisma.game.deleteMany({
    where: { User: { id: "reddit1" } },
  });

  const result = { deletedDays, deletedGames };
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

export async function getDaysByGameId(
  gameId: number,
) {
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
      score: day.score,
    },
  });
  return result;
}

/**
 * Challenge Modifier CRUD
 */

export async function getAllChallengeModifierNames() {
  const challengeModifiers = await prisma.challengeModifier.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return challengeModifiers;
}

export async function getChallengeModifierDataById(id: number) {
  const challengeModifier = await prisma.challengeModifier.findUniqueOrThrow({
    select: {
      id: true,
      name: true,
      text: true,
      explanatoryUrl: true,
      hasOptions: true,
      ModifierOption: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      id,
    },
  });
  return challengeModifier;
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

export async function getModifierOptionDataById(
  id: number,
) {
  const modifierOption = await prisma.modifierOption.findUniqueOrThrow({
    select: {
      text: true,
      explanatoryUrl: true,
      ChallengeModifier: {
        select: {
          text: true,
        },
      },
    },
    where: {
      id
    },
  });
  return modifierOption;
}

/**
 * Title CRUD
 */

export async function getAllTitles() {
  const titles = await prisma.title.findMany();
  return titles;
}
