// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella --- La frase y la palabra deben ser parámetros de una función.
"use strict";
function buscar(frase, busqueda) {
    let frase_limpia = frase.toLowerCase().replace(/[,.!¡-]/gi, "");   // Expresión regular /[]/ Global indistinta. 
                                                                       // Serán los caracteres que cambiemos por "" espacio
    let counter = 0;
    if (frase_limpia.includes(busqueda)) {
        let palabras = frase_limpia.split(" ");     // Separo la frase por espacios.
        let mapa = {};                              // Creamos objeto. Donde se almacena cada palabra.

        for (let i of palabras) {                   // Bucle for OF, consigo el valor de cada iteración.
            if (mapa[i]) {                          // Si la iteración coincide con el valor de mapa, ++
                mapa[i]++;
            } else {                                // Sino, le da un valor de 1, a cada iteración.
                mapa[i] = 1;
            }
        }
        counter = mapa[busqueda];                   // En el contador sacamos la propiedad (palabra) que buscábamos, con el valor que tenga esa propiedad 
    } else {
            counter = 0;
    }   
    return counter;
}
console.log(buscar("Esto... es la FRASE frase frase frase frase", "frase"));

console.warn();

function encontrarPalabra(texto, buscar) {
    let convertido = texto.toLowerCase().replace(/[,.!¡]/gi, "").split(" ");
    let busqueda_minu = buscar.toLowerCase();
    let count = 0;

    for(let i = 0; i <= convertido.length; i++) {
        if (convertido[i] == busqueda_minu) {
            count++;    
        }         
    } 
    return count;
}
console.log("Se ha encontrado la palabra: " + encontrarPalabra("Hola mundo!", "hola") + " veces");

console.warn();

// _____________________________________________________________________________________________
// De otra forma:
function ContadorPalabrasIguales(texto, palabra) {
    return texto.toLowerCase().split(palabra).length - 1;
}
console.log("Se han encontrado " + ContadorPalabrasIguales("la frase frase es", "frase"));
