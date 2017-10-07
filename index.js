var crypting = require('./lib/crypting.js');

module.exports.setEncrypting = function(data){
	return crypting.encryption(data);
};

module.exports.getData = function(data){
	return crypting.decrypt(data);
};
