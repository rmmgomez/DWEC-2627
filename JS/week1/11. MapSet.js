'use strict';

let person1 = {name: "Peter", age: 21};
let person2 = {name: "Mary", age: 34};

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
hobbies.set(person2, ["Comer", "dormir", "jugar"]);
hobbies.set("Lola", ["dormir", "comer"]);
console.log(hobbies); // Map {Object {name: "Peter", age: 21} => ["Tennis", "Computers", "Movies"]}
hobbies.has({name: "Peter", age: 21}); // false (no es la misma referencia)

let names = ["Jennifer", "Alex", "Tony", "Johny", "Alex", "Tony", "Alex"];
let nameSet = new Set(names);
console.log(nameSet); // Set {"Jennifer", "Alex", "Tony", "Johny"}
names = [...nameSet]; // Reasignamos el array con los duplicados eliminados