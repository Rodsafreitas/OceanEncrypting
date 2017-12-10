var crypting = require('./lib/crypting.js');
var secure = require('./lib/secure.js');

module.exports.setEncrypting = function(data,key = ""){
	
	if(key != "")
		secure.setKey(key);
	return crypting.encryption(data);
};

module.exports.getData = function(data,key = ""){
	
	if(key != "")
		secure.setKey(key);

	return crypting.decrypt(data);
};