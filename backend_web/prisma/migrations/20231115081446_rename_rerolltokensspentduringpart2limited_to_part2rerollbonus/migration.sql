/*
  Warnings:

  - You are about to drop the column `rerollTokensSpentDuringPart2Limited` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" RENAME COLUMN "rerollTokensSpentDuringPart2Limited" to "part2RerollBonus";
