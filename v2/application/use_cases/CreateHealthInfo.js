'use strict'
const HealthInfo = require('../../domain/HealthInfo');

module.exports = (height, weight, age, gender, medic_his,{healthInfoRepository}) => {
    const healthInfo = new HealthInfo(null, height, weight,age,gender,medic_his);
    return healthInfoRepository.persist(healthInfo);
}