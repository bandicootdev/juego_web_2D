'use strict'

//DOM = DOCUMENT OBJECT MODEL

let inicio = {
    iniciadores: [
        maquinaEstado.iniciar(),
        teclado.iniciar(),
        mando.iniciar(),
        buclePrincipal.iterar()
    ],
    iniciarJuego: () => {
        inicio.encadenarInicios(inicio.iniciadores.shift());
    },
    encadenarInicios: (iniciador) => {
        if (iniciador) {
            iniciador(() => inicio.encadenarInicios(inicio.iniciadores.shift()));
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inicio.iniciarJuego();
}, false);
