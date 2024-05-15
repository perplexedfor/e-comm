/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_name_fkey";

-- AlterTable
ALTER TABLE "category" ADD COLUMN     "description" JSONB NOT NULL;

-- DropTable
DROP TABLE "product";
