/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

*/




let input;
const ciudades = [];
let  paris = "paris";
while (true) {
  input = prompt("ingrese dato:");
  if(input === null){
    break
  }
  ciudades.push(input);
}
ciudades.splice(ciudades.length -1);
console.log("Array original")
console.log(ciudades);
console.log("Longitud del Array")
console.log("El array tiene una longitud de : " + ciudades.length);
console.log("la posicion 1, 2 y la ultima ") 
console.log(ciudades[0],ciudades[1],ciudades[ciudades.length - 1],);
console.log("se agrega a paris en la ultima posicion")
console.log(ciudades.push(paris));
console.log(ciudades);
console.log("Elemento en la segunda posicion es " + ciudades[1]);
ciudades[1] = "barcelona";
console.log("la segunda posicion fue modificada " + ciudades);