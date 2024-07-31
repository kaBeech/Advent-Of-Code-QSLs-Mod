import { prisma } from "../prisma";

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
