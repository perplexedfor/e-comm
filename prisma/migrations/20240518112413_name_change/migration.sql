/*
  Warnings:

  - You are about to drop the `MODULAR_BOX` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MODULAR_BOX";

-- CreateTable
CREATE TABLE "GI_MODULAR_BOX" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER,

    CONSTRAINT "GI_MODULAR_BOX_pkey" PRIMARY KEY ("id")
);
