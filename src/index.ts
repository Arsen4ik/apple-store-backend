import app from './server'

const PORT = 1452

app.listen(PORT, () => {
  console.log(`hello on http://localhost:${PORT}`)
})

/*
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Gadget {
    id        Int      @id @default(autoincrement())
    name      String
    price     Int
    discountPrice Int?
    guarantee Int
    rating Float
    isAvailable Boolean
    storeAddress String?
    color String
    brand String
    country String
    phone Phone[]
    headphones Headphones[]
    tablet     Tablet[]
    computer Computer[]
    accessories Accessories[]
}
  
model Phone {
    id         Int      @id @default(autoincrement())
    gadget     Gadget   @relation(fields: [gadgetId], references: [id])
    gadgetId   Int
    screenSize Int
    screenName String
    memoryGB Int
    ramGB Int
    camera String
}
  
model Headphones {
    id         Int      @id @default(autoincrement())
    gadget     Gadget   @relation(fields: [gadgetId], references: [id])
    gadgetId   Int
    isNoiseReductionAvailable Boolean
  }
  
model Tablet {
    id         Int      @id @default(autoincrement())
    gadget     Gadget   @relation(fields: [gadgetId], references: [id])
    gadgetId   Int
    screenSize Int
    screenName String
    memoryGB Int
    ramGB Int
  }

model Computer {
    id         Int      @id @default(autoincrement())
    gadget     Gadget   @relation(fields: [gadgetId], references: [id])
    gadgetId   Int
    screenSize Int
    memoryGB Int
    ramGB Int
    OS String
    CPU String
}

model Accessories {
    id         Int      @id @default(autoincrement())
    gadget     Gadget   @relation(fields: [gadgetId], references: [id])
    gadgetId   Int
    forWhatKindsOfDevises String[]
}

*/


/*
{
  "gadget": {
              "name": "ipad666",
              "price": 400,
              "discountPrice": 100,
              "guarantee": 12,
              "rating": 12,
              "isAvailable": true,
              "storeAddress": "moscow hz",
              "color": "white",
              "brand": "apple",
              "country": "china"
  },
  "tablet": {
      "screenSize": 12,
      "screenName": "pixels",
      "memoryGB": 128,
      "ramGB": 8
  }
}
*/