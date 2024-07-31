import { User } from "../../generated/client/deno/edge.ts";
import { prisma } from "../prisma.ts";

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
