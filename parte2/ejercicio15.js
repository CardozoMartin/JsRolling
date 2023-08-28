/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt("Ingrese un Texto")
let contador = 0;
let cadena;
for (let i = 0; i < texto.length; i++) {
    cadena = texto.at(i).toLowerCase();
  
  if (
    cadena === "a" ||
    cadena === "e" ||
    cadena === "i" ||
    cadena === "o" ||
    cadena === "u" 
  ) {
    contador++;
  }
   }

console.log(contador);