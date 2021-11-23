import Url, { getUrlRepository } from '../db/entities/Url'
import { getRandomShortCode } from '../services/shortcode'

export async function createShortUrl (longUrl: string) {
  const { id, shortCode } = getRandomShortCode()
  const url = new Url()
  url.id = id
  url.longUrl = longUrl
  url.shortCode = shortCode
  return getUrlRepository().save(url)
}
