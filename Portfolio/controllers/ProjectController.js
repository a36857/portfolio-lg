'use strict';

const Project = require('../models/Project');
const redis   = require('../redisClient');

const REDIS_DB = 'portfolio:projects';

module.exports.list = function(req,rsp,next) {
    redis.get(REDIS_DB, function(err,projects){
        if(projects!=null) rsp.send(JSON.parse(projects));
        else {
            Project.find({}, function(err,projectsDB) {
                if (err) {
                    rsp.status(500);
                    rsp.send(err.message);
                }
                redis.set(REDIS_DB,JSON.stringify(projectsDB));
                redis.expire(REDIS_DB,300);
                rsp.send(projectsDB);
            });
        }
    });
}

module.exports.show = function(req,rsp,next) {
    Project.findById(req.params.id, function(err,project){
        if(err){ rsp.status(500); rsp.send(err.message);}
        //rsp.set('Content-Type','application/json');
        rsp.send(project);
    });
}


module.exports.create = function(req,rsp,next) {
    var newProject = Project(req.body.project);
    newProject.save(function(err) {
        if(err){ rsp.status(500); rsp.send(err.message);}
        else rsp.send('ok');
    });
}
