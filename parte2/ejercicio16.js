let texto = prompt("Ingrese una cadena de texto")
let textoInvertido = "";

console.log(`El texto a invertir es ${texto}`)
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    console.log(`El texto invertido es ${textoInvertido}`);