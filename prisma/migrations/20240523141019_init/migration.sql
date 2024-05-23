-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products_x_characteristics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characteristics_id" INTEGER NOT NULL,
    "product_types_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "productsId" INTEGER,
    CONSTRAINT "products_x_characteristics_characteristics_id_fkey" FOREIGN KEY ("characteristics_id") REFERENCES "characteristics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_x_characteristics_product_types_id_fkey" FOREIGN KEY ("product_types_id") REFERENCES "product_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_x_characteristics_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_products_x_characteristics" ("characteristics_id", "id", "product_types_id", "value") SELECT "characteristics_id", "id", "product_types_id", "value" FROM "products_x_characteristics";
DROP TABLE "products_x_characteristics";
ALTER TABLE "new_products_x_characteristics" RENAME TO "products_x_characteristics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
