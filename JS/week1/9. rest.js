'use strict';

function imprimirUsuario(nombre, ...lenguajes) {
    console.log(nombre + " sabe " + lenguajes.join(", "));
}

// Imprime "Pedro sabe 3 lenguajes: Java - C# - Python"
imprimirUsuario("Pedro", "Java", "C#", "Python");
// Imprime "María sabe 5 lenguajes: JavaScript - Angular - PHP - HTML - CSS"
imprimirUsuario("María", "JavaScript", "Angular", "PHP", "HTML", "CSS");

imprimirUsuario("Pedro", "nada", 0, 8);

Math.max(3, 5, 1, 9, 6); // Devuelve 9

let a = [1, 2, 3, 4];
let b = a; // 'b' referencia el mismo array que 'a' (las modificaciones afectan a ambas variables).
let c = [...a]; // Nuevo array (copia de a) -> contiene [1, 2, 3, 4].
let d = [0, ...a, 5]; // Nuevo array -> contiene [0, 1, 2, 3, 4, 5].
console.log(d.join()); // Imprime "0,1,2,3,4,5"