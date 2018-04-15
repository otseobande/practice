import flatten from '../src/flatten(tega)';
import Chai from 'chai';

Chai.should();

describe('flatten (tega)', function() {
	it('thorougly flattens a nested array', function() {
		const arr = [1,2,3,[4,5,[6,7],8],9];

		flatten(arr).filter((item) => Array.isArray(item))
						.should.be.empty;

		flatten(arr).should.be.deep.equal([1,2,3,4,5,6,7,8,9]);
	});
});