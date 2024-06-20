// Dada una cadena de texto, comprobar si es un palíndromo o no (palabras que se leen igual al revés) ---  Sin tener en cuenta tildes ni simbolos.
"use strict";

function palindromo (texto) {
    let invertido = texto.split("").reverse().join("");
    return (invertido === texto);
}
console.log("¿Es un palindromo? " + palindromo("otto"));

// Gira un número
function numeroInvertido(num) {
    let numInvertido = num.toString().split("").reverse().join("");
    numInvertido = parseInt(numInvertido);
    console.log(numInvertido);
}
numeroInvertido(257);
