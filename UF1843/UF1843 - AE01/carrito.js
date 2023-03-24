
clientes = [{
    nombre: "Vaelin Al Sorna",
    password: "34rft%&",
    estaDentro: false,
    carrito: [560, 600, 122, 1400],
    credito: 3000,
  },
  {
    nombre: "Locke Lamora",
    password: "lockito89",
    estaDentro: true,
    carrito: [100, 1200, 345, 612, 72],
    credito: 2000,
  },
  {
    nombre: "Addie LaRue",
    password: "adla?¿*",
    estaDentro: true,
    carrito: [1000, 1500, 2000],
    credito: 1000,
  },
  {
    nombre: "Tomas Piety",
    password: "Toty+012?",
    estaDentro: true,
    carrito: [125, 200, 50, 2],
    credito: 1000,
  },
  {
    nombre: "Ryland Grace",
    password: "spa*?34A",
    estaDentro: true,
    carrito: [10, 10, 15, 15],
    credito: 400,
  },
];

// 1-Dado un nombre determinado por consola, comprobar si existe en la BDD principal. Si es así pedir importe y añadirlo a su carrito. En caso contrario, crear nuevo cliente con su importe (en el carrito) y crédito 1000 (en este caso la contraseña estará vacía)

// Cliente Existe :
user = prompt('Introduzca un nombre');
console.log(`Ha introducido : ${user}`);
importe = Number(prompt('Introduzca un importe'));
console.log(`El importe introducido es : ${importe}`);

for(i=0; i<clientes.length; i++) {
    if (clientes[i].nombre.includes(user)) {
        clientes[i].carrito.push(importe);
        console.log(clientes)
    }
    
}

// Cliente No Existe :
clienteAdd = {};

user2 = prompt('Introduzca un nombre');
console.log(`Ha introducido : ${user2}`);
importe2 = Number(prompt('Introduzca un importe'));
console.log(`El importe introducido es : ${importe2}`);

    clienteAdd= {
        nombre : user2,
        password : 'pepeloco25',
        carrito : [importe2],
        estaDentro : false,
        credito : 1000,
    }

console.log(clienteAdd);

clientes.push(clienteAdd);
console.table(clientes);

// 2-Crear el código necesario para pedir por consola el nombre de un cliente existente, de tal manera que el programa devuelva la suma total de los importes de su carrito. O sea, el total de la compra.

nombreCliente = prompt('Introduzca el nombre del cliente');
console.log(`Ha elegido a : ${nombreCliente}`);

suma = 0;

for (i=0; i<clientes.length; i++) {
    if (clientes[i].nombre === nombreCliente) {
     for(c=0; c<clientes[i].carrito.length; c++){
        suma = suma + clientes[i].carrito[c];
    }
}
}
console.log(`La suma del carrito son : ${suma}`);