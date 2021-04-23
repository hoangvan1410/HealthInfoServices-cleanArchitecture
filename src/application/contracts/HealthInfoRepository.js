module.exports = class HealthInfoRepository{
    constructor(){}

    add(healthInfoInstance){
        return Promise.reject(new Error('not implement'));
    };

    update (healthInfoInstance){
        return Promise.reject(new Error('not implement'));
    }

    delete (healthInfoInstance){
        return Promise.reject(new Error('not implement'));
    }

    getById(healthInfoInstance){
        return Promise.reject(new Error('not implement'));
    }

    getAll(healthInfoInstance){
        return Promise.reject(new Error('not implement'));
    }
};