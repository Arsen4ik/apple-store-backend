-- CreateTable
CREATE TABLE "Gadget" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discountPrice" INTEGER,
    "guarantee" INTEGER NOT NULL,
    "rating" REAL NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "storeAddress" TEXT,
    "color" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "screenSize" INTEGER NOT NULL,
    "screenName" TEXT NOT NULL,
    "memoryGB" INTEGER NOT NULL,
    "ramGB" INTEGER NOT NULL,
    "camera" TEXT NOT NULL,
    CONSTRAINT "Phone_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Headphones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "isNoiseReductionAvailable" BOOLEAN NOT NULL,
    CONSTRAINT "Headphones_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tablet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "screenSize" INTEGER NOT NULL,
    "screenName" TEXT NOT NULL,
    "memoryGB" INTEGER NOT NULL,
    "ramGB" INTEGER NOT NULL,
    CONSTRAINT "Tablet_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Computer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "screenSize" INTEGER NOT NULL,
    "memoryGB" INTEGER NOT NULL,
    "ramGB" INTEGER NOT NULL,
    "OS" TEXT NOT NULL,
    "CPU" TEXT NOT NULL,
    CONSTRAINT "Computer_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Accessories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gadgetId" INTEGER NOT NULL,
    "forWhatKindsOfDevises" TEXT NOT NULL,
    CONSTRAINT "Accessories_gadgetId_fkey" FOREIGN KEY ("gadgetId") REFERENCES "Gadget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
