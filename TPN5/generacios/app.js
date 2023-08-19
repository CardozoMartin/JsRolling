import { Persona } from "./persona.js";
import { 
  validacionGenero,
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
let dni = "";
let genero = '';
let peso = '';
let altura = '';
let FechNac = '';
const personas = [];
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
  
  
  
    if (validacionGenero(value, inputGenero)) {
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
  
 
  
    if (validateName(value, inputFechaDeNacimiento)) {
        FechNac = value;
    }
  });
  
  const cargarTabla = document.getElementById('cargarTabla');

  function mostrarPersonaEnPantalla(persona) {
    const item = document.createElement('li');
    item.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Sexo: ${persona.sexo}, peso: ${persona.peso}, altura: ${persona.altura}, Fecha de Nacimiento: ${persona.FechaDeNacimiento}`;
    
    const botonVerificar = document.createElement('button');
    botonVerificar.classList = ("btn btn-warning")
    botonVerificar.textContent = 'Verificar Edad';
    botonVerificar.addEventListener('click', (edad)=>{
      if(edad < 18){
        alert("es Mayor")
      }else{
        alert("es menor")
      }
    });

    item.append(botonVerificar);
    cargarTabla.append(item);
}
  /*const cargarPersona = ()=>{
    personas.forEach((item,)=>{
     
      const fila = document.createElement('tr');
      const columnas = `
      <td>${item.nombre}</td>
      <td>${item.edad}</td>
      <td>${item.sexo}</td>
      <td>${item.peso}</td>
      <td>${item.altura}</td>
      <td>${item.FechaDeNacimiento}</td>
      <td><button class="btn btn-warning onClick="mayorMenor(${item.edad})">Ver generacion</button></td>
      `
      
      fila.innerHTML = columnas;
      cargarTabla.append(fila);
    })
    
  }*/

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Repetimos validacion por si no se produjo el blur
    if (
      validateName(nombre,inputNombre) &&
      validateNumber(edad,inputEdad) &&
      validateName(genero,inputGenero) &&
      validateNumber(peso,inputPeso)&&
      validateName(altura,inputAltura)&&
      validateName(FechNac,inputFechaDeNacimiento)
    ) {
      // Entra SOLAMENTE si TODAS son validas
      // Crear el contacto
      const nuevaPersona = new Persona(nombre,edad,genero,peso,altura,FechNac);
            personas.push(nuevaPersona); // Agregar persona al array
            console.log(personas)
            mostrarPersonaEnPantalla(nuevaPersona);

      document.getElementById('formulario').reset();
  
      
  
      // guardar el contacto -> JSON & localStorage
    }
  });

 


  
