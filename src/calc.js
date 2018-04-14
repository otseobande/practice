const calc = (param) => {
	if(typeof(param) !== 'string'){
		throw new TypeError('argument should be string');
	}

	return eval(param)
};

calc.add = (x,y) => {
	if(typeof(x) !== 'number' || typeof(y) !== 'number'){
		throw new TypeError('arguments should be numbers');
	}

	if(!x && !y){
		throw new Error('This function recieves two arguments');
	}

	return x + y;
};

// other methods like the one above can be added.

export default calc;