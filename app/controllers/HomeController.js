'use strict';

const logger  = require('./../helpers/logger');
const onError = require('../helpers/handler-error').onErrorNext;

const view = 'home';

module.exports.get = function(req,rsp,next) {
    if(!req.query.lg) logger.register(new Date(),onError(next,home));
    else home();

    function home() {
        rsp.render(view, { project: req.query.new });
    }
}
