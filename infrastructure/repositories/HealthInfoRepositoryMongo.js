const { NotFoundError, AlreadyExistsError } = require('../webserver/errors')

const MONGO_ALREADY_EXISTS = 11000


module.exports = ({ HealthInfo, HealthInfoSchema }) => ({
    find: async () => await HealthInfoSchema.find(),

    persist: async healthInfo => {
        const { height, weight, age, gender, medic_his } = healthInfo
        const mongooseHealthInfo = new HealthInfoSchema({
            height,
            weight,
            age,
            gender,
            medic_his
        })

        try {
            await mongooseHealthInfo.save()
            return new HealthInfo(
                mongooseHealthInfo.id,
                mongooseHealthInfo.height,
                mongooseHealthInfo.weight,
                mongooseHealthInfo.age,
                mongooseHealthInfo.gender,
                mongooseHealthInfo.medic_his
            )
        } catch (err) {
            if (err.code === MONGO_ALREADY_EXISTS) {
                throw new AlreadyExistsError('This HI already exists')
            }
        }
    },

    get: async id => {
        // const mongooseHealthInfo = await HealthInfoSchema.findById(id)
        // if (!mongooseHealthInfo) throw new NotFoundError('HealthInfo not found')

        // return new HealthInfo(
        //     mongooseHealthInfo.id,
        //     mongooseHealthInfo.height,
        //     mongooseHealthInfo.weight,
        //     mongooseHealthInfo.age,
        //     mongooseHealthInfo.gender,
        //     mongooseHealthInfo.medic_his
        // )
        try {
            const mongooseHealthInfo = await HealthInfoSchema.findById(id)
            return {
                data: { mongooseHealthInfo },
                errorCode: 0,
                message: "Get user's health info",
                success: true,
            }
        } catch (err) {
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                data: {
                    error: err.message,
                },
            };
        }
    },

    //getByAge: async age => await HealthInfoSchema.find({ age: age }),
    getByAge: async age => {
        try {
            const mongooseHealthInfo = await HealthInfoSchema.find({ age: age })
            return {
                data: { mongooseHealthInfo },
                errorCode: 0,
                message: "Get user's health info",
                success: true,
            }
        } catch (err) {
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                data: {
                    error: err.message,
                },
            };
        }
    },

    merge: async (id, data) => {
        try {
            const healthInfo = await HealthInfoSchema
                .findByIdAndUpdate(id, data, { new: true })

            return new HealthInfo(
                healthInfo.id,
                healthInfo.height,
                healthInfo.weight,
                healthInfo.age,
                healthInfo.gender,
                healthInfo.medic_his
            )
        } catch (err) {
            if (err.name === 'CastError') {
                throw new NotFoundError('HealthInfo not found')
            } else if (err.code === MONGO_ALREADY_EXISTS) {
                throw new AlreadyExistsError('This HI already exists')
            } else {
                throw err
            }
        }
    },

    remove: async (id) => {
        const mongooseHealthInfo = await HealthInfoSchema.findOneAndDelete({ _id: id })
        if (!mongooseHealthInfo) {
            throw new NotFoundError('HealthInfo not found')
        }

        return mongooseHealthInfo
    }
})