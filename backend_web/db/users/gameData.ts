import { prisma } from "../prisma.ts";

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
        orderBy: [
          {
            number: "asc",
          },
        ],
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

export async function getUserGameDayDataByIdGameNumberAndDayNumber(
  userId: string,
  gameNumber: number,
  dayNumber: number,
) {
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      username: true,
      oauthAvatarUrl: true,
    },
    where: {
      id: userId,
    },
  });
  const game = await prisma.game.findFirstOrThrow({
    select: {
      year: true,
      name: true,
      id: true,
      isPublic: true,
      repositoryLink: true,
      currentRerollTokens: true,
      currentDay: true,
      currentDayCompleted: true,
    },
    where: {
      userId: userId,
      number: gameNumber,
    },
  });
  const day = await prisma.day.findFirstOrThrow({
    select: {
      modifierWhenPart1CompletedId: true,
      challengeModifierId: true,
      modifierOptionId: true,
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
    where: {
      userId: userId,
      gameNumber: gameNumber,
      number: dayNumber,
    },
  });
  const userGameDayData = { user, game, day };
  return userGameDayData;
}
