const InMemoryDatabaseServices = require ('../frameworks/persistence/InMemory/InMemoryDatabaseServices');
const MongoDBDatabaseServices = require ('../frameworks/persistence/InMemory/MongoDBDatabaseServices')
module.exports =(() =>{
    return {
        DatabaseService: new InMemoryDatabaseServices()
    };
})();