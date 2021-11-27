import Url from '../db/entities/Url'
import Visit, { getVisitRepository } from '../db/entities/Visit'

export async function registerVisit (url : Url, ip: string, referrer: string | string[] |undefined) {
  const visit = new Visit()
  visit.url = url
  visit.ip = ip
  visit.referrer = referrer?.toString() || ''
  return getVisitRepository().save(visit)
}
