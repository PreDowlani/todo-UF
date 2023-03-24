
const coleccionFotos = [{
    nombre: 'Hot Roque Nublo',
    camara: 'Canon',
    caracteristicas: ['ISO 200', '50mm', '1/125', '1.4'],
    fecha: '20/01/2019',
    lugar: 'Gran Canaria'
  },
  {
    nombre: 'Snowy Teide',
    camara: 'Sony',
    caracteristicas: ['ISO 400', '11mm', '1/50', '8'],
    fecha: '21/01/2019',
    lugar: 'Tenerife'
  },
  {
    nombre: 'Beautiful Fataga',
    camara: 'Nikon',
    caracteristicas: ['ISO 1000', '22mm', '1/250', '1.2'],
    fecha: '20/01/2019',
    lugar: 'Gran Canaria'
  },
  {
    nombre: 'Sunny El Cotillo',
    camara: 'Olympus',
    caracteristicas: ['ISO 2000', '35mm', '1/2000', '3.5'],
    fecha: '22/01/2019',
    lugar: 'Fuerteventura'
  },
  {
    nombre: 'Marvellous Valle Gran Rey',
    camara: 'Canon',
    caracteristicas: ['ISO 100', '22mm', '1/125', '2.8'],
    fecha: '23/01/2019',
    lugar: 'La Gomera'
  },
]

// 1-Crear un script que muestre todas las fotografías con ISO de 100

newColecionFotos = [...coleccionFotos];

for(i=0; i<newColecionFotos.length; i++ ) {
    for(j=0; j<newColecionFotos[i].caracteristicas.length; j++) {
        if(newColecionFotos[i].caracteristicas[j] === 'ISO 100') {
            console.log(newColecionFotos[i].caracteristicas);
            console.table(newColecionFotos[i]);
        }
    }
}

// 2-Crear un script que añada nuevas fotos a la base de datos. Los datos de cada nueva foto se pedirán por consola.

nuevaFoto = {
    nombre : prompt('Intoduzca nombre de la foto'),
    camara :prompt('¿Con qué camara ha sacado la foto?'), 
    caracteristicas : [{
        ISO : Number(prompt('Las características de la foto (ISO)'))},{
        Objetivo : prompt('Objetivo de la camara')},{
        Obturación : prompt('obturación')},{
        Apertura : Number(prompt('apertura'))
    }],
    fecha : prompt('Fecha de la foto'),
    lugar : prompt('Lugar de la foto')
}
// nombre:Taj Mahal ; camara:Sony a7r ; ISO100; objetivo:35mm,obsturacion:1/8000,apertura:1.8,
// fecha:1631,lugar:India
console.table(nuevaFoto);

newColecionFotos.push(nuevaFoto);
console.table(newColecionFotos);

// 3-En base al nombre de la foto, el script podrá eliminar cualquier foto de la BDD (Base de Datos)Objetivo

idEli = prompt('Introduza el nombre de la foto a eliminar (Hot Roque Nublo,Snowy Teide,Beautiful Fataga,Sunny El Cotillo,Marvellous Valle Gran Rey)');
console.log(`Ha elegido a eliminar : ${idEli}`);

for(i=0; i<newColecionFotos.length; i++) {
    if(newColecionFotos[i].nombre === idEli) {
        newColecionFotos.splice([i],1);
    }
    }

console.table(newColecionFotos);

// 4-Modificar la fecha de ‘Sunny el Cotillo’ (localizándolo), cambiándola por la fecha actual.

for(i=0; i<newColecionFotos.length; i++) {
        if(newColecionFotos[i].nombre === 'Sunny El Cotillo'){
            fechaHoy = '17/02/2023';
            newColecionFotos[i].fecha = fechaHoy;
            console.table(newColecionFotos[i]);
        }
    
}


