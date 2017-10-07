var index = require('./index.js');
var assert = require('assert');


describe('Testing with data', function(){
	it('the value is equal', function(){

		var nome = "rods";
		
		var data = index.setEncrypting(nome);

		var getValue = index.getData(data);

		assert.equal(nome,getValue,"wrong values");

	});

	it('the value is different', function(){
		var nome = "rods";

		var data = index.setEncrypting(nome);

		var getValue = index.getData("outro_nome");

		assert.notEqual(nome,getValue,"not to be equal");

	});
});