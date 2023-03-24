const llamadas = [
	{
		id: 1,
		nombre: 'Camila Cabello',
		problema: 'streaming',
		ciclo: ['recibido', 'pasado a', 'en proceso', 'solucionado', 'cerrado'],
		resuelto: true,
	},
	{
		id: 2,
		nombre: 'Ariana Grande',
		problema: 'velocidad',
		ciclo: ['recibido', 'pasado a'],
		resuelto: false,
	},
	{
		id: 3,
		nombre: 'Lola Flores',
		problema: 'velocidad',
		ciclo: ['recibido', 'pasado a', 'en proceso', 'solucionado'],
		resuelto: false,
	},
	{
		id: 4,
		nombre: 'Estrellita Castro',
		problema: 'desconexiones',
		ciclo: ['recibido'],
		resuelto: false,
	},
	{
		id: 5,
		nombre: 'Adele',
		problema: 'velocidad',
		ciclo: ['recibido'],
		resuelto: false,
	},
	{
		id: 6,
		nombre: 'La Chicha del Callejón',
		problema: 'desconexiones',
		ciclo: ['recibido', 'pasado a', 'en proceso', 'solucionado', 'cerrado'],
		resuelto: true,
	},
];
//1- Crear una promesa que permita listar a todos los clientes con problemas de velocidad.
// const velocidad = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Ejercicio 1 Listar a todos los clientes con problemas de velocidad.');
//             let error = false;
//             llamadas.forEach(client => {
//                 if (client.problema === 'velocidad' && error === false) {
//                     console.log(`Datos de cliente: \n ID:${client.id},  \n Nombre: ${client.nombre}`);
//                     console.log(client)
//                 }
//             })

//             if (!error) {
//                 resolve('Consulte el archivo adjunto con la información solicitada.')
//             } else {
//                 reject('Inténtalo de nuevo más tarde.')

//             }
//         }, 1000)
//     })
// }
// velocidad().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

//2- Crear una promesa que permita cerrar todos los procesos que están en el ciclo de solución.
const cerrar = () => {
	return new Promise((resolve, reject) => {
		const error = Math.round(Math.random() * 1);
		setTimeout(() => {
			console.log(
				'Ejercicio 2 Cerrar todos los procesos que están en el ciclo de solución.'
			);
			llamadas.forEach((element) => {
				if (
					element.ciclo.includes('solucionado') &&
					!element.ciclo.includes('cerrado')
				) {
					element.ciclo.push('cerrado');
					element.resuelto = true;
					console.log(element);
				}
			});

			if (error === 0) {
				resolve('Autorizaciones descargadas correctamentes');
			} else {
				reject('Ha habido un problema en la descarga');
			}
		}, 2000);
	});
};
const cerrarProcesos = async () => {
	try {
		const datos = await cerrar();
		console.log(datos);
	} catch (error) {
		console.log(error);
	}
};

cerrarProcesos();
console.log(llamadas);

//3- Crear una promesa que permita añadir un nuevo cliente (sin prompt) a la lista con problemas de streaming.

const addCliente = (id, nombre, problema, ciclo, resuelto) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Ejercicio 3 Añadir un nuevo cliente');
			const nuevoCliente = {
				id: id,
				nombre: nombre,
				problema: problema,
				ciclo: [ciclo],
				resuelto: resuelto,
			};
			llamadas.push(nuevoCliente);
			let error = false;
			if (error) {
				reject('Ha habido un error');
			} else {
				resolve('Se ha añadidio un nuevo cliente.');
			}
			console.log(llamadas);
		}, 3000);
	});
};
addCliente(
	2,
	'Michael Jackson',
	'desconexiones',
	['recibido', 'pasado a', 'en proceso'],
	false
)
	.then((data) => {
		console.log(data);
	})
	.catch((e) => {
		console.log(e);
	});

//4- Crear una promesa que permita eliminar a cualquier cliente mediante su id.

const eliminar = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Ejercicio 4 Eliminar a cualquier cliente');
			llamadas.forEach((cliente) => {
				if (cliente.id === id) {
					llamadas.splice(llamadas.indexOf(cliente), 1);
				}
				let error = false;
				if (error) {
					reject('Ha habido un error');
				} else {
					resolve('Se ha eliminado un cliente.');
				}
			});
			console.log(llamadas);
		}, 4000);
	});
};
eliminar(4)
	.then((data) => {
		console.log(data);
	})
	.catch((e) => {
		console.log(e);
	});
