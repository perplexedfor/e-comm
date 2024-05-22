/*
  Warnings:

  - You are about to drop the `CIRCUIT_BREAKERS` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "GI_MODULAR_BOX" ADD COLUMN     "description" JSONB;

-- DropTable
DROP TABLE "CIRCUIT_BREAKERS";

-- CreateTable
CREATE TABLE "MCCB" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER,

    CONSTRAINT "MCCB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ELCB" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER,

    CONSTRAINT "ELCB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MCB" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER,

    CONSTRAINT "MCB_pkey" PRIMARY KEY ("id")
);
