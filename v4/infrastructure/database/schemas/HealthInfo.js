const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const healthInfoSchema = new Schema({
  height: String,
  weight: String,
  age: String,
  gender: String,
  medic_his: String  
})

const healthInfoModel = ({ database: mongoose }) => mongoose.model('HealthInfo', healthInfoSchema)
module.exports = healthInfoModel

healthInfoModel[RESOLVER] = {
  name: 'HealthInfoSchema'
}
