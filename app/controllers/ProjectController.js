'use strict';

const Project = require('../helpers/project-logic');
const onError = require('../helpers/handler-error').onErrorNext;


module.exports.list = function(req,rsp,next) {
    Project.getAll(onError(next,function(projects) {
        rsp.send(projects);
    }));
}

module.exports.show = function(req,rsp,next) {
    Project.getById(req.params.id,onError(next,function(project) {
        rsp.send(project);
    }));
}


module.exports.create = function(req,rsp,next) {
    Project.create(req.body.project,onError(next,function() {
        rsp.send('ok');
    }));
}
