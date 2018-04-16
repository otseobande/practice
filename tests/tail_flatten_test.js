const tailFlatten = require('../src/tail_flatten').tailFlatten;
const Chai = require('chai');
const _ = require('lodash');

Chai.should();

describe.skip('Tail Call optimization of array flatten', function() {
	const arr = [1,2,3,[4,5,[6,7],8],9];
	const flatArr = tailFlatten(arr);

	it('returns an array', function() {
		flatArr.should.be.an('array');
	});

	it('flattens a deeply nested array thoroughly', function() {
		flatArr.filter((item) => Array.isArray(item))
						.should.be.empty;

		flatArr.should.be.deep.equal([1,2,3,4,5,6,7,8,9]);
	});

	it('works on extremely nested large arrays', function() {
		const largeNestedArr = [..._.range(1,100),[..._.range(100,200),
								[..._.range(200,400),[..._.range(400,600)],[..._.range(600,800)],
								[..._.range(800,1000)]],..._.range(1000,1500)],..._.range(1500,2000)];

		const largeArrFlat = [..._.range(1,100),..._.range(100,200),..._.range(200,400),..._.range(400,600),
							  ..._.range(600,800),..._.range(800,1000),..._.range(1000,1500), ..._.range(1500,2000)];

		(() => tailFib(largeNestedArr)).should.not.throw(RangeError);
		tailFlatten(largeNestedArr).should.be.deep.equal(largeArrFlat);
	})

});