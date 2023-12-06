

console.log("Bienvenido a nuestro simulador de seguros KAONYX");
console.log("A continuación te solicitaremos unos datos para poder hacer tu consulta");

let nombre = prompt("Ingresa tu nombre, por favor");
let apellido = prompt("Ingresa tu apellido, por favor");
let correo = prompt("Ingresa tu correo electrónico");

let espacio = " ";

console.log("Muchas gracias Sr(a), " + nombre + espacio + apellido);

let vehiculoTypeCarro = prompt("¿Tu vehiculo es un carro?");
let precioVehiculoCarro = 0; 

if (vehiculoTypeCarro === "si") {
  precioVehiculoCarro = parseInt(prompt("¿Cuánto cuesta tu vehiculo?"));
} else {
  if (vehiculoTypeCarro === "no") {
    alert("Lo sentimos en este momento solamente tenemos covertura para carros");
  }
}

if (precioVehiculoCarro > 0) { 
  let porcentajeSeguro = 0.10;
  let precioSeguro = precioVehiculoCarro * porcentajeSeguro;

  alert("Tu seguro cuesta " + precioSeguro);
  
}


console.log ("Tu seguro por cuotas se distribuirá de la siguiente manera")

let precioSeguro = parseInt(prompt("precio del seguro"));
for (let i = 1; i <= 12; i++) {
    let resultado = precioSeguro / i ;
    alert(precioSeguro +" / "+ i + " cuotas " + " = "+ resultado );
}







