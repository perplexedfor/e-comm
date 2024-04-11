-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_categoryId_fkey";

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
