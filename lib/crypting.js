var crypto = require('crypto');
const secure = require('./secure.js');
var keys = require('./encrypt.js');
var unkeys = require('./undo.js');

privateKey = secure.privateKey();
algorithm = secure.algorithm();



module.exports.encryption = function(world){
	return keys.encrypt(world);
};


module.exports.decrypt = function(data){
	return 	unkeys.UnMultipleLayers(data)
};

