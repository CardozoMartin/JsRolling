/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10


*/
 let linea = " -------------------------------- "
for (let i = 0; i < 500; i++) {
    console.log(i)
    
    if(i % 5 === 0 && i !== 500){
        console.log(linea)
    }
    if(i % 4 === 0){
        console.log(`${i} Es multiplo de 4`)
    }else if(i % 5 === 0){
      console.log(`${i} Es multiplo de 5`)
    }else if(i % 9 === 0){
      console.log(`${i} Es multiplo de 9`)
    }
  
    
}
