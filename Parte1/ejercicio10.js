 let num = prompt("ingrese un numero");

 if(num % 2 ==0 && num % 3 ==0 && num % 5 ==0 && num % 7 ==0){
    console.log("es divisible por 2 3 5 y 7")
 }else if(num % 2 ==0 && num % 3 ==0 && num % 5 ==0){
    console.log("es divisible por 2 3 5")
 }else if(num % 2 ==0 && num % 3 ==0 ){
    console.log("es divisible por 2 3 5")
 }else if(num % 2 ==0 && num % 3 ==0 && num % 7 ==0){
    console.log("es divisible por 2 3 7")
 }else if(num % 7 ==0 && num % 3 ==0 && num % 5 ==0){
    console.log("es divisible por 7 3 5")
 }else if(num % 2 ==0 &&  num % 5 ==0){
    console.log("es divisible por 2  5")
 }else if(num % 2 ==0 &&  num % 7 ==0){
    console.log("es divisible por 2  7")
 }else if(num % 7 ==0 &&  num % 5 ==0){
    console.log("es divisible por 7  5")
 }else if(num % 3 ==0 &&  num % 5 ==0){
    console.log("es divisible por 3  5")
 }else if(num % 2 ==0 && num % 5 ==0 && num % 7 ==0){
    console.log("es divisible por 2 5 7")
 }else if(num % 2 ==0 ){
    console.log("es divisible por 2")
 }
 else if(num % 3 ==0 ){
    console.log("es divisible por 3")
 }
 else if(num % 5 ==0 ){
    console.log("es divisible por 5")
 }
 else if(num % 7 ==0 ){
    console.log("es divisible por 7")
 }
  else{
    console.log("no es divisible por ninguno")
 }