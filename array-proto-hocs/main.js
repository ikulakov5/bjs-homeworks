const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);



const memoize = (fn, limit) => {
	let results = [];

	return function() {
		const fnArgs = Array.from(arguments);
		const searchRes = results.find(result => compareArrays(result.args, fnArgs));

		if(searchRes) {
			console.log('Функция вызвана из памяти');
		}

		results.push({args: fnArgs, result: fn(...fnArgs)});

		if(results.length > limit) {
			results.shift();
		}

		return console.log(`Результат вычислений: ${results[results.length - 1].result}`);
	}
};



const sum = (a, b) => a + b;

const mSum = memoize(sum, 10);

console.log(mSum(3, 4));

console.log(mSum(3, 4));

console.log(mSum(5, 4));

console.log(mSum(11, 4));










