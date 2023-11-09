-- CreateTable
CREATE TABLE "TestPlate" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "tableId" INTEGER NOT NULL,

    CONSTRAINT "TestPlate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestPlate" ADD CONSTRAINT "TestPlate_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "TestTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
