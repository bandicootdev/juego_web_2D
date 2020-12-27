'use strict'

//DOM = DOCUMENT OBJECT MODEL
document.addEventListener('DOMContentLoaded', () => {
    inicio.iniciarJuego();
}, false);

let inicio = {
    iniciarJuego: () => {
        console.log('Juego iniciado');
        teclado.iniciar();
        dimensiones.iniciar();
        mando.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();
    },
    recargarTiles: () => {
        document.getElementById('juego').innerHTML = '';
        for (let y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
            for (let x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles)
            }
        }
    }
}