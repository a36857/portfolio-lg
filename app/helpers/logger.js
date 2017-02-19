'use strict';

const Logger  = require('../models/Logger');
const onError = require('./handler-error').onError;

module.exports.getAll = function(cb) {
    Logger.find({},onError(cb,function(logs) {
        var list = logs.sort(function(a,b) { return b.code - a.code; })
                       .map(function(l) { return l.log; });
        cb(null,list);
    }));
}


function Log(message) {
    this.log = message;
}

module.exports.register = function(date,cb) {
    var newLog = Logger(new Log(date));
    newLog.save(function(err) {
        cb(err);
    });
}
