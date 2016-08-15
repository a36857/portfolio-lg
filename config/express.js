const express        = require('express');
const mongoose       = require('mongoose');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const favicon        = require('serve-favicon');

const environment = require('./env/environment');
const cors        = require('./middlewares/cors');
const routes      = require('./routes/routes');

const ctr404  = require('../app/controllers/404');
const ctr500  = require('../app/controllers/500');

// Create the application
const app = express();

module.exports.createApp = function(startServer) {
    // view engine setup
    app.set('views',path.join(__dirname, '../app/views'));
    app.set('view engine','hbs');


    // Add Middleware necessary for REST APIs
    app.use(bodyParser.urlencoded({extended: true})); //parse application/x-www-form-urlencoded
    app.use(bodyParser.json());
    app.use(methodOverride('X-HTTP-Method-Override'));

    app.use(express.static(path.join(__dirname, '../public')));
    app.use(favicon(path.join(__dirname, '../public/assets', 'favicon.png')));

    // CORS Support
    //app.use(cors.enable);

    //Register routes
    app.use('/',routes);
    app.get('*',ctr404.routeNotFound);

    // error handlers
    app.use(ctr404.resourceNotFound);
    app.use(ctr500.handler);

    // Connect to MongoDB
    mongoose.connect(environment.db.mongoose.url);
    mongoose.connection.once('open',registerModels(function() {
        startServer(app);
    }));
}

function registerModels(cb) {
    return function() {
        // Load the models.
        app.models = require('./../app/models/application_models');
        cb();
    }
}
