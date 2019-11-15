"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    if(typeof percent !== 'number' && typeof percent !== 'string') {
        console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`)
    }
    if(typeof contribution !== 'number' && typeof contribution !== 'string') {
        console.log(`Параметр первоначальный взнос содержит неправильное значение ${contribution}`)
    }
    if(typeof amount !== 'number' && typeof amount !== 'string') {
        console.log(`Параметр общая стоимость содержит неправильное значение ${amount}`)
    }
    if(typeof date !== 'number' && typeof date !== 'string') {
        console.log(`Параметр срок ипотеки содержит неправильное значение ${date}`)
    }

    let S = amount - contribution;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let endYear = parseInt(date.slice(0, 4));
    let endMonth = parseInt(date.slice(5, 7));
    let totalMonth = ((endYear - currentYear) * 12) + (endMonth - currentMonth);
    let P = percent / 100 / 12;
    let monthPayment = S * (P + P / (((1 + P) ** totalMonth) - 1))
    let totalAmount = monthPayment * totalMonth;

    console.log(totalAmount);

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;
    if(name === "" || name == null || name == undefined) {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    } else {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    }
    console.log(greeting);

    return greeting;
}