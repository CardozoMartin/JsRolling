import { Libro } from "./Libro.js";

const lib = new Libro(22,"Harry Potter","J. K. Rowling",80);

lib.mostrarLibro();

const lib2 = new Libro(23,"El Hobbit","J. R. R. Tolkien",90);

lib2.mostrarLibro();

if(lib.numDePag > lib2.numDePag){
    console.log(`el libro ${lib.titulo} tiene mas paginas` )
}else{
    console.log(`el libro ${lib2.titulo} tiene mas paginas` )
}