import { Router } from 'express'
import { createShortUrl, createUrlFromShortCode, getUrl } from '../controllers/urls'
import { registerVisit } from '../controllers/visits'

const route = Router()

route.get('/', (req, res) => {
  res.send('GET /urls')
})

route.post('/', async (req, res) => {
  const { longUrl, shortCode } = req.body
  if (shortCode) {
    const url = await createUrlFromShortCode(longUrl, shortCode.slice(0, 8))
    res.send(url)
  } else {
    const url = await createShortUrl(longUrl)
    res.send(url)
  }
})

// FIXME : change this route from /urls/:shortCode to /:shortCode
route.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params
  const { ip } = req
  const { referrer } = req.headers
  const url = await getUrl(shortCode)
  if (url.longUrl) {
    await registerVisit(url, ip, referrer)
    res.redirect(url.longUrl)
  } else {
    res.status(404).send('Not found')
  }
})

export default route
