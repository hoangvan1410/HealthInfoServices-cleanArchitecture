const express = require('express');
const healthInfos = require('./healthInfos');

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const healthInfoRouter = healthInfos(dependencies);

    routes.use('/healthInfos', healthInfoRouter);
    return routes;

};


module.exports = apiRouter;