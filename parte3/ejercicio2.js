
/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/



let num = parseInt(prompt("Ingrese un numero"));
 
const esParImpar = (num) =>{
    if(num % 2 === 0){
        return alert("el numero es par")
      }else{
        return alert("el numero es impar")
      }
}

esParImpar(num);
