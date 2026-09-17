let array = [150, 400, 780, 1500, 200];
let [juan, , pepe] = array; // Asigna los tres primeros elementos del array
console.log(pepe); // Imprime 780

let [, v2, ...resto] = array; // resto será un array
console.log(resto); // Imprime [780, 1500, 200]

let nombres = ["Peter", "John"];
let [v1, n2 = "Mary", v3 = "Anne"] = nombres;
console.log(n2); // Imprime "John"
console.log(v3); // Imprime "Anne" -> valor por defecto