'use strict'

module.exports = (healthInfoID,{ HealthRepository }) =>{
    return HealthRepository.remove(healthInfoID);
}
