/*
  Warnings:

  - You are about to drop the column `amp` on the `BUS_BAR` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `CIRCUIT_BREAKERS` table. All the data in the column will be lost.
  - You are about to drop the column `range` on the `CIRCUIT_BREAKERS` table. All the data in the column will be lost.
  - You are about to drop the column `amp` on the `MAIN_SWITCH_CHANGEOVER` table. All the data in the column will be lost.
  - You are about to drop the column `module` on the `MODULAR_BOX` table. All the data in the column will be lost.
  - Added the required column `type` to the `BUS_BAR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `MAIN_SWITCH_CHANGEOVER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `MODULAR_BOX` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AC_BOX" ADD COLUMN     "size" INTEGER;

-- AlterTable
ALTER TABLE "BUS_BAR" DROP COLUMN "amp",
ADD COLUMN     "size" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CIRCUIT_BREAKERS" DROP COLUMN "description",
DROP COLUMN "range",
ADD COLUMN     "size" INTEGER;

-- AlterTable
ALTER TABLE "MAIN_SWITCH_CHANGEOVER" DROP COLUMN "amp",
ADD COLUMN     "size" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MCB_DB_BOX" ADD COLUMN     "size" INTEGER;

-- AlterTable
ALTER TABLE "MODULAR_BOX" DROP COLUMN "module",
ADD COLUMN     "size" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL;
