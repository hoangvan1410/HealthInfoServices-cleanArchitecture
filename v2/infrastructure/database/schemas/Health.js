const { RESOLVER } = require('awilix')
const { Schema } = require("mongoose")

const healthInfoSchema = new Schema({
    user_id: String,
    height: String,
    weight: String,
    age: String,
    gender: String,
    medic_his: String
})

const healthInfoModel = ({database: moongoose}) => moongoose.model('HealthInfo',healthInfoSchema)
module.exports = healthInfoModel

healthInfoModel[RESOLVER]={
    name: 'HealthInfoSchema'
}