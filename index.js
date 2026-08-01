// code here, goodluck!!
'use strict';
const prompt = require("prompt-sync")();

console.log("===Interactive Calculator===");
const name = prompt('Masukkan Nama: ');
console.log(`Welcome to Interactive Calculator, ${name}!`)

function getNumber(){
  while(true){
    const inputNumber = prompt('Enter the Number: ');
    const number = Number(inputNumber);
  
  if (isNaN(number)){
    console.log('Must be a Number!');
  } else{
    return number;
  }
}
}
getNumber();

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