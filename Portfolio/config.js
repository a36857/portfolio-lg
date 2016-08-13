const express        = require('express');
const mongoose       = require('mongoose');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const favicon        = require('serve-favicon');

const server      = require('./server');
const environment = require('./config/environment');

// Create the application
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');

module.exports = function(app,cb) {

}
// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// CORS Support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Register routes
app.get('/',require('./controllers/HomeController').get);
app.get('/projects',require('./controllers/ProjectController').list);
app.post('/projects',require('./controllers/ProjectController').create);
app.get('/projects/:id',require('./controllers/ProjectController').show);

// Connect to MongoDB
mongoose.connect(environment.db.mongoose.url);
mongoose.connection.once('open', registerModels(function() {
    server.startServer(app);
}));


function registerModels(cb) {
    return function() {
        // Load the models.
        app.models = require('./models/index');
        cb();
    }
}
