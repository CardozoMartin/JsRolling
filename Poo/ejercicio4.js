"Use strict"

/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Producto{
    constructor(codigo,nombre,precio){
         this.codigo = codigo;
         this.nombre = nombre;
         this.precio = precio;
    }

    mostrarDatos(){
            console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
          
    }
}



const pro = new Producto(2222,"Coca Cola",525);
const pro1 = new Producto(3333,"Fernet Branca",2400);
const pro2 = new Producto(4444,"Hielo 5Kg",700);

const productosArr = [pro, pro1, pro2]

for (const producto of productosArr) {
    producto.mostrarDatos();
  }
  
