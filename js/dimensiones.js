let dimensiones = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    ladoTiles: 100,
    escala: 1,
    iniciar: () => {
        window.addEventListener('resize', (event) => {
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            // console.log(`Ancho: ${dimensiones.ancho} | Alto: ${dimensiones.ancho} `);
            inicio.recargarTiles();
        })
    },
    obtenerTilesHorizontales: () => {
        let ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal);
    },
    obtenerTilesVerticales: () => {
        let ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal);
    },
    obtenerTotalTiles: () => {
        return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
    }
}