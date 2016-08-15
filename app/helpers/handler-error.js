
module.exports.onError = function(errcb,cb) {
    return function(err,result) {
        err ? errcb(err,null) : cb(result);
    }
}


module.exports.onErrorNext = function(next,cb) {
    return function(err,result) {
        err ? handlerErrorNext(err,next) : cb(result);
    }
}
function handlerErrorNext(err,next) {
    var error = new Error();
    error.status = typeof err === 'string' ? 404 : 500;
    error.message = typeof err === 'string' ? err : err.message;
    next(error);
}
