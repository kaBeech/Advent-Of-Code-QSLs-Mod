/*
  Warnings:

  - You are about to drop the column `netScore` on the `Day` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Day" RENAME COLUMN "netScore" TO "score";
