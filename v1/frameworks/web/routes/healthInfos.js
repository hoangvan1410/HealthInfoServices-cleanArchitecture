const express = require('express');
const HealthInfoController = require('../../../controllers/healthInfos/HealthInfoController');

// address - api/students
// load dependencies
const healthInfoRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = HealthInfoController(dependencies);

    router.route('/')
        .get(controller.getAllHealthInfo)
        .post(controller.addNewHealthInfo);
    router.route('/:healthInfoId')
        .get(controller.getHealthInfo);
    return router;
};


module.exports = healthInfoRouter;