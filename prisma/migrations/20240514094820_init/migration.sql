-- CreateTable
CREATE TABLE "Gadget" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discountPrice" INTEGER,
    "guarantee" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "CountReview" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "storeAddress" TEXT,
    "color" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Gadget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" SERIAL NOT NULL,
    "gadgetId" INTEGER NOT NULL,
    "screenSize" INTEGER NOT NULL,
    "screenName" TEXT NOT NULL,
    "memoryGB" INTEGER NOT NULL,
    "ramGB" INTEGER NOT NULL,
    "camera" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headphones" (
    "id" SERIAL NOT NULL,
    "gadgetId" INTEGER NOT NULL,
    "isNoiseReductionAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "Headphones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tablet" (
    "id" SERIAL NOT NULL,
    "gadgetId" INTEGER NOT NULL,
    "screenSize" INTEGER NOT NULL,
    "screenName" TEXT NOT NULL,
    "memoryGB" INTEGER NOT NULL,
    "ramGB" INTEGER NOT NULL,

    CONSTRAINT "Tablet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Computer" (
    "id" SERIAL NOT NULL,
    "gadgetId" INTEGER NOT NULL,
    "screenSize" INTEGER NOT NULL,
    "memoryGB" INTEGER NOT NULL,
    "ramGB" INTEGER NOT NULL,
    "OS" TEXT NOT NULL,
    "CPU" TEXT NOT NULL,

    CONSTRAINT "Computer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessories" (
    "id" SERIAL NOT NULL,
    "gadgetId" INTEGER NOT NULL,
    "forWhatKindsOfDevises" TEXT NOT NULL,

    CONSTRAINT "Accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "gadgetId" INTEGER NOT NULL,
    "imageLink" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Headphones" ADD CONSTRAINT "Headphones_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tablet" ADD CONSTRAINT "Tablet_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accessories" ADD CONSTRAINT "Accessories_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
