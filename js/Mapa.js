class Mapa {
    constructor(objectoJSON) {
        this.posicion = new Punto(0, 0);
        this.posicionActualizada = new Punto(0, 0)
        this.anchoMedidoTiles = parseInt(objectoJSON.width);
        this.altoMedidoTiles = parseInt(objectoJSON.height);
        this.anchoTiles = parseInt(objectoJSON.tilewidth);
        this.altoTiles = parseInt(objectoJSON.tileheight);
        this.paletasSprites = [];
        this.iniciarPaletaSprites(objectoJSON.tilesets)
        this.capasTiles = [];
        this.iniciarCapas(objectoJSON.layers)
        this.iniciarRejilla();
    }


    iniciarPaletaSprites(datosCapas) {
        datosCapas.map((e) => {
            this.paletasSprites.push(new PaletaSprite(e))
        })
    }

    iniciarCapas(datosCapas) {
        datosCapas.map((e, i) => {
            switch (e.type) {
                case 'tilelayer': {
                    this.capasTiles.push(new CapaMapaTiles(e, i, this.anchoTiles, this.altoTiles, this.paletasSprites))
                    break;
                }
                case 'objectgroup': {
                    break;
                }
            }
        })
    }

    iniciarRejilla() {
        let anchoMapaPixeles = this.anchoMedidoTiles * this.anchoTiles;
        let altoMapaPixeles = this.altoMedidoTiles * this.altoTiles;
        let html = '';

        for (let ct = 0; ct < this.capasTiles.length; ct++) {
            for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
                if (this.capasTiles[ct].tiles[t] == null) {
                    continue;
                }
                let tileActual = this.capasTiles[ct].tiles[t];
                html += tileActual.html;
            }
        }

        document.getElementById('mapa').innerHTML = html;

        for (let ct = 0; ct < this.capasTiles.length; ct++) {
            for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
                if (this.capasTiles[ct].tiles[t] == null) {
                    continue;
                }
                let tileActual = this.capasTiles[ct].tiles[t];
                tileActual.aplicarStilos()
            }
        }

        document.getElementsByTagName('body')[0].style.overflow = "hidden"

    }

    actualizar() {

    }

    dibujar() {

    }
}