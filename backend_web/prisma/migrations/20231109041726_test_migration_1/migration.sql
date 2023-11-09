-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "serializedId" TEXT,
    "username" TEXT,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numberOfGames" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicProfile" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PublicProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "playerName" TEXT,
    "currentDay" INTEGER NOT NULL DEFAULT 0,
    "currentDayCompleted" BOOLEAN NOT NULL DEFAULT false,
    "currentRerollTokens" INTEGER NOT NULL DEFAULT 12,
    "rerollTokensSpent" INTEGER NOT NULL DEFAULT 0,
    "rerollTokensSpentDuringPart2Raw" INTEGER NOT NULL DEFAULT 0,
    "rerollTokensSpentDuringPart2Limited" INTEGER NOT NULL DEFAULT 0,
    "repositoryLink" TEXT,
    "progressSheetLink" TEXT NOT NULL DEFAULT '/game/public/${id}',
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "publicProfileId" INTEGER,
    "score" INTEGER NOT NULL DEFAULT 0,
    "rankId" INTEGER,
    "dateCompleted" TIMESTAMP(3),

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "minimumScore" INTEGER NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "gameNumber" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "challengeModifierId" INTEGER,
    "modifierOptionId" INTEGER,
    "dateFirstRolled" TIMESTAMP(3),
    "part1Completed" TIMESTAMP(3),
    "modifierWhenPart1CompletedId" INTEGER,
    "optionWhenPart1CompletedId" INTEGER,
    "part2Completed" TIMESTAMP(3),
    "challengeModifierRerollsUsed" INTEGER NOT NULL DEFAULT 0,
    "modifierOptionRerollsUsed" INTEGER NOT NULL DEFAULT 0,
    "rerollTokensSpentDuringPart2" INTEGER NOT NULL DEFAULT 0,
    "netScore" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeModifier" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "hasOptions" BOOLEAN NOT NULL DEFAULT false,
    "explanatoryUrl" TEXT,
    "standard" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ChallengeModifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModifierOption" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "challengeModifierId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "explanatoryUrl" TEXT,
    "standard" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ModifierOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModifierPack" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ModifierPack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upvote" (
    "id" SERIAL NOT NULL,
    "note" TEXT,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" INTEGER NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Upvote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Downvote" (
    "id" SERIAL NOT NULL,
    "note" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" INTEGER NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Downvote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestTable" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "favoriteColor" TEXT NOT NULL,

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestChair" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "favoriteColor" TEXT NOT NULL,
    "tableId" INTEGER NOT NULL,

    CONSTRAINT "TestChair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DefaultExcludedChallengeModifiers" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DefaultIncludedCustomChallengeModifiers" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ExcludedChallengeModifiers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IncludedCustomChallengeModifiers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DefaultExcludedModifierOptions" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DefaultIncludedCustomModifierOptions" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ExcludedModifierOptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IncludedCustomModifierOptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_serializedId_key" ON "User"("serializedId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_name_key" ON "Rank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeModifier_name_key" ON "ChallengeModifier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ModifierOption_name_key" ON "ModifierOption"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_DefaultExcludedChallengeModifiers_AB_unique" ON "_DefaultExcludedChallengeModifiers"("A", "B");

-- CreateIndex
CREATE INDEX "_DefaultExcludedChallengeModifiers_B_index" ON "_DefaultExcludedChallengeModifiers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DefaultIncludedCustomChallengeModifiers_AB_unique" ON "_DefaultIncludedCustomChallengeModifiers"("A", "B");

-- CreateIndex
CREATE INDEX "_DefaultIncludedCustomChallengeModifiers_B_index" ON "_DefaultIncludedCustomChallengeModifiers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ExcludedChallengeModifiers_AB_unique" ON "_ExcludedChallengeModifiers"("A", "B");

-- CreateIndex
CREATE INDEX "_ExcludedChallengeModifiers_B_index" ON "_ExcludedChallengeModifiers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IncludedCustomChallengeModifiers_AB_unique" ON "_IncludedCustomChallengeModifiers"("A", "B");

-- CreateIndex
CREATE INDEX "_IncludedCustomChallengeModifiers_B_index" ON "_IncludedCustomChallengeModifiers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DefaultExcludedModifierOptions_AB_unique" ON "_DefaultExcludedModifierOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_DefaultExcludedModifierOptions_B_index" ON "_DefaultExcludedModifierOptions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DefaultIncludedCustomModifierOptions_AB_unique" ON "_DefaultIncludedCustomModifierOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_DefaultIncludedCustomModifierOptions_B_index" ON "_DefaultIncludedCustomModifierOptions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ExcludedModifierOptions_AB_unique" ON "_ExcludedModifierOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_ExcludedModifierOptions_B_index" ON "_ExcludedModifierOptions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IncludedCustomModifierOptions_AB_unique" ON "_IncludedCustomModifierOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_IncludedCustomModifierOptions_B_index" ON "_IncludedCustomModifierOptions"("B");

-- AddForeignKey
ALTER TABLE "PublicProfile" ADD CONSTRAINT "PublicProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_publicProfileId_fkey" FOREIGN KEY ("publicProfileId") REFERENCES "PublicProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_challengeModifierId_fkey" FOREIGN KEY ("challengeModifierId") REFERENCES "ChallengeModifier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_modifierOptionId_fkey" FOREIGN KEY ("modifierOptionId") REFERENCES "ModifierOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_modifierWhenPart1CompletedId_fkey" FOREIGN KEY ("modifierWhenPart1CompletedId") REFERENCES "ChallengeModifier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_optionWhenPart1CompletedId_fkey" FOREIGN KEY ("optionWhenPart1CompletedId") REFERENCES "ModifierOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeModifier" ADD CONSTRAINT "ChallengeModifier_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModifierOption" ADD CONSTRAINT "ModifierOption_challengeModifierId_fkey" FOREIGN KEY ("challengeModifierId") REFERENCES "ChallengeModifier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModifierOption" ADD CONSTRAINT "ModifierOption_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModifierPack" ADD CONSTRAINT "ModifierPack_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Downvote" ADD CONSTRAINT "Downvote_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Downvote" ADD CONSTRAINT "Downvote_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestChair" ADD CONSTRAINT "TestChair_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "TestTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultExcludedChallengeModifiers" ADD CONSTRAINT "_DefaultExcludedChallengeModifiers_A_fkey" FOREIGN KEY ("A") REFERENCES "ChallengeModifier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultExcludedChallengeModifiers" ADD CONSTRAINT "_DefaultExcludedChallengeModifiers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultIncludedCustomChallengeModifiers" ADD CONSTRAINT "_DefaultIncludedCustomChallengeModifiers_A_fkey" FOREIGN KEY ("A") REFERENCES "ChallengeModifier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultIncludedCustomChallengeModifiers" ADD CONSTRAINT "_DefaultIncludedCustomChallengeModifiers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExcludedChallengeModifiers" ADD CONSTRAINT "_ExcludedChallengeModifiers_A_fkey" FOREIGN KEY ("A") REFERENCES "ChallengeModifier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExcludedChallengeModifiers" ADD CONSTRAINT "_ExcludedChallengeModifiers_B_fkey" FOREIGN KEY ("B") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludedCustomChallengeModifiers" ADD CONSTRAINT "_IncludedCustomChallengeModifiers_A_fkey" FOREIGN KEY ("A") REFERENCES "ChallengeModifier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludedCustomChallengeModifiers" ADD CONSTRAINT "_IncludedCustomChallengeModifiers_B_fkey" FOREIGN KEY ("B") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultExcludedModifierOptions" ADD CONSTRAINT "_DefaultExcludedModifierOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "ModifierOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultExcludedModifierOptions" ADD CONSTRAINT "_DefaultExcludedModifierOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultIncludedCustomModifierOptions" ADD CONSTRAINT "_DefaultIncludedCustomModifierOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "ModifierOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultIncludedCustomModifierOptions" ADD CONSTRAINT "_DefaultIncludedCustomModifierOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExcludedModifierOptions" ADD CONSTRAINT "_ExcludedModifierOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "ModifierOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExcludedModifierOptions" ADD CONSTRAINT "_ExcludedModifierOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "ModifierPack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludedCustomModifierOptions" ADD CONSTRAINT "_IncludedCustomModifierOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "ModifierOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludedCustomModifierOptions" ADD CONSTRAINT "_IncludedCustomModifierOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "ModifierPack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
