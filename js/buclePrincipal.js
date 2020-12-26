//namespace - espacio de nombres
//main loop - bucle principal
//aps - actualizaciones por segundo
//fps - frame por segundo
//1s = 1000ms

let buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: (registroTemporal) => {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar(registroTemporal);
        if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log(`APS: ${buclePrincipal.aps} | FPS: ${buclePrincipal.fps}`);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: () => {

    },
    actualizar: (registroTemporal) => {
        buclePrincipal.aps++;
    },
    dibujar: (registroTemporal) => {
        buclePrincipal.fps++;
    }
};

