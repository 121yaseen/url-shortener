import Url, { getUrlRepository } from '../db/entities/Url'
import { getRandomShortCode, getUrlIdFromShortCode } from '../services/shortcode'

export async function createShortUrl (longUrl: string) {
  const { id, shortCode } = getRandomShortCode()
  const url = new Url()
  url.id = id
  url.longUrl = longUrl
  url.shortCode = shortCode
  return getUrlRepository().save(url)
}

export async function createUrlFromShortCode (longUrl: string, shortCode: string) {
  const url = new Url()
  url.longUrl = longUrl
  url.shortCode = shortCode
  url.id = getUrlIdFromShortCode(shortCode)
  return getUrlRepository().save(url)
}

export async function getUrl (shortCode: string) : Promise<Url> {
  const urlId = getUrlIdFromShortCode(shortCode)
  const url = await getUrlRepository().findOne(urlId)
  return url || new Url()
}
