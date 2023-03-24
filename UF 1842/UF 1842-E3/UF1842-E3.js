// 1.	Crear una nueva lista que será un fusión de las dos listas iniciales y que contenga el nombre del superhéroe y la editorial a la que pertenece como dos elementos de dicha lista, de la forma nombre, editorial, nombre, editorial,....)
// Por ej. [‘Superman’, ‘DC Comics’, Capitán América’.......]
// Mostrar el resultado en consola.


superHeroes = ['Superman', 'Capitán América', 'Hellboy', 'Invincible', 'Shadowman'];
editoriales = ['DC Comics', 'Marvel', 'Dark Horse', 'Skybound', 'Valiant'];

// fusion = [superHeroes[0], editoriales[0],superHeroes[1], editoriales[1],superHeroes[2], editoriales[2],superHeroes[3], editoriales[3],superHeroes[4], editoriales[4]]
// console.log(fusion);

fusion = [];


for (i=0; i<superHeroes.length; i++) {
    fusion.push(superHeroes[i],editoriales[i])
}
console.table(fusion);

// 2.	Comprobar que en la nueva lista existe un superhéroe cualquiera (pedir el nombre por consola (prompt)) y eliminar tanto el superhéroe como la editorial (por ejemplo Superman, DC Comics), mediante la localización de su ubicación en la lista.


pregunta = prompt('Eliga un superhéroe que desea eliminar : '+ superHeroes);

existe = fusion.includes(pregunta);
console.log(existe);

posicion = fusion.indexOf(pregunta);
console.log(fusion);

fusion.splice(posicion,2);
console.table(fusion);

// 3.	Modificar el par de Invincible, cambiando la editorial a FD Comics (localizando su ubicación)

posicionDos = fusion.indexOf('Invincible');
console.log(posicionDos);

fusion.splice(posicionDos+1,1,'FD Comics');

console.table(fusion);


// 4.	Pedir al usuario que introduzca un superhéroe nuevo y su editorial, e insertarlo después de Dark Horse (localizado)

hero = prompt('Introduzca un superhéroe');
hero2 = prompt('Introduzca su editorial')
console.log(hero);
console.log(hero2);


posicionDos = fusion.indexOf('Dark Horse');
console.log(posicionDos);

fusion.splice(posicionDos+1,0,hero,hero2);
console.table(fusion);

