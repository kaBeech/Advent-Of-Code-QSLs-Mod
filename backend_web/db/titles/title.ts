import { prisma } from "../prisma.ts";

export async function getAllTitles() {
  const titles = await prisma.title.findMany();
  return titles;
}
