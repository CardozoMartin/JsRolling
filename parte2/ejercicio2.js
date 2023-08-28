/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/


let nota = prompt("Ingrese una nota");

nota = Number(nota);
if(isNaN(nota)){
    console.log("Introduce un numero, No puedes ingresar texto");
}else{
    if(nota >= 0 && nota <=2){
        console.log("Muy Deficiente");
      }else if(nota >= 3 && nota <=4){
        console.log("Insuficiente");
      }else if(nota >= 5 && nota <=6){
        console.log("suficiente");
      }else if(nota === 7){
        console.log("bien");
      }else if(nota >= 8 && nota <=9){
        console.log("notable");
      }else if(nota === 10){
        console.log("sobresaliente");
      }else{
        console.log("Ingresa una nota del 0 al 10")
      }
  
}