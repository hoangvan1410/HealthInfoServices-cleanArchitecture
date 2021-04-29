const HealthInfoRepository = require('../../../application/contracts/HealthInfoRepository')

module.exports = class InMemoryHealthInfoRepository extends HealthInfoRepository{

    constructor(){
        super();
    }

    async add(healthInfoInstance){
       const {height, weight, age, gender, medic_his} = healthInfoEntity;
       const mongooseHealthInfo 
        return healthInfoInstance;
    }

    async getById(healthInfoId){
        let healthInfo;
        try{
            const id = parseInt(healthInfoId);
            healthInfo = this.healthInfos.find(x => x.id ===id);
        }catch(err){
            throw new Error('Error Occurred');
        }
        return healthInfo;
    }
    
    async getAll(){
        return this.healthInfos;
    }
};