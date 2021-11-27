import { Router } from 'express'
import { createShortUrl, getUrl } from '../controllers/urls'
import { registerVisit } from '../controllers/visits'

const route = Router()

route.get('/', (req, res) => {
  res.send('GET /urls')
})

route.post('/', async (req, res) => {
  const { longUrl } = req.body
  const url = await createShortUrl(longUrl)
  res.send(url)
})

// FIXME : change this route from /urls/:shortCode to /:shortCode
route.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params
  const { ip } = req
  const { referrer } = req.headers
  const url = await getUrl(shortCode)
  if (url.longUrl) {
    await registerVisit(url, ip, referrer)
  }
  res.redirect(url.longUrl)
})

export default route
