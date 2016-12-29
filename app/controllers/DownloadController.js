'use strict';

module.exports.get = function(req,rsp,next) {
    var file = __dirname + '/../../public/assets/CurriculumVitae-LuisGuerreiro.pdf';
    rsp.download(file);
}
