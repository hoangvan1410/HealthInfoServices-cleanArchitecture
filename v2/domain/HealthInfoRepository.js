'use strict'
module.exports = class{

    persist(domainHealthInfo){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };

    merge (userId,data){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove (userId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }    

    getById(healthInfoId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByUserId(userId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find(){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};