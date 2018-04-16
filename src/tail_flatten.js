"use strict";

function tailFlatten(arr, arr_accum = [], start_index=0){
	if(start_index > arr.length - 1) return arr_accum;
	const currItem = arr[start_index];

	let flatArr = arr_accum.concat(Array.isArray(currItem) ? tailFlatten(currItem) : currItem);

	return tailFlatten(arr, flatArr, start_index + 1);
};

exports.tailFlatten = tailFlatten; 