"Use strict"
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
  const cargarPersona = ()=>{
    personas.forEach((item,)=>{
      
      const fila = document.createElement('tr');
      
      const columnas = `
      <td class="py-2">${item.nombre}</td>
      <td class="py-2">${item.edad}</td>
      <td class="py-2">${item.sexo}</td>
      <td class="py-2">${item.peso}Kg</td>
      <td class="py-2">${item.altura}Cm</td>
      <td class="py-2">${item.FechaDeNacimiento}</td>
      `
      const botonVerificar = document.createElement('button');
      botonVerificar.classList = ("btn btn-warning mb-2 mt-2 g-2")
      botonVerificar.textContent = 'Verificar Edad';
      botonVerificar.addEventListener('click', ()=>{
      const verificarFecha = new Date().getFullYear() - new Date(item.FechaDeNacimiento).getFullYear();
      console.log(verificarFecha);
      if(verificarFecha > 18){
        alert(`${item.nombre} Eres mayor de edad`)
      }else{
        alert(`${item.nombre} Eres menor de edad`)
      }
    });
      
      
      const botonGeneraciones = document.createElement('button');
      botonGeneraciones.classList = ("btn btn-success mb-2 mt-2 mx-5")
      botonGeneraciones.textContent = 'Ver Generacion';
      botonGeneraciones.addEventListener('click',()=>{
        item.mostrarGeneracion();
      })

      fila.innerHTML = columnas;
      fila.append(botonVerificar)
      fila.append(botonGeneraciones);
      cargarTabla.append(fila);
    })
    
    
  }


  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if (
      validateName(nombre,inputNombre) &&
      validateNumber(edad,inputEdad) &&
      validateName(genero,inputGenero) &&
      validateNumber(peso,inputPeso)&&
      validateName(altura,inputAltura)&&
      validateName(FechNac,inputFechaDeNacimiento)
    ) {
      const nuevaPersona = new Persona(nombre,edad,genero,peso,altura,FechNac);
      personas.push(nuevaPersona);
      document.getElementById('formulario').reset();
      
    }
    cargarPersona();
  });
  

 


  
