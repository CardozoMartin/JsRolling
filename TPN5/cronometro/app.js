
const botonIniciar = document.getElementById("botonIniciar");
const botonReiniciar = document.getElementById("botonReiniciar");
botonIniciar.addEventListener("click", reinciarCronometro);
botonReiniciar.addEventListener("click", reIniciar);

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");


let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo(){

	spanMinutos.innerHTML = minutos;
	spanSegundos.innerHTML = segundos;
	spanCentesimas.innerHTML = centesimas;

}

function reIniciar(){

	minutos = 0;
	segundos = 0;
	centesimas = 0;
	dibujarTiempo();
}

function reinciarCronometro(){

	if(corriendo){
		detener();
		botonReiniciar.disabled = false; 
	}
	else{
		botonReiniciar.disabled = true;
		iniciar();
	}
}

function iniciar(){

	const sumarMinuto = () => {

		if(minutos < 99) minutos++;
	}

	const sumarSegundo = () => {

		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
	}

	const incrementar = () => {

		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}

		dibujarTiempo();
	}

	corriendo = setInterval(incrementar, 10);
	botonIniciar.innerHTML = "Pausar";

}

function detener(){

	clearInterval(corriendo);
	corriendo = null;
	botonIniciar.innerHTML = "Iniciar";
}

dibujarTiempo();