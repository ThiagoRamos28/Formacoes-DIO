const entradas = [10, 3, 4, 1, 10, 8, 5, 21, 37, 48, 62];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };