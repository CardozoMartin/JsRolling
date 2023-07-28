/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*//*
  let suma2 = 0;
  let suma3 =0;
let suma4 = 0;
  let suma5 =0;
let suma6 = 0;
  let suma7 =0;
let suma8 = 0;
  let suma9 =0;
let suma10 = 0;
  let suma11 =0;
let suma12 = 0;
*/
const array = [suma2=0,suma3=0,suma4=0,suma5=0,suma6=0,suma7=0,suma8=0,suma9=0,suma10=0,suma11=0,suma12=0];
for(let i = 0; i < 50;i++){
  let dado1 = Math.round(Math.random()*1*6)
  let dado2 = Math.round(Math.random()*1*6)
  let suma = dado1+dado2;
  if(suma === 2){
    array[0]+=1;
  }else if(suma === 3){
    array[1]+=1;
  }else if(suma === 4){
    array[2]+=1;
  }else if(suma === 5){
    array[3]+=1;
  }else if(suma === 6){
    array[4]+=1;
  }else if(suma === 7){
    array[5]+=1;
  }else if(suma === 8){
    array[6]+=1;
  }else if(suma === 9){
    array[7]+=1;
  }else if(suma === 10){
    array[8]+=1;
  }
  else if(suma === 11){
    array[9]+=1;
  }else if(suma === 12){
    array[10]+=1;
  }
 console.log(`La suma de los dos dados fue : ${suma}`)
}

for(let i =0; i<array.length;i++){
  let sum = i +2;
  let apariciones = array[i]
  console.log(`${sum} ${apariciones} `)
}