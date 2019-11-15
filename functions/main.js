"use strict";

// Задача 1

function getSolutions(a, b, c) {
	let D = (b ** 2) - (4 * a * c);
	if (D < 0) {
		return {
			D: D
		};
	} else if (D == 0) {
		let x1 = -b / (2 * a);
		return {
			roots: [x1], 
			D: D
		};
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a); 
        return {
        	roots: [x1, x2], 
			D: D
        };
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if(result.D < 0) {
		console.log("Уравнение не имеет вещественных корней");	
	} else if (result.D == 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
	}
}

// Задача 2

function getAverageScore(data) {

	function getAverageArray(arr) {
		let sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum / arr.length;
	}

	let newData = {};
	let sumOfSubjects = 0;
	let lenOfObj = 0;
	for (let subject in data) {
		newData[subject] = getAverageArray(data[subject]);
		sumOfSubjects += newData[subject];
		lenOfObj++;
	}

	sumOfSubjects = sumOfSubjects / lenOfObj;
	newData['Average'] = sumOfSubjects;

	return newData;

}

let data2 = {
	algebra: [2, 4, 5, 4, 3, 2],
	geometry: [3,2,3,3,3,3],
	russian: [2,3,2,2,5,5,5],
	music: [3,5,3],
	english: [3,4,4,4],
	poetry: [3,4,5,5],
	physics: [2,5,3],
	french: [2,2,2]
}


console.log(getAverageScore(data2));


// Задача 3

function getPersonData(secretData) {

	function getAnswer(number) {
		if(number == 0) {
			return "Родриго";
		} else if (number == 1) {
			return "Эмильо";
		}
	}
	
	return { firstName: getAnswer(secretData.aaa), lastName: getAnswer(secretData.bbb) }
}



















