'use strict';

module.exports.get = function(req,rsp,next) {
    var file = __dirname + '/../../public/assets/CurriculumVitae-LuisGuerreiro.pdf';
	console.log("----------------------------------------------");
	console.log(file);
    rsp.download(file);
	console.log("----------------------------------------------");
}
