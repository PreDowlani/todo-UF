aviones = [
    {
      id: "A-0121",
      modelo: "A-350",
      version: "900",
      clientes: ["Iberia", "Qatar Airways", "Delta Airlines"],
      fase: "prueba de vuelo",
      matricula: "F-WFAB",
      precio: 300000000,
    },
    {
      id: "A-0122",
      modelo: "A-350",
      version: "1000",
      clientes: ["Iberia", "United", "American"],
      fase: "entrega",
      matricula: "F-WXCD",
      precio: 370000000,
    },
    {
      id: "A-0123",
      modelo: "A-321",
      version: "neo",
      clientes: ["Iberia", "Air France", "British Airways", "Lufthansa"],
      fase: "entrega",
      matricula: "F-WXAC",
      precio: 280000000,
    },
    {
      id: "A-0124",
      modelo: "A321",
      version: "ceo",
      clientes: ["Iberia", "Lufthansa"],
      fase: "prueba de vuelo",
      matricula: "F-WCCB",
      precio: 250000000,
    },
    {
      id: "A-0125",
      modelo: "A220",
      version: "100",
      clientes: ["Air France", "American"],
      fase: "montaje",
      matricula: "F-WFAW",
      precio: 190000000,
    },
    {
      id: "A-0126",
      modelo: "A330",
      version: "300",
      clientes: ["Iberia", "American", "Delta", "Etihad"],
      fase: "montaje",
      matricula: "F-EWED",
      precio: 317000000,
    },
  ];
  
//   Ej:1 Crear una lista de todos los modelos pedidos por Qatar Airways y mostrarla

qatar = aviones.filter((qat) =>{
     return qat.clientes.includes('Qatar Airways');
})

console.log(`Le mostramos todos los modemos de aviones pedidos por Qatar Airways`);
console.table(qatar);

// Ej:2 Comprobar si existe algún A330 en fase de montaje. En caso positivo crear una nueva lista con el citado modelo.

comprobar = aviones.some((check) => {
    return check.modelo.includes('A330') && check.fase === 'montaje';
})

console.log(`Comprobamos si existe algun A330 en faste montaje : ${comprobar}`);

// Comprobacion es Positva , creamos una nueva lista :

nuevaLista = aviones.filter((newL) => {
    return newL.modelo ===('A330');
})

console.log(`La comprobacion da postiva , procedemos a  crear una nueva lista con el citado modelo`);
console.table(nuevaLista);

// Ej:3 Hemos recibido un pedido de A350-900 por parte de Lufthansa. Actualizar lista.

actualizarLista = aviones.find((update) => {
     return update.modelo ===('A-350')
})
actualizarLista.clientes.push('Lufthansa')
console.log(`Añadimos a Lufthansa en la base de Clientes : ${actualizarLista.clientes}.`)
console.table(actualizarLista);
// console.table(actualizarLista.clientes);

// Ej:4 Comprobar si todos los modelos tienen matrícula francesa (Empieza por F-) charArt('F')/ startsWith('F')

matricula = aviones.every((matr) => {
    return matr.matricula.startsWith('F')
})
console.log(`Comprobamos que si todos los modelos tiene la matricula Frances : ${matricula}`)


// Ej:5	Localizar el modelo con id: A-0125 y mostrarlo en pantalla

localizar = aviones.find((loca) => {
     return loca.id === 'A-0125'
})
console.log( `Localizamos el modelo con  el id: A-0125  y lo mostramos en pantalla :`)
console.table(localizar)

// Ej:6 Crear una función que calcule el valor total de los pedidos de la compañía Iberia.


valorTotal = aviones.filter((valor) => {
    return valor.clientes.includes('Iberia')
})

console.log(valorTotal)

suma = 0
sumaTotal = valorTotal.map((sumaT) => {
    suma = suma + sumaT.precio;
    return suma
}) 
console.log( `La suma toal de todos los pedidos de Iberia asiende a ${sumaTotal[sumaTotal.length-1]}`);








