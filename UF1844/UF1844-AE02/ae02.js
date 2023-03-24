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

// 1- Crear una promesa que permita listar a todos los clientes con problemas de velocidad.

function ejercicio1 () {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            llamadas.forEach((veloc) => {
                if( veloc.problema.includes('velocidad')){
                    console.log(veloc)
                }         
            })
            const error = false ;
            if (error) {
                reject ('No hay ningun problema')
            } else {
                resolve()
            }
        },5000)
    })

}


const procesar = async () => {
    try {
      respuesta = await ejercicio1(); 
    } catch (error) {
      console.log("Error: " + error);
    }
  }
  
  procesar()
.then(() => {console.log('Problema con la velocidad')})
.catch((err) => {console.log('Error '+err)})

// 2-	Crear una promesa que permita cerrar todos los procesos que están en el ciclo de solución

function ejercicio2 () {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            llamadas.forEach((proceso) => {
                if(proceso.ciclo.includes('solucionado') && proceso.resuelto === false) {
                    proceso.ciclo.push('cerrado')
                    proceso.resuelto = true
                }
            })
            const error = false
            if(error) {
                reject ('No se ha solucionado el problema')
            } else {
                resolve()
            }
        },3500);
    })
}

const prueba2 = async () => {
    try {
        const resulto = await ejercicio2();
    } catch (err) {
        console.log('Falloo!! ' + err)
    }
}

prueba2()
.then(() => {console.log('Caso Cerrado!')})
.catch((err) => {console.log('Fallo! ' + err)})



// 3-	Crear una promesa que permita añadir un nuevo cliente (sin prompt) a la lista. Este cliente informa de problemas de streaming.

function nuevoCliente () {
    return new Promise ((resolve,reject) => {
        // setTimeout(() => {

            clienteNuevo = {
                id : 7, // o podemos poner llamada.length+1, asi el ordenador añade automaticamente el numero id
                nombre : 'Peter Parker',
                problema : 'Streaming',
                ciclo : [ 'recibido', 'en proceso a '],
                resuelto : false
            }
            llamadas.push(clienteNuevo);
            const error = false 
            if(error) {
                reject ('Cliente no valido')
            }else {
                resolve()
            }
        // }, 2000);
    })
}

const prueba3 = async () => {
    try {
        cliente = await nuevoCliente() 
    } catch (error) {
        console.log(error)
    }
}

prueba3()
.then(() => {console.log('Cliente añadido')})
.catch((error) => {console.log(error)})

console.table(llamadas)


// 4-	Crear una promesa que permita eliminar a cualquier cliente mediante su id.
function eliminarUser () {
    elimiarUser = Number(prompt('Usuario que quiere eliminar: id 1-7'))
    for(user of llamadas) {
        if(user.id === (elimiarUser)){
           llamadas.splice(elimiarUser-1,1)
        }
    }
}

function eliminarCliente () {
    return new Promise ((resolve,reject) => {
        const error = false;
        if (error) {
            reject ('No se puede eliminar al Usuario')
        } else {
            resolve(eliminarUser())
        }
    })
}
const prueba4 = async () => {
    try {
        newUser = await eliminarCliente() ;
    } catch (error) {
        console.log('Error '+ error)
    }
}

prueba4()
.then(() => {console.log( 'Cliente Eliminado' )})
.catch((err) => {console.log(err)})

console.log('Mostrando el array Llamadas con el cliente Eliminado! ')
console.table(llamadas)

