let num = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa un numero"));
let num3 = parseInt(prompt("Ingresa un numero"));

if(num > num2 && num > num3){
  console.log("el mayor es el primer numero " );
}else if(num2 > num && num2 > num3){
  console.log( "El mayor es el segundo numero")
} else{
  console.log("el tercero es el mayor")
}