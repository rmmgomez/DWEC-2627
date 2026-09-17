'use strict';

let a = [20, 6, 100, 51, 28, 9];

// Devuelveme un array nuevo con todos los elementos pares, ordenados 
// de mayor a menor y multiplicados por 2
let resultado = a
    .filter(n => n % 2 === 0) // [20, 6, 28]
    .sort((a, b) => b - a)    // [28, 20, 6]
    .map(n => n * 2);        // [56, 40, 12]

console.log(resultado); // [56, 40, 12]

// Devuelveme un array con las personas mayores de edad ordenadas por nombre
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

let adultsByName = people
    .filter(person => person.age >= 18) // [Thomas(24), John(51)]
    .sort((a, b) => a.name.localeCompare(b.name)); // [John(51), Thomas(24)]

console.log(adultsByName); // [Person { name: 'John', age: 51 }, Person { name: 'Thomas', age: 24 }]


let words = ["house", "tree", "dog", "computer", "sun", "river", "mountain", "JavaScript"];
// Devuelveme un array con las palabras que tengan más de 2 vocales, que contengan la letra r
// y que tengan más de 4 letras, el array deberá estar ordenado por longitud de palabra y en mayúsculas

let filteredWords = words
    .filter(word => (word.match(/[aeiou]/gi) || []).length > 2) // Más de 2 vocales
    .filter(word => word.includes('r')) // Contienen la letra 'r'
    .filter(word => word.length > 4) // Más de 4 letras
    .sort((a, b) => a.length - b.length) // Ordenadas por longitud
    .map(word => word.toUpperCase()); // En mayúsculas

console.log(filteredWords); // ['COMPUTER', 'JAVASCRIPT']

let a2 = [3, 21, 15, 61, 9, 54];
// Devuelve aquellos elementos del array que sean múltiplos de 3 o de 5, que no sean múltiplos de 2
// y que sean mayores de 10, ordenados de menor a mayor y multiplicados por 3

let result2 = a2
    .filter(n => (n % 3 === 0 || n % 5 === 0)) // Múltiplos de 3 o 5
    .filter(n => n % 2 !== 0) // No múltiplos de 2
    .filter(n => n > 10) // Mayores de 10 [ 21, 15 ]
    .sort((a, b) => a - b) // Ordenados de menor a mayor
    .map(n => n * 3); // Multiplicados por 3

console.log(result2); // [45, 63]

const carritoDeCompras = [
  { nombre: 'laptop', precio: 1200 },
  { nombre: 'mouse', precio: 50 },
  { nombre: 'teclado', precio: 150 },
  { nombre: 'monitor', precio: 300 }
];

// Calcula el total del carrito de compras, pero solo de aquellos productos que su precio sea mayor a 100
let total = carritoDeCompras
    .filter(producto => producto.precio > 100) // Filtrar productos con precio mayor a 100
    .reduce((acumulador, producto) => acumulador + producto.precio, 0); // Sumar precios

console.log(total); // 1650 (1200 + 150 + 300)

const cestaDeFrutas = ['manzana', 'plátano', 'naranja', 'manzana', 'pera', 'naranja', 'manzana'];
// Indica cuántas veces aparece cada fruta en la cesta  de frutas
let conteoFrutas = cestaDeFrutas.reduce((conteo, fruta) => {
  conteo[fruta] = (conteo[fruta] || 0) + 1;
  return conteo;
}, {});

console.log(conteoFrutas); // { manzana: 3, plátano: 1, naranja: 2, pera: 1 }

// Devuelve una cadena con la primera letra de cada palabra de la cesta de frutas
let iniciales = cestaDeFrutas
    .map(fruta => fruta.charAt(0)) // Obtener la primera letra de cada fruta
    .join(''); // Unirlas en una cadena

console.log(iniciales); // 'mpnpmnm'

// Devuelve una cadena con la primera letra de cada palabra de la cesta de frutas usando el método reduce
let inicialesReduce = cestaDeFrutas
    .reduce((acumulador, fruta) => acumulador + fruta.charAt(0), ''); // Acumular primeras letras

console.log(inicialesReduce); // 'mpnpmnm'

/**
 * Crea una función llamada generarInforme que acepte un titulo, una fecha y un número variable de items (elementos).
 */
function generarInforme(titulo, fecha, ...items) {
  console.log("Informe: " + titulo);
  console.log("Fecha: " + fecha);
  console.log(`Items:`);
  items.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
  });
}

generarInforme("Ventas Mensuales", "2024-06-15", "Producto A", "Producto B", "Producto C");

/**
 * Imagina que tienes un array de objetos, donde cada objeto representa un usuario con sus datos. 
 * Tu tarea es crear una función que, dada la lista de usuarios y el nombre de uno de ellos, 
 * devuelva solo el nombre, el email y el rol de ese usuario específico.
 */

const usuarios = [
  { id: 1, nombre: 'Ana', email: 'ana@example.com', rol: 'admin', activo: true },
  { id: 2, nombre: 'Luis', email: 'luis@example.com', rol: 'editor', activo: false },
  { id: 3, nombre: 'Marta', email: 'marta@example.com', rol: 'editor', activo: true },
  { id: 4, nombre: 'Pedro', email: 'pedro@example.com', rol: 'visitante', activo: true }
];

