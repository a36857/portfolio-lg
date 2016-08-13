'use strict';

const redis = require("redis");

var client = redis.createClient(16499,'redis-16499.c3.eu-west-1-1.ec2.cloud.redislabs.com');
client.auth('QbMtXYOUqBvAaYxV');


module.exports.get = function(db,cb) {
    client.get(db,cb);
}

module.exports.set = function(db,value,cb) {
    client.set(db,value,cb);
}

module.exports.expire = function(key,time){
    client.expireat(key,time);
}
