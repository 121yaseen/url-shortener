import { Router } from 'express'
import { createUser } from '../controllers/users'

const route = Router()

route.get('/', (req, res) => {
  res.send('GET /users')
})

route.post('/', async (req, res) => {
  const { username } = req.body
  const user = await createUser(username)
  res.status(201).json(user)
})

route.post('/login', (req, res) => {
  // TEMP login user
})

export default route
