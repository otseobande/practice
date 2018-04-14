const calc = require('../src/calc.js')
const chai = require('chai');


describe('Function with method implementation', function(){
	it('Should be a function',function(){
		calc.should.be.a('function');
	});
}); 