const filter = require('lodash/fp/filter')
const first = require('lodash/fp/first')
const remove = require('lodash/fp/remove')
const merge = require('lodash/fp/merge')

const { NotFoundError, AlreadyExistsError } = require('../webserver/errors')

module.exports = () => {
    return {
        lastId: 0,
        db: [],
        find() {
            return this.db
        },

        persist(healthInfo) {
            const duplicated = filter({ id: healthInfo.id }, this.db)
            if (duplicated.length > 0) throw new AlreadyExistsError('This CPF already exists')

            healthInfo.id = `${++this.lastId}`
            this.db.push(healthInfo)
            return healthInfo
        },

        get(id) {
            const healthInfo = first(filter({ id }, this.db))
            if (!healthInfo) throw new NotFoundError('healthInfo not found')
            return healthInfo
        },

        merge(id, data) {
            let healthInfo = this.remove(id)
            healthInfo = merge(healthInfo, data)

            this.db.push(healthInfo)
            return healthInfo
        },

        remove(id) {
            const healthInfo = this.get(id)
            this.db = remove({ id }, this.db)

            return healthInfo
        }
    }
}