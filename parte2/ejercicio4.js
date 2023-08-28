
/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. 
*/
 
let suma = 0;
let numero;

while (true) {
  numero = prompt("Ingrese un número");

  if (numero === null) {
    break;
  }

  numero = Number(numero);

  if (isNaN(numero)) {
    alert("ingresa un numero no un texto");
    continue;
  }

  suma += numero;
}

alert(suma)
console.log(suma)