'use strict';

module.exports.handler = function(err,req,rsp,next) {
    rsp.status(500);
    rsp.send(err.message);
}
