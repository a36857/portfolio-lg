'use strict';

const redis = require("redis");

const config = require('./../../config/env/environment');

var client = redis.createClient(config.redis.port,config.redis.url);
client.auth(config.redis.password);


module.exports.get = function(key,cb) {
    client.get(key,cb);
}

module.exports.set = function(key,value,cb) {
    client.set(key,value,cb);
}

module.exports.expire = function(key,time){
    client.expireat(key,time);
}
