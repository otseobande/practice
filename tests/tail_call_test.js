const tailFib = require('../src/tail_call_fib').tailFib;
const Chai = require('chai');

Chai.should();

describe.skip('Tail call optimization test', function() {
	it('returns correct value', function() {
		tailFib(8).should.be.equal(21)
	});

	it('runs despite extreme numbers', function() {
		(() => tailFib(6000)).should.not.throw(RangeError);
	})
});