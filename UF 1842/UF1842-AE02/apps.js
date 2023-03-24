// 1 – Desarrollar una aplicación en JS que simule un corrector de exámenes, de tal manera que en función del valor numérico de la nota devuelva insuficiente, suficiente, bien, notable o sobresaliente.
// Insuficiente: Hasta 4,99
// Suficiente: desde 5,00 hasta 5,50
// Bien: desde 5,51 hasta 7,49
// Notable: desde 7,50 hasta 9,00
// Sobresaliente: Desde 9,01 hasta 10

examen = prompt ('introduzca la nota del examen :');
notas = parseFloat (examen);

if (notas <= 4.99) {
    console.log('su nota es insuficiente ')
} else if (notas < 5.50) {
    console.log('su nota es sufiicente')
} else if (notas < 7.49) {
    console.log('su nota es bien')
} else if (notas < 9.00) {
    console.log('tiene usted un notable')
} else if (notas  <= 10.00) {
    console.log('ha sacado un sobresaliente')
} else {
    console.log('usted no ha a aprobado vayase del colegio !! ')
}

// 2- Crear una aplicación en JS que simule un carrito de compra que contemple los siguientes casos en sus diferentes combinaciones: cliente logueado, cliente con crédito. 
// En cada caso emitirá un mensaje indicativo del resultado de la condición.
// Ejemplo: Cliente está en el sistema (logueado) y no tiene crédito.

clienteLogeado = Math.random(1,2);
clienteConCredito = Math.random(1,2) ;
clienteConCredito = Math.round (clienteConCredito)
clienteConCredito = Math.round (clienteConCredito)


if (clienteLogeado && clienteConCredito) {
    console.log('el cliente esta en el sistema y tiene crédito')
} else if (clienteLogeado) {
    console.log('el cliente esta en el sistema y no tiene crédito') 
} else if (clienteConCredito) {
    console.log('el cliente no esta en el sistema y tiene crédito')
} else {
    console.log('el cliente no esta en el sisitema y no tiene crédito')
}


logged = Math.round(Math.random()); //si pones Math.random()*5 -> coje los numeros de 0 a 5 , y si quieres de 
// 1 a 5 hay k poner : Math.random()*5 +1 
credit = Math.round(Math.random);

if (logged ===0) { logged = false} else {logged = true};
if (credit ===0) { credit = false} else {credit = true};

logueado = (logged ===1) ? true : false ;
credito = (credit ===1) ? true : false ;


if (logueado && credito) {
    console.log('dentro del sistema y con credito')
} else if (!credito) {
    console.log('cliente sin credito')
} else if (!logueado) {
    console.log('cliente fuera del sistema')
} else (!logueado && !credito); {
    console.log('no esta fuera de aqui ! ')
}
