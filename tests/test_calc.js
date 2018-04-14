import calc from '../src/calc.js';
import chai from 'chai';

chai.should();

describe('Calc function', function(){
	describe('Main calc function', function() {
		it('should be a function', function(){
			calc.should.be.a('function');
		});

		it('evaluates its arguments', function(){
			calc('2 + 2').should.equal(4);
		});

		it('throws an error if argument is not a string', function(){
			(() => calc(2)).should.throw(TypeError);
			(() => calc('3 + 4')).should.not.throw();
		});
	});
	
	describe("Calc's add method", function(){
		it('should be a method of calc', function(){
			calc.should.have.own.property('add');
			calc.add.should.be.a('function');
		});

		it('recieves at least two arguments', function(){
			(() => calc.add()).should.throw();
			(() => calc.add(4)).should.throw();
			(() => calc.add(undefined, 5)).should.throw();
		});

		it('returns an addition of its arguments', function(){
			calc.add(5,2).should.equal(7);
		});

		it('throws an error if arguments are not numbers', function(){
			(() => calc.add(5,2)).should.not.throw();
			(() => calc.add('4',2)).should.throw();
			(() => calc.add(4,'2')).should.throw();
		});
	});
}); 