"use strict"
import { Agenda } from "./agenda.js";
import { Contacto } from "./contacto.js";

const agenda = new Agenda();
const contacto = new Contacto("Martin",123456);
const contacto2 = new Contacto("juan",123456);


agenda.añadirContactos(contacto);
agenda.añadirContactos(contacto2);

let opc;
let salir;
do{
    opc = prompt("Bievenido \n1 - Añadir contacto \n2 - Buscar contacto \n3 - Ver contactos \n4 - Verificar contacto \n5 - Eliminar Contacto \n6 - ver tamaño de agenda \n7 - salir ");
    switch (opc) {
        case "1":
            let nombre = prompt("Ingrese el nombre del contacto")
            let numero = prompt("Ingrese el numero de telefono")
            const nuevoContacto = new Contacto(nombre,numero);
            agenda.añadirContactos(nuevoContacto);
            salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
            break;
        case "2":
            let buscarContacto = prompt("Ingrese el nombre del contacto que desea buscar")
            agenda.buscarContacto(buscarContacto);
            salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
            break;
        case "3":
            agenda.listarContactos();
            salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
            break;
        case "4":
            let contactoExiste = prompt("Ingrese el nombre del contacto a verificar");
            agenda.existeContacto(contactoExiste);
            salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
            break;
        case "5":
            let eliminarContacto = prompt("Ingrese el nombre del contacto a eliminar").toLowerCase();
            agenda.eliminarContacto(eliminarContacto);
            agenda.listarContactos();
            salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
            break;
        case "6":  
            if(agenda.agendaLlena()){
                console.log("la agenda esta llena")
            }else{
                console.log("la agenda no esta llena")
                console.log(`quedan lugares ${agenda.huecosLibres()}`)
                }  
                salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
                break;  
        case "7":
            break;          
        default:
            if(opc === null){
                break;
              }
              alert("Ingresaste una opcion invalida")
              salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
              break;
    }

}while(salir.toUpperCase() === "SI");





agenda.existeContacto("Fernanda")

agenda.listarContactos();

agenda.buscarContacto("Martin")

//agenda.eliminarContacto("Martin")

//agenda.listarContactos()





console.log(`quedan lugares ${agenda.huecosLibres()}`)


