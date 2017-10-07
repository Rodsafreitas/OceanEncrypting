var crypto = require('crypto');
const make = require('./makeToAll.js');

function descryptWorlds(Element){
	var data = "";

	for(var i = 0; i <= Element.length; i += 2)
		data += descrypting(Element.substring(i,i+2), 2)

	return data;
}

function descrypting(token, number){
	var decipher = crypto.createDecipher(algorithm[number], privateKey);
	var descrypt = decipher.update(token,'hex','utf8');
	descrypt += decipher.final('utf8');

	return descrypt;
}

module.exports.UnMultipleLayers = function (Element){

	for(var i = algorithm.length - 1; i >= 0; i--)
		Element = descrypting(Element, i);

	return descryptWorlds(make.MoveOrder(Element));

};
