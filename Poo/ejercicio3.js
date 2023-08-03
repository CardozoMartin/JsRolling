 /*
 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 p = 2*(a +b)
*/

class Rectagulo{
    
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    calcularPerimetro(alto, ancho){
        console.log("El alto es : " + alto);
        console.log("El ancho es : " + ancho);

        const perimetro = 2*(alto + ancho);
        return "El perimetro del Rectangulo es : " + perimetro;
        
    }


}

const  rec = new Rectagulo();
let alto = parseInt(prompt("Ingrese el alto"));
let ancho = parseInt(prompt("Ingrese el ancho"));
console.log(rec.calcularPerimetro(alto,ancho));

