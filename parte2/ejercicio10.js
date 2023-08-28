 let filas =parseInt( prompt("Ingrese un numero para las filas"));
  let col =parseInt( prompt("Ingrese un numero para las columnas"));

  let numero = filas * col;

  for (let i = 0; i < filas; i++) {
    let filas = "";
    for (let j = 0; j < col; j++) {
    filas += `[${numero }]`;
      numero--;
    }
    console.log( filas );
  }