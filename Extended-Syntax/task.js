"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D = b ** 2 - 4 *a * c;
    let x = [];

    if(D < 0) {
        x[0] = undefined;
    }
    else if (D == 0) {
        let result = -b / (2 * а);
        x[0] = result; 
    }
    else if (D > 0) {
        let result = -b + Math.sqrt(D) / 2 * a;
        let result2 = -b - Math.sqrt(D) / 2 * a;
        x[0] = result; x[1] = result2; 
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let averageMark = 0;

    if(marks.length > 5) {
        marks = marks.slice(0, 5);
        console.log("Оценок больше пяти!");
    }

    let arrLength = marks.length;

    for (let i = 0; i < arrLength; i++) {
        averageMark += marks[i];
    }
    averageMark = averageMark / arrLength;

    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result;
    let guestYear = dateOfBirthday.getFullYear();
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();

    if(currentYear - guestYear > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    else result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    console.log(result)
    return result;
}