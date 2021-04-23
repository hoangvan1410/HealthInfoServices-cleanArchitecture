
const HealthInfoRepository = require('../../../application/contracts/HealthInfoRepository')

module.exports = class InMemoryHealthInfoRepository extends HealthInfoRepository{

    constructor(){
        super();
        this.healthInfos = [];
        this.currentId = 1;
    }

    async add(healthInfoInstance){
        try{
            this.currentId = this.currentId +1;
            healthInfoInstance.id=this.currentId;
            this.healthInfos.push(healthInfoInstance);
        } catch(err){
            throw new Error('Error Occurred');
        }
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