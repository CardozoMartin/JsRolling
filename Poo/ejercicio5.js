/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona{
    constructor(nombre,edad,DNI,sexo,peso,altura,FDN){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.FechaDeNacimiento = FDN;
    }
    mostrarGeneracion(FechaDeNacimiento){
        if(FechaDeNacimiento >= 1994  && FechaDeNacimiento <= 2010){
            console.log("Generacion Z");
            console.log("Su rasgo caracteristico es : Irreverencia");
        }else if(FechaDeNacimiento >= 1981  && FechaDeNacimiento <= 1993){
            console.log("Generacion Y millennials");
            console.log("Su rasgo caracteristico es : Frustracion");
        }else if(FechaDeNacimiento >= 1969  && FechaDeNacimiento <= 1980){
            console.log("Generacion X");
            console.log("Su rasgo caracteristico es : Obsesion por el exito");
        }else if(FechaDeNacimiento >= 1949  && FechaDeNacimiento <= 1969){
            console.log("Baby Boom");
            console.log("Su rasgo caracteristico es : Ambicion");
        }else if(FechaDeNacimiento >= 1930  && FechaDeNacimiento <= 1948){
            console.log("Silent Generacion");
            console.log("Su rasgo caracteristico es : Austeridad");
        }else{
            console.log("Ingresaste una edad que no esta en la tabla, ya eres una momia")
        }
    }
    esMayorDeEdad(edad){
        if(edad >= 18){
            console.log("Eres mayor de edad")
        }else{
            console.log("eres menor de edad mi ray, a la casa a dormir y ver mario bross")
        }
    }
    mostrarDatos(){
        console.log(`Nombre : ${this.nombre}`);
        console.log(`Edad : ${this.edad}`);
        console.log(`Dni : ${this.generarDNI()}`);
        console.log(`peso : ${this.peso}`);
        console.log(`altura : ${this.altura}`);
        console.log(`Fecha de Nacimiento : ${this.FechaDeNacimiento}`);
        
    }
    generarDNI(){
        this.DNI = Math.round(Math.random()*10000000*11);
        console.log(`El dni es : ${this.DNI}`);
    }
}
let fecha = "1990";
let edad = 15;
const per = new Persona("Martin",edad,"Hombre",89,1.73,fecha);


console.log("Tu generacion y tu rasgo caracteristicos es :")
per.mostrarGeneracion(fecha);
console.log("--------------------------------------")
console.log("Verificando si es mayor de edad ")
per.esMayorDeEdad(edad)
console.log("--------------------------------------")
console.log("Todos los Datos de la Persona son :")
per.mostrarDatos();

