import app from './server'

const PORT = 1452

app.listen(PORT, () => {
  console.log(`hello on http://localhost:${PORT}`)
})