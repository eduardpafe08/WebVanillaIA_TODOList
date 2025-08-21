import express from 'express'
import cors from 'cors'
import router from './routes.js'
import { HOST, API_PORT } from './db.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(API_PORT, () => {
    console.log(`Servidor corriendo en http://${HOST}:${API_PORT}`)
})