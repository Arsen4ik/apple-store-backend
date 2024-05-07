import express from 'express'
import cors from 'cors'
import router from './router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

export default app