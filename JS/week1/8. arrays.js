"use strict";
/* let a = new Array(); // Crea un array vacío
a[0] = 13; // Asigna la primera posición del array
console.log(a.length); // Imprime 1
console.log(a[0]); // Imprime 13
console.log(a[1]); // Imprime undefined (posición no asignada aún)

let  a = new Array(12); // Crea un array de tamaño 12
console.log(a.length); // Imprime 12
console.log(a[0]); // Imprime undefined (posición no asignada aún)
a[20] = "Hello";
console.log(a.length); // Ahora imprime 21 (0-20). Las posiciones 0-19 tendrán el valor undefined 


let  a = new Array("a", "b", "c", "d", "e"); // Array con 5 valores
console.log(a[3]); // Imprime "d"
a.length = 2; // Posiciones 2-4 serán destruidas
console.log(a[3]); // Imprime undefined

let  a = ["a", "b", "c", "d", "e"]; // Array de tamaño 5, con 5 valores inicialmente
console.log(typeof a); // Imprime object
console.log(a instanceof Array); // Imprime true. a es una instancia de array
a[a.length] = "f"; // Insertamos un nuevo elemento al final
console.log(a); // Imprime ["a", "b", "c", "d", "e", "f"] */

let  ar = [4, 21, 33, 24, 8];

let i = 0;
while(i < ar.length) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
    i++;
}
for(let i = 0; i < ar.length; i++) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
}
for (let indices in ar) { // Imprime 4 21 33 24 8
    console.log(ar[indices]);
}
for(let item of ar) {
    console.log(item);
}

let str = "abcdefg";

/* for(let letter of str) {
    if(letter.match(/[aeiou]/)) {
        console.log(letter + " es una vocal");
    } else {
        console.log(letter + " es una consonante");
    }
} */

let inserDel = [1,2,3,4,5];
inserDel.push(6, 7);
console.log(inserDel.join()); // [1,2,3,4,5,6,7]
console.log(inserDel.shift());
inserDel.unshift(0, -1);
console.log(inserDel.join(" - ")); // [1,2,3,4,5,6,7]

let s = "12345";
console.log(Array.from(s)); // ['t', 'e', 'n', 'e', 'd', 'o', 'r']

let  a = ["a", "b", "c"];
let  b = ["d", "dsfsde", 6];
let  c = a.concat(b);
console.log(c); // Imprime ["a", "b", "c", "d", "e", "f"]
console.log(a); // Imprime ["a", "b", "c"] . El array original no ha sido modificado
console.log(b);

let inicial = ["a", "b", "w", "x", "e", "f"];
/* console.log(inicial.slice(0,-3).join());

let cadena ="Hola amigos";
console.log(cadena.slice(0,3));
console.log(cadena.substring(0,3)); */
/* console.log(inicial.toSpliced(1, 2, "c", "j"));
console.log(inicial.toSpliced(2, 1, "w"));
inicial[2] = "w"; */


let  invertir = ["a", "b", "c", "d", "e", "f"];
console.log(invertir.toReversed()); // ["f", "e", "d", "c", "b", "a"]
console.log(invertir); // ["a", "b", "c", "d", "e", "f"] -> Array original no modificado

console.log(invertir.reverse()); // Invierte el orden del array original
console.log(invertir); // ["f", "e", "d", "c", "b", "a"]
/* 
let  nombres = ["Peter", "Ànne", "Thomas", "Jen", "Rob", "Alison"];
console.log(nombres.toSorted()); // ["Alison", "Anne", "Jen", "Peter", "Rob", "Thomas"]
console.log(nombres); // ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"] -> Original no modificado */

let ordenarNum = [20, 6, 100, 51, 28, 9];
console.log(ordenarNum.toSorted());
a.sort((n1, n2) => n1 - n2); // Trabajando con números, podemos devolver la resta
console.log(a); // Imprime [6, 9, 20, 28, 51, 100]

/**** Ejemplo con objetos, que veremos más adelante ****/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() { 
    return this.name + " (" + this.age + ")";
  }
}

let people = [
  new Person("Thomas", 24),
  new Person("Mary", 15),
  new Person("John", 51),
  new Person("Phillip", 9)
];

people.sort((p1, p2) => p1.age - p2.age); // Ordenamos por edad número
console.log(people.toString()); // "Phillip (9),Mary (15),Thomas (24),John (51)"

people.sort((p1, p2) => p1.name.localeCompare(p2.name)); // Ordenamos por nombre (string)
console.log(people.toString()); // "John (51),Mary (15),Phillip (9),Thomas (24)"


let  a11 = [1, 2, 3, 4];
let a2 = a11.with(2, 99); // En lugar de hacer a[2] = 99
console.log(a11); // [1, 2, 3, 4] -> Original
console.log(a2); // [1, 2, 99, 4] -> Nuevo array con el cambio

a = [4, 21, 33, 12, 9, 54];
console.log(a.map(num => num*2)); // Imprime [8, 42, 66, 24, 18, 108]
console.log(a);
a = [-2, -4, -7];
console.log(a.reduce((max, num) => Math.max(max, num)));