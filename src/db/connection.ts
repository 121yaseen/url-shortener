import { createConnection } from 'typeorm'
import Url from './entities/Url'
import User from './entities/User'
import Visit from './entities/Visit'

export const connect = async () => {
  const connection = await createConnection({
    type: 'postgres',
    username: 'yaseen',
    password: 'yaseen',
    database: 'url_shrtnr',
    entities: [
      User,
      Url,
      Visit
    ],
    synchronize: true,
    logging: true,
  })
  return connection
}
