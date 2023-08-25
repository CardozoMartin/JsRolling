import { Persona } from "./persona.js";
export const obtenerPersonaDeLS = ()=>{
    return JSON.parse(localStorage.getItem("personas")) || [];
};

export const agregarPersonaALS = (nuevaPersona)=>{
    const personas = obtenerPersonaDeLS();

    personas.push(nuevaPersona);

    localStorage.setItem("personas",JSON.stringify(personas));
};

export const crearFilaTabla = (persona,indice)=>{
    const tPersona = document.getElementById('tablaPersona');

    const tr = document.createElement('tr');

    const tdIndice = document.createElement('td');
    tdIndice.innerText = indice;
    tr.appendChild(tdIndice);

    const tdNombre = document.createElement('td');
    tdNombre.innerText = persona.nombre;
    tr.appendChild(tdNombre);

    /*const tdEdad = document.createElement('td');
    tdEdad.innerText = persona.edad;
    tr.appendChild(tdEdad);*/
    
    const tdSexo = document.createElement('td');
    tdSexo.innerText = persona.sexo;
    tr.appendChild(tdSexo);

    const tdPeso = document.createElement('td');
    tdPeso.innerText = persona.peso;
    tr.appendChild(tdPeso);

    const tdAltura = document.createElement(`td`);
    tdAltura.innerText= persona.altura;
    tr.appendChild (tdAltura);

    const tdFecha = document.createElement ('td');
    tdFecha.innerText = persona.FechaDeNacimiento;
    tr.appendChild (tdFecha);

    const tdBotones = document.createElement('td');

  const btnVerEdad = document.createElement('button');
  const btnVerGeneracion = document.createElement('button');

  btnVerEdad.type = 'button';
  btnVerGeneracion.type = 'button';
  btnVerEdad.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
  btnVerGeneracion.classList.add('btn', 'btn-danger', 'btn-sm');
  btnVerEdad.innerText = 'Verficar Edad';
  btnVerGeneracion.innerText = 'Ver Generacion';

  btnVerEdad.onclick = () => {
    const verificarFecha = new Date().getFullYear() - new Date(persona.FechaDeNacimiento).getFullYear();
      
      if(verificarFecha > 18){
        alert(`${persona.nombre} Eres mayor de edad`)
      }else{
        alert(`${persona.nombre} Eres menor de edad`)
      }
  };

  btnVerGeneracion.onclick = () => {
    
    const año = persona.FechaDeNacimiento.split("/")[0];

    if (año >= 1994 && año <= 2010) {
      alert(`Generacion Z
      Su rasgo caracteristico es : Irreverencia`)
      
    } else if (año >= 1981 && año <= 1993) {
      alert(`${persona.nombre.toUpperCase()} tu año ${año} tu generacion es : Y millennials
      Su rasgo caracteristico es : Frustracion`)
    } else if (año >= 1969 && año <= 1980) {
      alert(`${persona.nombre.toUpperCase()} tu año ${año} tu generacion es : X
      Su rasgo caracteristico es : Obsesion por el exito`)
    } else if (año >= 1949 && año <= 1969) {
      alert(`${persona.nombre.toUpperCase()} tu año ${año} tu generacion es : Baby Boom
      Su rasgo caracteristico es : Ambicion`)
    } else if (año >= 1930 && año <= 1948) {
      alert(`${persona.nombre.toUpperCase()} tu año ${año} tu generacion es : Silent Generacion
      Su rasgo caracteristico es : Austeridad`)
    } else {
      alert(
        "Ingresaste una edad que no esta en la tabla !!"
      );
    }
  };

  tdBotones.appendChild(btnVerEdad);
  tdBotones.appendChild(btnVerGeneracion);

  tr.appendChild(tdBotones);

  tPersona.appendChild(tr);


}

export const cargarTabla = ()=>{
    const personas =  obtenerPersonaDeLS();


    const tPersona = document.getElementById('tablaPersona');
    tPersona.innerHTML="";

    personas.forEach((persona,indice) => {
        crearFilaTabla(persona,indice);
    });
}

/*const cargarTabla = document.getElementById('cargarTabla');
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
    
    
  }*/