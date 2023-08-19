"Use strict"
export class Persona {
  constructor(nombre, edad, sexo, peso, altura, FDN) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.FechaDeNacimiento = FDN;
  }
  mostrarGeneracion(FechaDeNacimiento) {
    if (FechaDeNacimiento >= 1994 && FechaDeNacimiento <= 2010) {
      console.log("Generacion Z");
      console.log("Su rasgo caracteristico es : Irreverencia");
    } else if (FechaDeNacimiento >= 1981 && FechaDeNacimiento <= 1993) {
      console.log("Generacion Y millennials");
      console.log("Su rasgo caracteristico es : Frustracion");
    } else if (FechaDeNacimiento >= 1969 && FechaDeNacimiento <= 1980) {
      console.log("Generacion X");
      console.log("Su rasgo caracteristico es : Obsesion por el exito");
    } else if (FechaDeNacimiento >= 1949 && FechaDeNacimiento <= 1969) {
      console.log("Baby Boom");
      console.log("Su rasgo caracteristico es : Ambicion");
    } else if (FechaDeNacimiento >= 1930 && FechaDeNacimiento <= 1948) {
      console.log("Silent Generacion");
      console.log("Su rasgo caracteristico es : Austeridad");
    } else {
      console.log(
        "Ingresaste una edad que no esta en la tabla, ya eres una momia"
      );
    }
  }
  esMayorDeEdad(edad) {
    
    if (edad >= 18) {
      alert("Eres mayor de edad");
    } else {
      alert(
        "eres menor de edad mi ray, a la casa a dormir y ver mario bross"
      );
    }
  

 }
  mostrarDatos() {
    console.log(`Nombre : ${this.nombre}`);
    console.log(`Edad : ${this.edad}`);
    console.log(`Genero : ${this.sexo}`);
    console.log(`peso : ${this.peso}`);
    console.log(`altura : ${this.altura}`);
    console.log(`Fecha de Nacimiento : ${this.FechaDeNacimiento}`);
  }
  generarDNI() {
    this.DNI = Math.round(Math.random() * 10000000 * 11);
  }
}
