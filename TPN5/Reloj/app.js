
 const mosntrarHora = ()=>{
    const HoraActual = new Date();
    const hora = (HoraActual.getHours()<10? "0":"") +HoraActual.getHours();
    const minuto = (HoraActual.getMinutes()<10? "0":"")+HoraActual.getMinutes();
    const segundos = (HoraActual.getSeconds()<10? "0":"")+HoraActual.getSeconds();
    

    const HoraPorPantalla = `${hora}:${minuto}:${segundos}`
    document.getElementById('date').innerHTML = HoraPorPantalla;
 }

const reloj = setInterval(mosntrarHora,1000);

reloj;