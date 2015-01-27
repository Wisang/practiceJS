function identityf(arg) {
	return function() {
		return arg;
	};
}

idf = identityf(3)

console.log(idf());

function addf(x) {
	return function(y) {
		return x+y
	}
}
console.log(addf(3)(4))

function add(a,b) {
	return a+b;
}

function mul(a,b) {
	return a*b;
}

function applyf(func) {
	return function(a) {
		return function(b) {
			return func(a,b);
		}
	};
}

addf = applyf(add);
console.log(addf(3)(4))
console.log(applyf(mul)(5)(6))

function curry(func, arg1) {
	return function(arg2) {
		return func(arg1, arg2);
	};
}

console.log(curry(mul,5)(5))

inc = curry(add, 1)
console.log(inc(10))

methodize = function(func) {
	return function(arg) {
		return func(this,arg);
	}
}

Number.prototype.add = methodize(add);

console.log((3).add(4));

demethodize = function(method) {
	return function(that,y) {
		return method.call(that, y);
	}
}

console.log(demethodize(Number.prototype.add)(5,6))


