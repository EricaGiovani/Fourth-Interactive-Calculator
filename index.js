// code here, goodluck!!
'use strict';
const prompt = require("prompt-sync")();

console.log("===Interactive Calculator===");
const name = prompt('Masukkan Nama: ');
console.log(`Welcome to Interactive Calculator, ${name}!`)

function firstNumber(){
  while(true){
    const enterFirstNumber = prompt('Enter the Number: ');
    const number1 = Number(enterFirstNumber);
  
  if (isNaN(number1)){
    console.log('Must be a Number!');
  } else{
    return number1;
  }
}
}

function getOperator(){
  while(true){
    const inputOperator = prompt('Enter the Operator: ');
    const operator = ['+', '-', '*', '/', '%', '**'];

  if (!operator.includes(inputOperator)){
    console.log('Must be a Operator!');
  } else{
    return inputOperator;
  }
}
}

function plus(a,b){
  return a + b;
}

function minus(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function modulus(a,b){
  return a % b;
}

function power(a,b){
  return a ** b;
}

function divide(a,b){
  if (b === 0){
    return "You Can't Divide By Zero/0";
  } else {
    return a / b;
  }
}

function secondNumber(){
  while(true){
    const enterSecondNumber = prompt('Enter the Number: ');
    const number2 = Number(enterSecondNumber);
  
  if (isNaN(number2)){
    console.log('Must be a Number!');
  } else{
    return number2;
  }
}
}

while (true){
  const allFirstNumber = firstNumber();
  const allOperator = getOperator();
  const allSecondNumber = secondNumber();

  let result;
    switch (allOperator){
      case '+':
        result = plus(allFirstNumber, allSecondNumber);
        break;
      case '-':
        result = minus(allFirstNumber, allSecondNumber);
        break;
      case '*':
        result = multiply(allFirstNumber, allSecondNumber);
        break;
      case '/':
        result = divide(allFirstNumber, allSecondNumber);
        break;
      case '%':
        result = modulus(allFirstNumber, allSecondNumber);
        break;
      case '**':
        result = power(allFirstNumber, allSecondNumber);
        break;
      default:
        result = 'This Is Not An Operator';
  }

  const reserveResult = result ?? 'There is no Result';
  console.log(`The Result is ${result}`);

  if (typeof result === 'number'){
  const sign = (result > 0) ? 'Positive' : (result < 0) ? 'Negative' : 'Zero';
  const type = Number.isInteger(result) ? 'Integer' : 'Desimal';
  const parity = (type === 'Integer' && result % 2 === 0) ? 'Even' : (type === 'Integer' ? 'Odd' : '');

  console.log("===The Results of The Analysis===");
  console.log(`Positive or Negative or Zero : ${sign}`);
  console.log(`Integer or Desimal : ${type}`);
  console.log(`Even or Odd : ${parity}`);

  } else {
  console.log(result);
  };

  const ask = prompt('Do You Want To Continue? (yes/no)');
  if (ask === 'no'){
    break;
  }
}







