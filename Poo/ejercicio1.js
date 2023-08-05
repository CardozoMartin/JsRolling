"Use strict"

/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

*/

class Auto{
    constructor(color,marca,modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;

    }

    encenderAuto(){
        console.log("El auto esta encendido");
    }

    apagarAuto(){
        console.log("el auto esta apagado");
    }
}
let color = "rojo";
let marca = "Fiat";
let modelo = "2022"
const auto = new Auto(color,marca,modelo);

console.log(auto)

auto.encenderAuto();
auto.apagarAuto();