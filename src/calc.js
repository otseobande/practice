export default (function(){
    const calc = function(param){
	return eval(param)
    };

    calc.add = function(x,y){
	return x + y;
    };

    // other methods like the one above can be added.

    return calc;
})();