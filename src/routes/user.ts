import { Router } from 'express'
import { getUserByToken } from '../controllers/users'

const route = Router()

route.get('/me', async (req, res) => {
  const { token } = req.headers
  const user = await getUserByToken(token)
  res.send(user)
})

export default route
