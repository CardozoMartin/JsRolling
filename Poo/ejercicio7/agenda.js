"use strict"
export class Agenda {
    constructor(tamanio){
        
        this.tamanio = tamanio;
        tamanio ? this.tamanio = tamanio : this.tamanio = 10;
        this.contactos = [];
    }

    añadirContactos(contacto){
        if(this.contactos.length === this.tamanio){
            console.log("No se puede agregar a otro contacto");
            return;
        }
        this.contactos.push(contacto);
    }
    existeContacto(nombre){
        const contactoExiste = this.contactos.find((item) =>{
            return item.nombre.toLowerCase() === nombre.toLowerCase();
        })

        if (contactoExiste) {
            console.log('Existe el contacto');
          } else {
            console.log('No se encontró el contacto');
          }
    }
    listarContactos() {
        this.contactos.forEach((item) => {
          console.log(`Nombre : ${item.nombre}, Numero : ${item.telefono}`);
        });
      }

      buscarContacto(nombre) {
        const contacto = this.contactos.find((item) => {
          return item.nombre.toLowerCase() === nombre.toLowerCase();
        });
    
        if (!contacto) {
          console.log('No existe el contacto buscado');
        } else {
          console.log(`${contacto.nombre}: ${contacto.telefono}`);
        }
      }

      eliminarContacto(nombre){
        const contacto = this.contactos.find((item) => {
            return item.nombre.toLowerCase() === nombre.toLowerCase();
          });
        
        if(contacto !== -1){
            console.log(`el contacto ${contacto.nombre} eliminado de la agenda`)
            this.contactos.splice(contacto,1);
            
        }else{
            console.log("No se encontro ningun contacto con ese nombre")
        }
      }

      agendaLlena(){
        return this.contactos.length >= this.tamanio;
      }

      huecosLibres() {
        return this.tamanio - this.contactos.length;
    }
}