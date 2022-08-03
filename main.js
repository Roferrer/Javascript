/* CAJERO AUTOMATICO*/

const ro = {
  nombre: "ro",
  pin: 123,
};

let saldo = 1000;

const retirosPosibles = [100, 200, 300, 400, 500];

function sumar(deposito) {
  saldo = saldo + deposito;
}

function restar(retiro) {
  saldo = saldo - retiro;
}

function pasarBitAEthereum(ars) {
  const bit = eth * 0.00027;
  return bit;
}

const nombreDelUsuario = prompt("Ingrese su nombre");
const pinDelUsuario = parseInt(prompt("Ingrese su PIN"));
let operacion;

if (nombreDelUsuario === "ro" && pinDelUsuario === 123) {
  operacion = prompt(
    "Hola ro, teneś un saldo de $" +
      saldo +
      ". ¿Qué desea hacer? 1. Extraccion 2. Deposito 3. Salir"
  );
}

//EXTRACCION//

if (operacion === "1") {
  const extraccion = prompt("Ingrese el monto a retirar");
  if (extraccion <= saldo) {
    restar(extraccion);
    alert("Extraccion exitosa. Su saldo actual es de $" + saldo);
  } else if (extraccion > saldo) {
    alert("No tiene saldo suficiente para realizar la extraccion");
  }
}

// DEPOSITO //

if (operacion === "2") {
  const deposito = parseInt(prompt("Ingrese el monto a depositar"));
  alert("Deposito exitoso. Su saldo actual es de $" + saldo);
} else {
  alert("Pin o usuario incorrecto");
}
