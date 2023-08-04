/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/
"use strict"
const array = [0,0,0,0,0,0,0,0,0,0,0];

const tirarDados = ()=>{
  return Math.round(Math.random()*1*6);
}

 const lanzamientoDeDados = (array)=>{

 }
for(let i = 0; i < 50;i++){
  let dado1 = tirarDados();
  let dado2 = tirarDados();
  let suma = dado1+dado2;
  array[suma - 2]++;
 console.log(`La suma de los dos dados fue : ${suma}`)
}


console.log("Suma // Apariciones")
for(let i =0; i<array.length;i++){
  let sum = i +2;
  let apariciones = array[i]
  console.log(`${sum}         ${apariciones} `)
}