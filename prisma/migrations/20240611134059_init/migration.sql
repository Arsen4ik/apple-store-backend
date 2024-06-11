-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL,
    "price" INTEGER NOT NULL,
    "discount_price" INTEGER,
    "guarantee" INTEGER NOT NULL,
    "rating" REAL NOT NULL,
    "count_review" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL,
    "store_address" TEXT,
    "color" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "product_type_id" INTEGER NOT NULL,
    CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_product_type_id_fkey" FOREIGN KEY ("product_type_id") REFERENCES "product_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "products_id" INTEGER NOT NULL,
    "image_link" TEXT NOT NULL,
    CONSTRAINT "images_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "product_types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "products_x_characteristics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characteristics_id" INTEGER NOT NULL,
    "product_types_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "products_x_characteristics_characteristics_id_fkey" FOREIGN KEY ("characteristics_id") REFERENCES "characteristics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_x_characteristics_product_types_id_fkey" FOREIGN KEY ("product_types_id") REFERENCES "product_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "characteristics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "unit_type" TEXT NOT NULL
);
