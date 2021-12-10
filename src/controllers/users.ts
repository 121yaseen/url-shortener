import User, { getUserRepository } from '../db/entities/User'

export async function createUser (username : string) {
  const user = new User()
  user.username = username
  return getUserRepository().save(user)
}

export async function getUserByToken (token : string | string[] | undefined): Promise<User | undefined> {
  token = token as string
  return getUserRepository().findOne({ token })
}
