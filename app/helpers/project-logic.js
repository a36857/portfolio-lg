'use strict';

const Project = require('../models/Project');
const redis   = require('../helpers/redis');
const onError = require('./handler-error').onError;

const REDIS_KEY = 'portfolio:projects';



module.exports.getAll = function(cb) {
  redis.get(REDIS_KEY, onError(cb,function(projects) {
      if(projects != null) {
          cb(null, JSON.parse(projects));
      }
      else {
          //console.log('from mongo');
          Project.find({}, onError(cb,function(projectsDB) {
              var listProjects = projectsDB.sort(function(a,b) { return b.code - a.code; });
              redis.set(REDIS_KEY, JSON.stringify(listProjects));
              redis.expire(REDIS_KEY, 3000);
              cb(null,listProjects);
          }));
      }
  }));
}



module.exports.getById = function(id,cb) {
    Project.findById(id, onError(cb,function(project){
        project == null ? cb('Resource ' +id + ' Not Found',null) : cb(null,project);
    }));
}



module.exports.create = function(project,cb) {
    var newProject = Project(project);
    newProject.save(function(err) {
        cb(err);
    });
}
