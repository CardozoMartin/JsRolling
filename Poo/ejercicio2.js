const cuenta = {
    nombre:"Alex",
    saldo:0,
    
    ingresar(dinero){
        if(0 < dinero){
          this.saldo += dinero;
          console.log("el dinero ingresado es : " + dinero);
          this.informar();
        }else{
          console.log("Por favor ingrese un monto superio a 0")
        }
        
  
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
  let opc;
  alert(`Bienvenido ${cuenta.nombre}`)
do{
  
  let opc = prompt("Digite una opcion \n1 - Ingresar Dinero \n2 - Extraer Dinero \n3 - Ver saldo \n4 - Salir");
  
  
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
      case "4":
        break
    default:
      if(opc === null){
        break;
      }
      alert("Ingresaste una opcion invalida")
      salir = prompt("Desea realizar otra operacion Si/No").toUpperCase();
      break;
  }
}while(salir.toUpperCase() === "SI");
