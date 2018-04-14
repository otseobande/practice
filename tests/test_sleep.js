import Sleep from '../src/sleep';
import Chai from 'chai';
import { performance } from 'perf_hooks';

Chai.should();

describe('Sleep function', function(){
	it('delay execution', async function(){
		const ms = 1000;
		
		const begin = performance.now();
		await Sleep(ms);
		const end = performance.now();

		end.should.be.above(begin + ms);
	});
});