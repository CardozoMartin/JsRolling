let texto = prompt("Ingrese una cadena de texto");
const cadenaDeTexto = (texto) =>{

    let textoMayusculas = texto.toUpperCase();
  if(textoMayusculas){
    console.log("el texto contiene mayusculas")
  }else if(texto === texto.toLowerCase ()){
    console.log("el texto contiene minusculas")
  }else{
    console.log("el texto contiene minusculas y mayusculas")
  }
}

const res = cadenaDeTexto(texto);

console.log(res);