let texto =prompt( "Ingrese un Texto");

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
    console.log("la vocal " + cadena + " se encuentra en la posicion " + i)
    break;
  }
   }