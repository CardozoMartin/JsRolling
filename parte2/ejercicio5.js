/*
Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666

*/

let num = 1 ;
let piramide = " " ;
num = Number(num);
while(num < 31){
  piramide += num * 1;
    console.log(piramide)
    num += 1;
}

/*
for (let i = 1; i <= 30; i++) {
  let linea = "";

  for (let j = 1; j <= i; j++) {
    linea += i ;
  }

  console.log(linea);
}
*/

/*
Perdon gaby y eze no la pude hacer con un while como pedia pero salio la piramide pero no de ltodo bien y la hice mejor con el for :C
*/

