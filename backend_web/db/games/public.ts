import { prisma } from "../prisma.ts";

export async function getLeaderboardGames() {
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

export async function getPublicGameSimpleById(id: number) {
  const game = await prisma.game.findUniqueOrThrow({
    select: {
      year: true,
      name: true,
      repositoryLink: true,
      currentRerollTokens: true,
      currentDay: true,
      currentDayCompleted: true,
      isPublic: true,
      id: true,
      User: {
        select: {
          username: true,
          oauthAvatarUrl: true,
        },
      },
    },
    where: {
      id,
    },
  });
  return game;
}


export async function getPublicGameById(id: number) {
  const game = await prisma.game.findFirstOrThrow({
    select: {
      id: true,
      year: true,
      currentDay: true,
      name: true,
      score: true,
      currentRerollTokens: true,
      dateCompleted: true,
      repositoryLink: true,
      Title: {
        select: {
          name: true,
        },
      },
      Day: {
        select: {
          number: true,
          challengeModifierId: true,
          modifierOptionId: true,
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
          oauthAvatarUrl: true,
        },
      },
    },
    where: {
      id,
      isPublic: true,
    },
  });
  return game;
}
