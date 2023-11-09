/*
  Warnings:

  - You are about to drop the `TestChair` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestPlate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestChair" DROP CONSTRAINT "TestChair_tableId_fkey";

-- DropForeignKey
ALTER TABLE "TestPlate" DROP CONSTRAINT "TestPlate_tableId_fkey";

-- DropTable
DROP TABLE "TestChair";

-- DropTable
DROP TABLE "TestPlate";

-- DropTable
DROP TABLE "TestTable";
