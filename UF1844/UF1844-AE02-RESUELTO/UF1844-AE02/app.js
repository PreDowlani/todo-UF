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
		resuelto: true,
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

//Ej.1
const problem = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			llamadas.filter((llamada) => {
				if (llamada.problema === 'velocidad') {
					console.log(llamada);
				}
			});
			let conexionOK = true;
			if (conexionOK) {
				resolve('Aquí tiene la lista');
			} else {
				reject(
					'No se ha encontrado ningún cliente con los parámetros indicados'
				);
			}
		}, 3000);
	});
};
const problemaVelo = async () => {
	try {
		const operacion = await problem();
		console.log(operacion);
	} catch (error) {
		console.log(error);
	}
};

problemaVelo();

//Ej.2
// const cicloTerminado = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			llamadas.forEach((llamada) => {
// 				if (llamada.ciclo.includes('solucionado')) {
// 					llamada.ciclo.push('cerrado');
// 					llamada.resuelto = true;
// 				}
// 			});
// 			let conexionOK = true;
// 			if (conexionOK) {
// 				resolve('Se ha completado el ciclo de los clientes');
// 			} else {
// 				reject('Error al intentar cerrar el ciclo');
// 			}
// 			console.log(llamadas);
// 		}, 3000);
// 	});
// };
// const cicloTerminadoAs = async () => {
// 	try {
// 		const operacion = await cicloTerminado();
// 		console.log(operacion);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// cicloTerminadoAs();

//Ej.3
// const nuevoCliente = (idCliente, nombre) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			setCliente = {
// 				id: idCliente,
// 				nombre: nombre,
// 				problema: 'streaming',
// 				ciclo: ['recibido'],
// 				resuelto: false,
// 			};
// 			llamadas.push(setCliente);
// 			let conexionOK = true;
// 			if (conexionOK) {
// 				resolve('Se ha añadido correctamente el cliente');
// 			} else {
// 				reject('Se ha producido un error al añadir el cliente');
// 			}
// 			console.log(llamadas);
// 		}, 3000);
// 	});
// };
// const nuevoClienteAs = async () => {
// 	try {
// 		const add = await nuevoCliente(6, 'Lady Gaga');
// 		console.log(add);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// nuevoClienteAs();

// //Ej.4
// const eliminarCliente = (id) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			llamadas.forEach((llamada) => {
// 				if (llamada.id === id) {
// 					posEliminar = llamadas.indexOf(llamada);
// 					llamadas.splice(posEliminar, 1);
// 				}
// 			});
// 			let conexionOK = true;
// 			if (conexionOK) {
// 				resolve(`El cliente con id ${id} ha sido eliminado`);
// 			} else {
// 				reject(`Error. No se ha podido eliminar el cliente con id ${id}`);
// 			}
// 			console.log(llamadas);
// 		}, 3000);
// 	});
// };
// const eliminarClienteAs = async () => {
// 	try {
// 		const eliminar = await eliminarCliente(5);
// 		console.log(eliminar);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// eliminarClienteAs();
