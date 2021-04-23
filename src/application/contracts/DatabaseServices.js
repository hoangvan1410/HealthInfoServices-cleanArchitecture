module.exports = class DatabaseServices{
    constructor(){
        this.healthInfoRepository = null;
    }
    initDatabase(){
        return Promise.reject(new Error('not implement'))

    }
};