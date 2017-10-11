var index = require('./index.js');
var assert = require('assert');


describe('Testing with data', function(){
	it('the value is equal', function(){

		var nome = "rods";
		
		var data = index.setEncrypting(nome,'$ad@');

		var getValue = index.getData(data,'$ad@');

		assert.equal(nome,getValue,"wrong values");

	});

	it('the value is different', function(){
		var nome = "rods";

		var data = index.setEncrypting(nome,'$ad@');

		var getValue = index.getData("outro_nome",'$ad@');

		assert.notEqual(nome,getValue,"not to be equal");

	});

	it('the value is different', function (){
		var nome = "rods";
		
		var data = index.setEncrypting(nome,'$fd@');

		var getValue = index.getData(data,'$ad@');

		assert.notEqual(nome,getValue,"wrong keys");
	});

});