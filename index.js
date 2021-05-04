require('dotenv').config()
require('make-promises-safe')

const container = require('./infrastructure/config/container')()
const server = require('./infrastructure/webserver/fastify')(container.cradle)
const PORT = process.env.PORT || 3033

server.listen(PORT, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
