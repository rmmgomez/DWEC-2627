'use strict';


console.log("---- Ejercicio 1 ----");
// Devuelveme un array nuevo con todos los elementos pares, ordenados 
// de mayor a menor y multiplicados por 2
let a = [20, 6, 100, 51, 28, 9];


console.log("---- Ejercicio 2 ----");
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

console.log("---- Ejercicio 3 ----");
// Devuelveme un array con las palabras que tengan más de 2 vocales, que contengan la letra r
// y que tengan más de 4 letras, el array deberá estar ordenado por longitud de palabra y en mayúsculas
let words = ["house", "tree", "dog", "computer", "sun", "river", "mountain", "JavaScript"];


console.log("---- Ejercicio 4 ----");
// Devuelve aquellos elementos del array que sean múltiplos de 3 o de 5, que no sean múltiplos de 2
// y que sean mayores de 10, ordenados de menor a mayor y multiplicados por 3
let a2 = [3, 21, 15, 61, 9, 54];



console.log("---- Ejercicio 5 ----");
// Calcula el total del carrito de compras, pero solo de aquellos productos que su precio sea mayor a 100
const carritoDeCompras = [
  { nombre: 'laptop', precio: 1200 },
  { nombre: 'mouse', precio: 50 },
  { nombre: 'teclado', precio: 150 },
  { nombre: 'monitor', precio: 300 }
];

console.log("---- Ejercicio 6 ----");
// Indica cuántas veces aparece cada fruta en la cesta  de frutas
const cestaDeFrutas = ['manzana', 'plátano', 'naranja', 'manzana', 'pera', 'naranja', 'manzana'];

console.log("---- Ejercicio 7 ----");
// Devuelve una cadena con la primera letra de cada palabra de la cesta de frutas
console.log("---- Ejercicio 8 ----");
// Devuelve una cadena con la primera letra de cada palabra de la cesta de frutas usando el método reduce

console.log("---- Ejercicio 9 ----");
/**
 * Crea una función llamada generarInforme que acepte un titulo, una fecha y un número variable de items (elementos).
 */
// generarInforme("Informe Trimestral", "2024-03-31", "Ventas", "Gastos", "Inventario");
// generarInforme("Ventas Mensuales", "2024-06-15", "Producto A", "Producto B", "Producto C");

console.log("---- Ejercicio 10 ----");
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


/* const datosAna = obtenerDatosUsuario(usuarios, 'Ana');
console.log(datosAna);
const datosJuan = obtenerDatosUsuario(usuarios, 'Juan');
console.log(datosJuan); // Salida: null */

/***
 * Imagina que estás gestionando los roles de usuario en un proyecto. Tienes dos equipos, 
 * el de Desarrollo y el de Marketing, y cada uno tiene un conjunto de roles específicos.
 */

// Conjunto de roles del equipo de Desarrollo
const rolesDesarrollo = new Set(['frontend', 'backend', 'devops', 'analista', 'tester']);
// Conjunto de roles del equipo de Marketing
const rolesMarketing = new Set(['content', 'seo', 'analista', 'redactor']);

// 1. Unión de roles (union()): Encuentra todos los roles únicos entre ambos equipos

// 2. Intersección de roles (intersection()): Identifica los roles comunes a ambos equipos

// 3. Diferencia de roles (difference()): Encuentra los roles exclusivos del equipo de Desarrollo

console.log("---- Ejercicio 11 ----");
/**
 * Imagina que estás en una tienda en línea y tienes una lista de productos. Tu tarea es procesar esta 
 * lista para generar un informe que cumpla con varios criterios.
 * Crea una función llamada procesarInventario que reciba el array de productos y realice las siguientes 
 * operaciones encadenadas:
 * - Filtra: Solo considera los productos con un precio mayor o igual a 20.
 * - Mapea: A cada producto restante, aplícale un 15% de descuento en su precio y añade una nueva 
 *   propiedad llamada precioConDescuento.
 * - Busca: Dentro del nuevo array de productos con descuento, encuentra el primer producto que tenga 
 *   un precioConDescuento menor a 25. Si no existe, no hagas nada.
 * - Reduce: Calcula el precio total de todos los productos del array filtrado y mapeado 
 *   (usando la propiedad precioConDescuento). El resultado final de la función debe ser un 
 *   objeto con dos propiedades: productoEncontrado (el resultado del find, o undefined si no 
 *   se encontró) y totalConDescuento (el resultado del reduce).
 */

const productos = [
  { id: 1, nombre: 'libro', precio: 15 },
  { id: 2, nombre: 'tablet', precio: 30 },
  { id: 3, nombre: 'auriculares', precio: 22 },
  { id: 4, nombre: 'mouse', precio: 10 },
  { id: 5, nombre: 'teclado', precio: 45 },
  { id: 6, nombre: 'cable usb', precio: 5 }
];

/*
Salida en la consola:
{
  productoEncontrado: { id: 3, nombre: 'auriculares', precio: 22, precioConDescuento: 18.7 },
  totalConDescuento: 82.05
}
*/