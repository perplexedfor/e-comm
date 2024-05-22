/*
  Warnings:

  - Made the column `size` on table `AC_BOX` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `BUS_BAR` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `ELCB` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `GI_MODULAR_BOX` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `MAIN_SWITCH_CHANGEOVER` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `MCB` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `MCB_DB_BOX` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `MCCB` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AC_BOX" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "BUS_BAR" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "ELCB" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "GI_MODULAR_BOX" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "MAIN_SWITCH_CHANGEOVER" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "MCB" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "MCB_DB_BOX" ALTER COLUMN "size" SET NOT NULL;

-- AlterTable
ALTER TABLE "MCCB" ALTER COLUMN "size" SET NOT NULL;
