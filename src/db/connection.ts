import { createConnection } from 'typeorm'
import User from './entities/User'

export const connect = async () => {
  const connection = await createConnection({
    type: 'postgres',
    username: 'yaseen',
    password: 'yaseen',
    database: 'url_shrtnr',
    entities: [
      User,
    ],
    synchronize: true,
    logging: true,
  })
  return connection
}
