const DatabaseService = require('../../../application/contracts/DatabaseServices');
const InMemoryHealthInfoRepository = require('./InMemoryHealthInfoRepository');
const HealthInfo = require('../../../entities/HealthInfo');
const mongoose = require("mongoose");

module.exports = class MongoDBDatabaseServices extends DatabaseService {
    constructor() {
        super();
        this.healthInfoRepository = new InMemoryHealthInfoRepository();
    }

    async initDatabase(uri) {
        // Declare a variable named option and assign optional settings
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        // Connect MongoDB Atlas using mongoose connect method
        mongoose.connect(uri, options).then(() => {
            console.log("Database connection established!");
        },
            err => {
                {
                    console.log("Error connecting Database instance due to:", err);
                }
            });
    }
    
};