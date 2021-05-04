module.exports = ({ HealthInfoRepository, HealthInfo }) =>
    (height, weight, age, gender, medic_his) => {
        const healthInfo = new HealthInfo(null, height, weight, age, gender, medic_his)
        return HealthInfoRepository.persist(healthInfo);
    }