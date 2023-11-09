/*
  Warnings:

  - You are about to drop the column `oauthURL` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" RENAME COLUMN "oauthURL" to "oauthUrl";
