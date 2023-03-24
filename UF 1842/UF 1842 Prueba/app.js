// Crear un array que contenga id, nombre de trabajador y si está activo o no. Crearemos el array para cuatro trabajadores
// id (identificativo)
// nombre
// activo  ‘true or false’
// 12 length in total 

trabajadores = [01,'Goku',true,02,'Vegeta',false,03,'Picolo',true,04,'Krilin',false];

console.log(trabajadores);

long = trabajadores.length;
console.log(long);

// El programa será capaz de mostrar los datos de cualquier usuario en base a su id.
idUsuario=prompt('Eliga el usuario en base a su id : (01-04)');
idUsuario= Number(idUsuario);
console.log(idUsuario);

existe = trabajadores.includes(idUsuario);
console.log(existe);


posicion = trabajadores.indexOf(idUsuario);
console.log(posicion);

idUsuario= trabajadores.slice(posicion,posicion+3);
console.log(idUsuario);

// Además de ello, debe ser capaz de eliminar un usuario en base a su id.

newTrabajadores = [...trabajadores];

idEliminar =prompt('Eliga el usuario que desea eliminar en base a su id : (01-04)');
idEliminar = Number(idEliminar);

existe2 = newTrabajadores.includes(idEliminar);
console.log(existe2);

posicion2 = newTrabajadores.indexOf(idEliminar);
console.log(posicion2);

idEliminar = newTrabajadores.splice(posicion2,3);
console.log(newTrabajadores);

// Por otro lado, debe tener la capacidad de desactivar a un usuario.

desactivar = Number(prompt('Desactivar el usuario que desee : (01-04)'));

idDesactivar = trabajadores.includes(desactivar);

posicion3 = trabajadores.indexOf(desactivar);

desactivar = trabajadores.splice(posicion3+2,1,false);
console.log(trabajadores);

// Por último, el programa debe saber crear un usuario completo, pidiendo los datos por consola

workers = [...trabajadores]

// newId = Number(prompt('Introduzca un numero id ; (entre 05-10)'));

newId = Math.floor(Math.random()*10+5);

newUser = prompt('Introduzca su nombre y apellidos');

active = Math.floor(Math.random()*10+1);
console.log(active)

if (active >5) {
    active = true;
} else {
    active = false;
}

trabajadorCompletos = [...workers,newId,newUser,active];
console.log(trabajadorCompletos);











