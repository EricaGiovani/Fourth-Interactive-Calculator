// code here, goodluck!!
'use strict';
const prompt = require("prompt-sync")();

console.log("===Interactive Calculator===");
const name = prompt('Masukkan Nama: ');
console.log(`Welcome to Interactive Calculator, ${name}!`)

function firstNumber(){
  while(true){
    const firstNumber = prompt('Enter the Number: ');
    const number = Number(firstNumber);
  
  if (isNaN(number)){
    console.log('Must be a Number!');
  } else{
    return number;
  }
}
}
firstNumber();

function getOperator(){
  while(true){
    const inputOperator = prompt('Enter the Operator: ');
    const operator = ['+', '-', '*', '/', '%', '**'];

  if (!operator.includes(inputOperator)){
    console.log('Must be a Operator!');
  } else{
    return operator;
  }
}
}
getOperator();

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

