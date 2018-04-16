"use strict";

function tailFib(n, curr=1, prev=0) {
	if(n === 0){
		return prev;
	}

	if(n === 1){
		return curr;
	}

	return tailFib(n - 1, curr+prev, curr) 
};

exports.tailFib = tailFib;