algorithm = ['aes-256-ctr','aes-192-ctr','camellia-128-cfb','camellia-256-cfb'];
privateKey = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

module.exports.setKey = function(key){
	privateKey = key;
};
module.exports.privateKey = function(){
	return privateKey;
};
module.exports.algorithm = function(){
	return algorithm;
};