import { Router } from 'express'
import { createShortUrl } from '../controllers/urls'

const route = Router()

route.get('/', (req, res) => {
  res.send('GET /urls')
})

route.post('/', async (req, res) => {
  const { longUrl } = req.body
  const url = await createShortUrl(longUrl)
  res.send(url)
})

export default route
