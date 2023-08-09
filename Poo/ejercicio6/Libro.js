export class Libro {
    constructor(ISBN, titulo, autor, numDePag){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numDePag = numDePag;

    }

    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numDePag}`)
    }
}

