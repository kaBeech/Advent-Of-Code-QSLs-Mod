-- AlterTable
ALTER TABLE "Title" RENAME CONSTRAINT "Rank_pkey" TO "Title_pkey";

-- RenameIndex
ALTER INDEX "Rank_name_key" RENAME TO "Title_name_key";
