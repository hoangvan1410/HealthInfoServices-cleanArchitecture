const HealthInfo = require ('../../entities/HealthInfo');

module.exports = (HealthInfoRepository)=>{
    
    async function Execute(healthInfoId){
        return HealthInfoRepository.getById(healthInfoId);
    }

    return {
        Execute
    };
};