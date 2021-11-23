import { Router } from 'express'

const route = Router()

route.get('/', (req, res) => {
  res.send('GET /users')
})

route.post('/', (req, res) => {
  // TEMP register user
})

route.post('/login', (req, res) => {
  // TEMP login user
})

export default route
