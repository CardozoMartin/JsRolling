"use strict"
import { Agenda } from "./agenda.js";
import { Contacto } from "./contacto.js";

const agenda = new Agenda();
const contacto = new Contacto("Martin",123456);
const contacto2 = new Contacto("juan",123456);
const contacto3 = new Contacto("bianca",123456);
const contacto4 = new Contacto("cinthia",123456);
const contacto5 = new Contacto("lucia",123456);
const contacto6 = new Contacto("yamila",123456);
const contacto7 = new Contacto("juanCarlos",123456);
const contacto8 = new Contacto("gabriel",123456);
const contacto9 = new Contacto("eze",123456);
const contacto1 = new Contacto("Fernanda",123978);

agenda.añadirContactos(contacto);
agenda.añadirContactos(contacto1);
agenda.añadirContactos(contacto2);
agenda.añadirContactos(contacto3);
agenda.añadirContactos(contacto4);
agenda.añadirContactos(contacto5);
agenda.añadirContactos(contacto6);
agenda.añadirContactos(contacto7);
agenda.añadirContactos(contacto8);




agenda.existeContacto("Fernanda")

agenda.listarContactos();

agenda.buscarContacto("Martin")

//agenda.eliminarContacto("Martin")

//agenda.listarContactos()



if(agenda.agendaLlena()){
    console.log("la agenda esta llena")
}else{
console.log("la agenda no esta llena")
}

console.log(`quedan lugares ${agenda.huecosLibres()}`)


