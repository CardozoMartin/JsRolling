const cuenta = {
    nombre:"Alex",
    saldo:0,
    
    ingresar(dinero){
        this.saldo += dinero;
        console.log("el dinero ingresado es : " + dinero);
        this.informar();
  
    },
    extraer(dinero){
      //this.saldo = 0;
      if(0 < dinero){
        if(dinero <= this.saldo){
          this.saldo -= dinero;
          console.log("el dinero extraio es : " + dinero);
          this.informar();
          
        }else{
          console.log("No tienes suficiente dinero en la cuenta!")
        }
      }else {
        console.log("ingrese un numero valido")
      }
       
    },
    informar(){
      console.log("el saldo de la cuenta es : " + this.saldo)
    }
  }


  let salir;

do{
  alert(`Bienvenido ${cuenta.nombre}`)
  let opc = prompt("Digite una opcion 1 - Ingresar Dinero 2 - Extraer Dinero 3 - Ver saldo 4 - Salir");
  
  
  switch (opc) {
    case "1":
      let dinero = parseInt(prompt("Digite el monto a ingresar"));
      cuenta.ingresar(dinero)
       salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
    
      break;
    case "2":
      
      let extraer = parseInt(prompt("Digite el monto a extraer"))
      cuenta.extraer(extraer)
      salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
      break;
    case "3":
     cuenta.informar();
     salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
      break;
    default:
      if(opc === null){
        break;
      }
      alert("Ingresaste una opcion invalida")
      salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
      break;
  }
}while(salir.toUpperCase() === "SI");
