"Use strict"
export class Persona {
  constructor(nombre, edad, sexo, peso, altura, FDN) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.FechaDeNacimiento = FDN;
    this.codigo = self.crypto.randomUUID();
  }
   mostrarGeneracion() {
    console.log(this.FechaDeNacimiento)
    const año = this.FechaDeNacimiento.split("/")[0];

    if (año >= 1994 && año <= 2010) {
      alert(`Generacion Z
      Su rasgo caracteristico es : Irreverencia`)
      
    } else if (año >= 1981 && año <= 1993) {
      alert(`${this.nombre.toUpperCase()} tu año ${año} tu generacion es : Y millennials
      Su rasgo caracteristico es : Frustracion`)
    } else if (año >= 1969 && año <= 1980) {
      alert(`${this.nombre.toUpperCase()} tu año ${año} tu generacion es : X
      Su rasgo caracteristico es : Obsesion por el exito`)
    } else if (año >= 1949 && año <= 1969) {
      alert(`${this.nombre.toUpperCase()} tu año ${año} tu generacion es : Baby Boom
      Su rasgo caracteristico es : Ambicion`)
    } else if (año >= 1930 && año <= 1948) {
      alert(`${this.nombre.toUpperCase()} tu año ${año} tu generacion es : Silent Generacion
      Su rasgo caracteristico es : Austeridad`)
    } else {
      alert(
        "Ingresaste una edad que no esta en la tabla !!"
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
