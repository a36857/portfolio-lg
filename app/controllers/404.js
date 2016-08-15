module.exports.routeNotFound = function(req,rsp,next) {
    rsp.redirect(303,'/');
}

module.exports.resourceNotFound = function(err,req,rsp,next) {
    if(err.status !== 404) {
        return next();
    } else {
        rsp.status(404);
        rsp.send('Resource Not Found');
    }
}
