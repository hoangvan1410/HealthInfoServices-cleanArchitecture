const HealthInfo = require ('../../entities/HealthInfo');

module.exports = (HealthInfoRepository)=>{
    
    async function Execute(height,weight,age,gender,medic_his){
        return HealthInfoRepository.getAll();
    }

    return {
        Execute
    };
};