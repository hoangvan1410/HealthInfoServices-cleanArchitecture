const DatabaseService = require('../../../application/contracts/DatabaseServices');
const InMemoryHealthInfoRepository = require('./InMemoryHealthInfoRepository');
const HealthInfo = require('../../../entities/HealthInfo');
const mongoose = require("mongoose");

module.exports = class InMemoryDatabaseServices extends DatabaseService {
    constructor() {
        super();
        this.healthInfoRepository = new InMemoryHealthInfoRepository();
    }

    async initDatabase() {
        //Assign MongoDB connection string to Uri and declare options settings
        var uri = "mongodb+srv://admin:1234@cluster0.uum52.mongodb.net/healthInfo?retryWrites=true&w=majority"

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

    async seedData() {
        let sampleHealthInfo = new HealthInfo('a', 'b', 'c', 'd', 'e');
        sampleHealthInfo = await this.healthInfoRepository.add(sampleHealthInfo);

    }
};