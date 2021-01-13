const teclado = {
    teclas: [],
    iniciar: () => {
        document.onkeydown = teclado.guardarTecla;
    },
    guardarTecla: e => {
        teclado.teclas.push(e.key);
        console.log(e.key)
    },
    teclaPulsada: (codigoTecla) => {
        return (teclado.teclas.indexOf(codigoTecla) !== -1);
    },
    reiniciar: () => {
        teclado.teclas = [];
    }
}