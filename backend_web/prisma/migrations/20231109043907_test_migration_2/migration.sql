/*
  Warnings:

  - You are about to drop the column `rankId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the `Rank` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Game" RENAME CONSTRAINT "Game_rankId_fkey" TO "Game_titleId_fkey";

-- AlterTable
ALTER TABLE "Game" RENAME COLUMN "rankId" TO "titleId";

-- AlterTable
ALTER TABLE "Rank" RENAME TO "Title";

