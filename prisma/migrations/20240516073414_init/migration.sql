-- CreateTable
CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Gadget" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discountPrice" INTEGER,
    "guarantee" INTEGER NOT NULL,
    "rating" REAL NOT NULL,
    "countReview" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "storeAddress" TEXT,
    "color" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Gadget_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "imageLink" TEXT NOT NULL,
    CONSTRAINT "Images_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Characteristics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "unitType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GadgetSpecialCharacteristics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "characteristicsId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "GadgetSpecialCharacteristics_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GadgetSpecialCharacteristics_characteristicsId_fkey" FOREIGN KEY ("characteristicsId") REFERENCES "Characteristics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
