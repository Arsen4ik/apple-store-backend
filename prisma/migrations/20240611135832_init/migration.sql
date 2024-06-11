-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" TEXT NOT NULL,
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
INSERT INTO "new_products" ("brand", "category_id", "color", "count_review", "country", "createdAt", "discount_price", "guarantee", "id", "is_available", "price", "product_type_id", "rating", "store_address") SELECT "brand", "category_id", "color", "count_review", "country", "createdAt", "discount_price", "guarantee", "id", "is_available", "price", "product_type_id", "rating", "store_address" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
