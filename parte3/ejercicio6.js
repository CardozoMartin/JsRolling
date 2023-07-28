/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
✓ Nota: La fórmula del perímetro  es p = 2*(a +b)
*/

let alto = parseInt(prompt("ingrese la altura del rectangulo"));
let ancho = parseInt(prompt("ingrese el ancho del rectangulo"));

const rectangulo = (alto, ancho)=>{
  const resultado = 2*(alto + ancho);
  return resultado;
}


const res = rectangulo(alto, ancho);
console.log("El perimetro del rectangulo es : " + res);