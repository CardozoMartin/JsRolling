"Use strict"
import { añadirPersona } from "./abm.js";
import { Persona } from "./persona.js";
import { cargarTabla } from "./personaUtilidades.js";
import { 
  validacionGenero,
    validarAltura,
    validateName,
    validateNumber, } from "./validacion.js";

    cargarTabla();



const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('inputNombre');

const inputEdad = document.getElementById('inputEdad');
const inputGenero = document.getElementById('inputGenero');
const inputPeso = document.getElementById('inputPeso');
const inputAltura = document.getElementById('inputAltura');
const inputFechaDeNacimiento = document.getElementById('inputFechaDeNacimiento');


inputNombre.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    validateName(value, inputNombre)
  });

  
 /* inputEdad.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    validateNumber(value, inputEdad)
  });*/
  inputGenero.addEventListener('blur', (e) => {
    const value = e.target.value;
  
  
  
    validacionGenero(value, inputGenero)
  });
  inputPeso.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    validateNumber(value, inputPeso)
  });
  inputAltura.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    validarAltura(value, inputAltura)
  });

  inputFechaDeNacimiento.addEventListener('blur', (e) => {
    const value = e.target.value;
  
 
  
    validateName(value, inputFechaDeNacimiento)
  });
  
  


  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = inputNombre.value;
let edad =inputEdad.value ;

let genero = inputGenero.value;
let peso = inputPeso.value;
let altura = inputAltura.value;
let FechNac = inputFechaDeNacimiento.value;
  
    if (
      validateName(nombre,inputNombre) &&
      validateNumber(edad,inputEdad) &&
      validateName(genero,inputGenero) &&
      validateNumber(peso,inputPeso)&&
      validateName(altura,inputAltura)&&
      validateName(FechNac,inputFechaDeNacimiento)
    ) {
      añadirPersona(nombre,genero,peso,altura,FechNac)
      cargarTabla();
      document.getElementById('formulario').reset();
      
    }
    
  });
  

 


  
