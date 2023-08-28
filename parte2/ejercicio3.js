/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
*/
 
let acumulador = " ";
while(true){
    let texto = prompt("Ingrese una palabra")
    if(texto === null){
        break;
    }
    acumulador = acumulador + " - " + texto;
}
console.log(acumulador );
