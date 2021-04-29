const { NotFoundError, AlreadyExistsError } = require('../webserver/errors')


module.exports =({HealthInfo, HealthInfoSchema})=>({
    find: async () => await HealthInfoSchema.find(),

    persist: async healthInfo => {
        const{user_id,height,weight, age,gender, medic_his}= HealthInfo
        const moongooseHealthInfo = new HealthInfoSchema({
            user_id,
            height,
            weight,
            age,
            gende,
            medic_his
        })

        try {
            await moongooseHealthInfo.save()
            return new HealthInfo(
                moongooseHealthInfo.id,
                moongooseHealthInfo.user_id,
                moongooseHealthInfo.height,
                moongooseHealthInfo.weight,
                moongooseHealthInfo.age,
                moongooseHealthInfo.gender,
                moongooseHealthInfo.medic_his
            )
        } catch(err){
            if(err.code === MONGO_ALREADY_EXISTS){
                throw new AlreadyExistsError('Health Info already exists')
            }
        }
    },

    getById: async id => {
        const moongooseHealthInfo = await HealthInfoSchema.getById(id)
        if (!moongooseHealthInfo) throw new NotFoundError('Health Info not found')

        return new HealthInfo(
            moongooseHealthInfo.id,
                moongooseHealthInfo.user_id,
                moongooseHealthInfo.height,
                moongooseHealthInfo.weight,
                moongooseHealthInfo.age,
                moongooseHealthInfo.gender,
                moongooseHealthInfo.medic_his
        )
    }
})

