-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "way" TEXT,
    "imgURL" TEXT,
    "description" TEXT,
    "module" TEXT,
    "amp" INTEGER,
    "range" TEXT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_name_fkey" FOREIGN KEY ("name") REFERENCES "category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
