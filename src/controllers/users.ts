import User, { getUserRepository } from '../db/entities/User'

export async function createUser (username : string) {
  const user = new User()
  user.username = username
  return getUserRepository().save(user)
}
