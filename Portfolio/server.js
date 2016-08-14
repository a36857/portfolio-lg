const http  = require('http');
const app   = require('./config/express');
const environment = require('./config/env/environment');

app.createApp(startServer);

function startServer(app) {
    var port = environment.serverPort;

    var server = http.createServer(app);
    server.on('error', onError);
    server.on('listening', onListening);
    server.listen(port);


    function onError(error) {
        if(error.syscall !== 'listen') {
            throw error;
        }

        var bind = 'Port: ' + port;

        // handle specific listen errors with friendly messages
        switch(error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    function onListening() {
        var addr = server.address();
        console.log('Listening on port: ' + addr.port);
    }
}
