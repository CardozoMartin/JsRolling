
 const mosntrarHora = ()=>{
  

   const HoraActual = new Date();
   const hora = (HoraActual.getHours()<10? "0":"") +HoraActual.getHours();
   const minuto = (HoraActual.getMinutes()<10? "0":"")+HoraActual.getMinutes();
   const segundos = (HoraActual.getSeconds()<10? "0":"")+HoraActual.getSeconds();
    

    const HoraPorPantalla = `${hora}:${minuto}:${segundos}`
    document.getElementById('date').innerHTML = HoraPorPantalla;
 }
const mostrarFecha =()=>{
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const fecha = new Date();

const FechaPorPantall = (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
   document.getElementById("fecha").innerHTML = FechaPorPantall;
 }

const reloj = setInterval(mosntrarHora,1000);
mostrarFecha();

reloj;