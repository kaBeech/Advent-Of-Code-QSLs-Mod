import { Game } from "../../generated/client/deno/edge.ts";
import { prisma } from "../prisma.ts";

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

export async function getGameById(id: number) {
  const game = await prisma.game.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return game;
}

export async function getGameDataByUserIdAndGameNumber(
  userId: string,
  number: number,
) {
  const game = await prisma.game.findFirstOrThrow({
    select: {
      id: true,
      year: true,
      name: true,
      repositoryLink: true,
      isPublic: true,
      currentDay: true,
      currentRerollTokens: true,
      dateCompleted: true,
      Title: {
        select: {
          name: true,
        },
      },
      score: true,
      Day: {
        select: {
          number: true,
          part1Completed: true,
          part2Completed: true,
          challengeModifierRerollsUsed: true,
          modifierOptionRerollsUsed: true,
          score: true,
          ChallengeModifier: {
            select: {
              name: true,
            },
          },
          ModifierOption: {
            select: {
              name: true,
              text: true,
            },
          },
        },
      },
      User: {
        select: {
          username: true,
        },
      },
    },
    where: {
      userId,
      number,
    },
  });
  return game;
}

export async function getGamesByUserId(
  userId: string,
) {
  const games = await prisma.game.findMany({
    // select: {
    //   id: true,
    //   year: true,
    //   currentDay: true,
    //   name: true,
    //   score: true,
    //   currentRerollTokens: true,
    //   dateCompleted: true,
    //   repositoryLink: true,
    //   Title: {
    //     select: {
    //       name: true,
    //     },
    //   },
    // },
    where: {
      userId,
    },
  });
  return games;
}

export async function getGameByUserIdAndGameNumber(
  userId: string,
  gameNumber: number,
): Game {
  const game = await prisma.game.findFirstOrThrow({
    // select: {
    //   id: true,
    //   year: true,
    //   currentDay: true,
    //   name: true,
    //   score: true,
    //   currentRerollTokens: true,
    //   dateCompleted: true,
    //   repositoryLink: true,
    //   Day: {
    //     select: {
    //       number: true,
    //     },
    //   },
    //   Title: {
    //     select: {
    //       name: true,
    //     },
    //   },
    // },
    where: {
      userId,
      number: gameNumber,
    },
  });
  return game;
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
