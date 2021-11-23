// since types are added to express, imports will be easy
import express from 'express'
import userRoute from './routes/users'
import urlRoute from './routes/urls'
import { connect } from './db/connection'

const app = express()

// parses incoming requests with JSON payloads
// and makes the request body available on req.body
app.use(express.json())

app.use('/users', userRoute)
app.use('/urls', urlRoute)

app.get('/', (req, res) => {
  res.send('Server Running!')
})

async function start () {
  await connect()
  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
}

start()
