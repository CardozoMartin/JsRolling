import { Persona } from "./persona.js";
import { 
    validarAltura,
    validateName,
    validateNumber, } from "./validacion.js";



const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('inputNombre');
const inputEdad = document.getElementById('inputEdad');
const inputGenero = document.getElementById('inputGenero');
const inputPeso = document.getElementById('inputPeso');
const inputAltura = document.getElementById('inputAltura');
const inputFechaDeNacimiento = document.getElementById('inputFechaDeNacimiento');

let nombre = '';
let edad = '';
let genero = '';
let peso = '';
let altura = '';
let FechNac = '';

inputNombre.addEventListener('blur', (e) => {
    const value = e.target.value;
  
 
  
    if (validateName(value, inputNombre)) {
      nombre = value;
    }
  });

  inputEdad.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    if (validateNumber(value, inputEdad)) {
        edad = value;
    }
  });
  inputGenero.addEventListener('blur', (e) => {
    const value = e.target.value;
  
  //   console.log(campoNombre)
  
    if (validateName(value, inputGenero)) {
        genero = value;
    }
  });
  inputPeso.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    if (validateNumber(value, inputPeso)) {
        peso = value;
    }
  });
  inputAltura.addEventListener('blur', (e) => {
    const value = e.target.value;
  
    if (validarAltura(value, inputAltura)) {
        altura = value;
    }
  });

  inputFechaDeNacimiento.addEventListener('blur', (e) => {
    const value = e.target.value;
  
  //   console.log(campoNombre)
  
    if (validateName(value, inputFechaDeNacimiento)) {
        FechNac = value;
    }
  });


  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Repetimos validacion por si no se produjo el blur
    if (
      validateName(nombre,inputNombre) &&
      validateNumber(edad,inputEdad) &&
      validateName(genero,inputGenero) &&
      validateNumber(peso,inputPeso)&&
      validateNumber(altura,inputAltura)&&
      validateName(FechNac,inputFechaDeNacimiento)
    ) {
      // Entra SOLAMENTE si TODAS son validas
      // Crear el contacto
      let dni;
      const NuevaPersona = new Persona(nombre,edad,dni,genero,peso,altura,FechNac);
      dni = NuevaPersona.generarDNI();

  
      console.log('Contacto creado', '🙂');
      console.log(NuevaPersona);
  
      // guardar el contacto -> JSON & localStorage
    }
  });
