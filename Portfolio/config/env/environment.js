'use strict';

const database = require('./database.json');
const redis    = require('./redis.json');

module.exports = {
    serverPort: Number(process.env.PORT) || '3000',
    db : database,
    redis: redis
};
