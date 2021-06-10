const { asFunction } = require('awilix')

// const inMemoryDB = container => {
//   const HealthInfoRepositoryInMemory = require('../repositories/HealthInfoRepositoryInMemory')

//   container.register({
//     HealthInfoRepository: asFunction(HealthInfoRepositoryInMemory).singleton()
//   })
// }

const mongoDB = container => {
  const HealthInfoRepositoryMongo = require('../repositories/HealthInfoRepositoryMongo')

  // Load Database and Schemas
  container.loadModules([
    'infrastructure/database/**/*.js'
  ])

  container.register({
    HealthInfoRepository: asFunction(HealthInfoRepositoryMongo)
  })
}

const resolveDB = container => {
  //if (process.env.NODE_ENV === 'test') process.env.DB_DRIVER = 'in-memory'

  //if (process.env.DB_DRIVER === 'in-memory') inMemoryDB(container)
  //else if (process.env.DB_DRIVER === 'mongo') 
  mongoDB(container)
}

module.exports = resolveDB
