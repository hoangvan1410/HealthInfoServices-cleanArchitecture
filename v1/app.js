const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./frameworks/web/routes');
const projectDependencies = require('./config/projectDependencies');

const app = express();
const port = process.env.PORT || 3003;
const MONGODB_URI = "mongodb+srv://admin:1234@cluster0.uum52.mongodb.net/healthInfo?retryWrites=true&w=majority"
// load app only if db is alive and kicking
projectDependencies.DatabaseService.initDatabase(MONGODB_URI).then(() => {

    // load middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    //app.use(ErrorHandler);

    // eslint-disable-next-line arrow-body-style
    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    console.log(`db is not ready, err:${err}`);
});