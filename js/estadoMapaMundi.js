class EstadoMapaMundi {
    constructor(idEstado) {
        let that = this;
        this.mapaListo = false;
        this.mapa = null;
        ajax.cargarArchivo('mapas/desierto48.json', (objetoJSON) => {
            that.mapa = new Mapa(objetoJSON);
            that.mapaListo = true
            console.log('Mapa Cargado')
        });
    }

    actualizar() {
        if (this.mapaListo) {
            return;
        }
        this.actualizar();
    }

    dibujar() {
        if (this.mapaListo) {
            return;
        }
        this.dibujar();
    }
}