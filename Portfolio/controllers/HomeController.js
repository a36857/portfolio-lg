'use strict';

const view = 'home';

module.exports.get = function(req,rsp,next) {
  rsp.render(view, { project: req.query.new });
}
