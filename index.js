// code here, goodluck!!
'use strict';
const prompt = require("prompt-sync")();

console.log("===Interactive Calculator===");
const name = prompt('Masukkan Nama: ');
console.log(`Welcome to Interactive Calculator, ${name}!`)

function getNumber(){
  while(true){
    const input = prompt('Enter the Number: ');
    const number = Number(input);
  
  if (isNaN(number)){
    console.log('Must be a Number!');
  } else{
    return number;
  }
}
}
getNumber();