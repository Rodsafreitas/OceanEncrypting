module.exports.MoveOrder = function(Element){
	var data =  "";

	for(var i = Element.length -1; i >= 0; i--)
		data += Element[i];

	return data;
};