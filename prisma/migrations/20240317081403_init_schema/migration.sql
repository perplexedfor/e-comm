-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MCB_DB_BOX" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "way" TEXT NOT NULL,

    CONSTRAINT "MCB_DB_BOX_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AC_BOX" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "AC_BOX_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MODULAR_BOX" (
    "id" SERIAL NOT NULL,
    "module" TEXT NOT NULL,

    CONSTRAINT "MODULAR_BOX_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MAIN_SWITCH_CHANGEOVER" (
    "id" SERIAL NOT NULL,
    "amp" INTEGER NOT NULL,

    CONSTRAINT "MAIN_SWITCH_CHANGEOVER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BUS_BAR" (
    "id" SERIAL NOT NULL,
    "amp" INTEGER NOT NULL,

    CONSTRAINT "BUS_BAR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CIRCUIT_BREAKERS" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "range" TEXT NOT NULL,

    CONSTRAINT "CIRCUIT_BREAKERS_pkey" PRIMARY KEY ("id")
);
