const DatabaseService = require('../../../application/contracts/DatabaseServices');
const InMemoryHealthInfoRepository = require('./InMemoryHealthInfoRepository');
const HealthInfo = require ('../../../entities/HealthInfo');

module.exports = class InMemoryDatabaseServices extends DatabaseService{
    constructor(){
        super();
        this.healthInfoRepository = new InMemoryHealthInfoRepository();
    }

    async initDatabase(){
        this.seedData();
    }

    async seedData(){
        let sampleHealthInfo = new HealthInfo ('a','b','c','d','e');
        sampleHealthInfo = await this.healthInfoRepository.add(sampleHealthInfo);
        
    }
};