import sillyObj from '../src/loose_equality';
import chai from 'chai';

chai.should();

describe('Loose equality challange', function(){
	it('should be an object',function(){
		sillyObj.should.not.be.null;
		sillyObj.should.be.an('object');
	});

	it('has a value property', function(){
		sillyObj.should.have.own.property('value');
	});

	it('evaluates to true', function(){
		(sillyObj == 1 && sillyObj == 2 && sillyObj == 3).should.be.true;
	});
});