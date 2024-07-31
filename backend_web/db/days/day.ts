import { Day } from "../../generated/client/deno/edge.ts";
import { prisma } from "../prisma.ts";


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

export async function getDayByUserIdGameNumberAndDayNumber(userId: string, gameNumber: number, dayNumber: number): Day {
  const day = await prisma.day.findFirstOrThrow({
    where: {
      userId,
      gameNumber,
      number: dayNumber,
    },
  });
  return day;
}

export async function getDayIdByGameIdAndDayNumber(
  gameId: number,
  dayNumber: number,
) {
  const day = await prisma.day.findFirstOrThrow({
    select: {
      id: true,
    },
    where: {
      gameId,
      number: dayNumber,
    },
  });
  return day;
}

export async function getPublicDayByGameIdAndNumber(gameId: number, number: number) {
  const day = await prisma.day.findFirstOrThrow({
    select: {
      number: true,
      score: true,
      dateFirstRolled: true,
      challengeModifierRerollsUsed: true,
      modifierOptionRerollsUsed: true,
      rerollTokensSpentDuringPart2: true,
      modifierWhenPart1CompletedId: true,
      optionWhenPart1CompletedId: true,
      part1Completed: true,
      part2Completed: true,
      challengeModifierId: true,
      modifierOptionId: true,
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
      gameId,
      number,
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
      score: day.score,
    },
  });
  return result;
}
