require('dotenv').config()
require('make-promises-safe')

const container = require('./infrastructure/config/container')()
const server = require('./infrastructure/webserver/fastify')(container.cradle)

server.listen(process.env.PORT || 3033, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
