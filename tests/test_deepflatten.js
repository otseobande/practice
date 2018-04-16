import deepFlatten from '../src/deepflatten';
import Chai from 'chai';
import _ from 'lodash';

Chai.should();

describe('Deep flatten', function() {
	it('takes an array as an argument', function() {
		(() => deepFlatten([])).should.not.throw();
		(() => deepFlatten()).should.throw(TypeError);
		(() => deepFlatten('3')).should.throw(TypeError);
		(() => deepFlatten(4)).should.throw(TypeError);
	});

	it('thorougly flattens a nested array', function() {
		const arr = [1,2,3,[4,5,[6,7],8],9];

		deepFlatten(arr).filter((item) => Array.isArray(item))
						.should.be.empty;

		deepFlatten(arr).should.be.deep.equal([1,2,3,4,5,6,7,8,9]);
	});

	/*
	it('works on extremely nested large arrays', function() {
		const largeNestedArr = [..._.range(1,100),[..._.range(100,200),
								[..._.range(200,400),[..._.range(400,600)],[..._.range(600,800)],
								[..._.range(800,1000)]],..._.range(1000,1500)],..._.range(1500,2000)];

		const largeArrFlat = [..._.range(1,100),..._.range(100,200),..._.range(200,400),..._.range(400,600),
							  ..._.range(600,800),..._.range(800,1000),..._.range(1000,1500), ..._.range(1500,2000)];

		(() => deepFlatten(largeNestedArr)).should.not.throw(RangeError);
		deepFlatten(largeNestedArr).should.be.deep.equal(largeArrFlat);
	})*/

});