import { Persona } from "./persona.js"
import { agregarPersonaALS } from "./personaUtilidades.js";

export const añadirPersona = (nombre,sexo,peso,altura,FDN)=>{
    const nuevaPersona = new Persona(nombre,sexo,peso,altura,FDN)
    agregarPersonaALS(nuevaPersona);
    alert("Se agrego Exitosamente a la nueva Persona")
}