/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30)
*/

for (let i = 1; i <= 10; i++) {
    let linea = "";
  
    for (let j = 1; j <= i; j++) {
      linea += i ;
    }
  
    console.log(linea);
  }