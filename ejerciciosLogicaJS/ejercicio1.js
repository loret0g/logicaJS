// Dado un número, realizar su tabla de multiplicar completa:
let numero = parseInt(prompt("Introduce un número"));
let multiplica = function multiplicar(numero) {
    if (numero >= 0 || !isNaN(numero)) {
        document.write(`<h2> La tabla del ${numero} es: </h2>`);
        for (let i=1; i<=10; i++) {
            document.write(`<h3> ${numero} x ${i} =` + numero * i + "</h3>");
        }
    } else {
        alert("Introduce un número correcto");
    }
}
multiplica(numero);
