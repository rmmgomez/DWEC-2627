"use strict";
let price = 65;

if(price < 50) {
    console.log("This is cheap!");
} else if (price < 100) {
    console.log("Not so cheap...");
} else {
    console.log("Too expensive!");
}

let userType = 1;

switch(userType) {
    case 1:
    case 2: // Tipos 1 y 2 entran aquí
        console.log("You can enter");
        break;
    case 3:
        console.log("You don't have enough permissions");
        break;
    default: // Ninguno de los anteriores
        console.error("Unknown user type!");
        break;
}

let value = 1;

while (value <= 5) { // prints 1 2 3 4 5
    console.log(value++);
}