/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30)
*/

for (let i = 30; i > 0; i--) {
    let piramide = "";
  
    for (let j = 1; j <= i; j++) {
        piramide += i ;
    }
  
    console.log(piramide);
     }