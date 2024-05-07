import app from './server'

const PORT = 1452

app.listen(PORT, () => {
  console.log(`hello on http://localhost:${PORT}`)
})


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