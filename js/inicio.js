'use strict'

//DOM = DOCUMENT OBJECT MODEL
document.addEventListener('DOMContentLoaded', () => {
    inicio.iniciarJuego();
}, false);

let inicio = {
    iniciarJuego: () => {
        console.log('Juego iniciado');
        buclePrincipal.iterar();
    }
}