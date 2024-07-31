import { prisma } from "../prisma.ts";

export async function getAllChallengeModifiers() {
  const challengeModifiers = await prisma.challengeModifier.findMany();
  return challengeModifiers;
}


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
