var crypto = require('crypto');
const make = require('./makeToAll.js');
module.exports.encrypt = function(Element){

	var data_encrypt = "";

	for(var i = 0; i < Element.length; i ++)
		data_encrypt += encrypting(Element[i],2);

	return MutipleLayers(make.MoveOrder(data_encrypt));

};


function MutipleLayers(Element){
 
  for(var i = 0; i < algorithm.length; i++)
  	Element = encrypting(Element, i)

  return Element;
}


function encrypting(world, number){
 
  var cipher = crypto.createCipher(algorithm[number],privateKey);
 var crypted = cipher.update(world,'utf8','hex');
 crypted += cipher.final('hex');

 return crypted;

}