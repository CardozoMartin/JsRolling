/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

*/
/*
let num = parseInt(prompt("ingrese su edad"));


if(typeof num === "number"){
    if(num >=18){
        alert("Eres mayor de edad, ya puedes conducir")
    }else{
        alert("Eres menor de edad, no puedes conducir")
    }
}else{
    alert("ingrese un numero !")
}*/

let edad = parseInt(prompt("ingrese su edad"));

if(isNaN(edad)){
    console.log("ingrese un numero"); 
    
}else{
    if(edad >= 18){
        console.log("Eres mayor puedes ingresar");
      }else{
        console.log("no eres mayor no puedes ingresar");
      }
  
}