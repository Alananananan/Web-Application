const num1 = 10;
const num2 = 5;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;


const divide = (a, b) => {
    if (b === 0) {
        return "undefined (cannot divide by zero)";
    }
    return a / b;
};


console.log(`The result of ${num1} + ${num2} is ${add(num1, num2)}.`);
console.log(`The result of ${num1} - ${num2} is ${subtract(num1, num2)}.`);
console.log(`The result of ${num1} * ${num2} is ${multiply(num1, num2)}.`);


console.log(`The result of ${num1} / ${num2} is ${divide(num1, num2)}.`);

