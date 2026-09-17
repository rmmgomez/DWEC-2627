'use strict';
const a = [23, 45, 67, 89, 12];
let iterador = a.values();

console.log(iterador.next()); // { value: 23, done: false }
console.log(iterador.next()); // { value: 45, done: false }
console.log(iterador.next()); // { value: 67, done: false }
console.log(iterador.next()); // { value: 89, done: false }
console.log(iterador.next()); // { value: 12, done: false }
console.log(iterador.next()); // { value: undefined, done: true }

// Otra forma de crear un iterador

let iterador2 = a[Symbol.iterator]();
console.log(iterador2.next()); // { value: 23, done: false }
// ... etc

const numero = ""+123;
iterador = Iterator.from(numero);
console.log(iterador.next()); // { value: '1', done: false }
console.log(iterador.next()); // { value: '2', done: false }

a = [23, 45, 67, 89, 12];
iterador = Iterator.from(a);

console.log(iterador.drop(3).toArray()); // [89, 12]