function obtenerDatosUsuario(listaUsuarios, nombreUsuario) {
  const usuarioEncontrado = listaUsuarios.find(usuario => usuario.nombre === nombreUsuario);
  if (!usuarioEncontrado) {
    return `Usuario '${nombreUsuario}' no encontrado`;
  }

  const { nombre, email, rol } = usuarioEncontrado;
  return { nombre, email, rol };
}

const datosAna = obtenerDatosUsuario(usuarios, 'Ana');
console.log(datosAna);
const datosJuan = obtenerDatosUsuario(usuarios, 'Juan');
console.log(datosJuan); // Salida: null

/***
 * Imagina que estás gestionando los roles de usuario en un proyecto. Tienes dos equipos, 
 * el de Desarrollo y el de Marketing, y cada uno tiene un conjunto de roles específicos.

Tu tarea es crear un script que, utilizando los métodos de conjuntos de Set, realice las siguientes operaciones:

Unión de roles (union()): Encuentra todos los roles únicos que existen entre ambos equipos.

Intersección de roles (intersection()): Identifica los roles que son comunes a ambos equipos.

Diferencia de roles (difference()): Determina qué roles son exclusivos del equipo de 
Desarrollo (es decir, que no están en el equipo de Marketing).
 */

// Conjunto de roles del equipo de Desarrollo
const rolesDesarrollo = new Set(['frontend', 'backend', 'devops', 'analista', 'tester']);

// Conjunto de roles del equipo de Marketing
const rolesMarketing = new Set(['content', 'seo', 'analista', 'redactor']);

// 1. Unión de roles (union()): Encuentra todos los roles únicos entre ambos equipos
const todosLosRoles = rolesDesarrollo.union(rolesMarketing);
console.log('Roles únicos de ambos equipos:', todosLosRoles);
// Salida: Set(7) { 'frontend', 'backend', 'devops', 'analista', 'tester', 'content', 'seo', 'redactor' }

// 2. Intersección de roles (intersection()): Identifica los roles comunes a ambos equipos
const rolesComunes = rolesDesarrollo.intersection(rolesMarketing);
console.log('Roles comunes a ambos equipos:', rolesComunes);
// Salida: Set(1) { 'analista' }

// 3. Diferencia de roles (difference()): Encuentra los roles exclusivos del equipo de Desarrollo
const rolesExclusivosDesarrollo = rolesDesarrollo.difference(rolesMarketing);
console.log('Roles exclusivos del equipo de Desarrollo:', rolesExclusivosDesarrollo);
// Salida: Set(4) { 'frontend', 'backend', 'devops', 'tester' }

/**
 * Imagina que estás en una tienda en línea y tienes una lista de productos. Tu tarea es procesar esta lista para generar un informe que cumpla con varios criterios.

Tu objetivo es crear una función llamada procesarInventario que reciba el array de productos y realice las siguientes operaciones encadenadas:

Filtrar (filter): Solo considera los productos con un precio mayor o igual a 20.

Mapear (map): A cada producto restante, aplícale un 15% de descuento en su precio y añade una nueva propiedad llamada precioConDescuento.

Buscar (find): Dentro del nuevo array de productos con descuento, encuentra el primer producto que tenga un precioConDescuento menor a 25. Si no existe, no hagas nada.

Reducir (reduce): Calcula el precio total de todos los productos del array filtrado y mapeado (usando la propiedad precioConDescuento). El resultado final de la función debe ser un objeto con dos propiedades: productoEncontrado (el resultado del find, o undefined si no se encontró) y totalConDescuento (el resultado del reduce).

Aquí tienes el array inicial y el esqueleto de la función para comenzar:
 */

const productos = [
  { id: 1, nombre: 'libro', precio: 15 },
  { id: 2, nombre: 'tablet', precio: 30 },
  { id: 3, nombre: 'auriculares', precio: 22 },
  { id: 4, nombre: 'mouse', precio: 10 },
  { id: 5, nombre: 'teclado', precio: 45 },
  { id: 6, nombre: 'cable usb', precio: 5 }
];

function procesarInventario(arr) {
  // Array para almacenar los productos filtrados y mapeados
  let productosTransformados = [];

  // Paso 1: Filtrar los productos con precio >= 20
  const productosFiltrados = arr.filter(producto => producto.precio >= 20);

  // Paso 2: Mapear para agregar el precio con descuento
  productosTransformados = productosFiltrados.map(producto => {
    const precioConDescuento = producto.precio * 0.85; // 15% de descuento
    return { ...producto, precioConDescuento: parseFloat(precioConDescuento.toFixed(2)) };
  });

  // Paso 3: Encontrar el primer producto con descuento < 25
  const productoEncontrado = productosTransformados.find(p => p.precioConDescuento < 25);

  // Paso 4: Reducir para calcular el precio total con descuento
  const totalConDescuento = productosTransformados.reduce((acumulador, producto) => {
    return acumulador + producto.precioConDescuento;
  }, 0); // El 0 es el valor inicial del acumulador

  // Devolver el objeto final
  return {
    productoEncontrado,
    totalConDescuento: parseFloat(totalConDescuento.toFixed(2))
  };
}

// Ejemplo de uso:
const informe = procesarInventario(productos);
console.log(informe);

/*
Salida en la consola:
{
  productoEncontrado: { id: 3, nombre: 'auriculares', precio: 22, precioConDescuento: 18.7 },
  totalConDescuento: 82.05
}
*/