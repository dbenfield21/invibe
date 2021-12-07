import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'



import('./config/database.js')

const app = express()

import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
import { router as apiRouter } from './routes/api/api.js'
import { router as cocktailsRouter } from './routes/cocktails/cocktails.js'
import { router as profilesRouter } from "./routes/profiles.js"


app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/resources', apiRouter)
app.use('/cocktails', cocktailsRouter)
app.use('/api/profile', profilesRouter)


app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
