module.exports = ({ HealthInfoRepository }) =>
  (id, data) => HealthInfoRepository.merge(id, data)
