let num = prompt("ingrese un numero");

if(num % 2 == 0){
    console.log("es divisible por dos")
}else if(num % 3 == 0){
    console.log("es divisible por tres")
}
else if(num % 5 == 0){
    console.log("es divisible por cinco")
}
else if(num % 7 == 0){
    console.log("es divisible por siete")
}else{
    console.log("no es divisible por ninguno")
}