const HealthInfo = require('../../entities/HealthInfo');

module.exports = (HealthInfoRepository) => {

    async function Execute(height,weight, age, gender, medic_his) {
        // const healthInfo = await HealthInfoRepository.getById(id);

        // if (!height || !weight || !age || !gender || !medic_his) {
        //     throw new Error('validation failed');
        // }

        // // check if student exist by email
        // if (healthInfo) {
        //     throw new Error('id already exist in the system');
        // }

        // create new  object
        let newHealthInfo = new HealthInfo(height, weight, age, gender, medic_his);

        // persist 
        newHealthInfo = await HealthInfoRepository.add(newHealthInfo);

        return 'Health Info added successfully';
    }
    return {
        Execute
    };
};