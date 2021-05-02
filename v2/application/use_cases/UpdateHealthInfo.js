module.exports = (healthInfoId,data,{ UserRepository }) => {
  return UserRepository.merge(healthInfoId, data)
}