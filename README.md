installation:

  git clone https://github.com/Arsen4ik/apple-store-backend.git -b build
  
  npm i

start project:

  npm run serve

usage:

  get all products:
    http://localhost:1452/api/products/

  get some product by id:
    http://localhost:1452/api/products/1

  get some category by id (all phones):
    http://localhost:1452/api/category/2

  get some image example: 
    http://localhost:1452/image/iphone_se_2022_white.jpg

  get some subcategories by category id (all subcategories for phones):
    http://localhost:1452/api/subcategory?category=2

  get some products by subcategory id:
    http://localhost:1452/api/subcategory/2

P.S.

если не работает со старой командой заменяете 11 строчку в package.json где описана команда serve:
    "serve": "set DATABASE_URL=file:./dev.db && node dist/index.js"
