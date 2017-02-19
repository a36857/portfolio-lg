'use strict';

const logger  = require('../helpers/logger');
const onError = require('../helpers/handler-error').onErrorNext;

const view = 'logs';

module.exports.list = function(req,rsp,next) {
    logger.getAll(onError(next,function(logs) {
        rsp.render(view, { logs: logs } );
    }));
}
