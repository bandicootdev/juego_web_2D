class PaletaSprite {
    constructor(datosSprites) {
        this.rutaImagen = datosSprites.image;
        this.anchoImagen = parseInt(datosSprites[`imagewidth`]);
        this.altoImagen = parseInt(datosSprites[`imageheight`]);
        this.anchoSprite = parseInt(datosSprites[`tilewidth`]);
        this.altoSprite = parseInt(datosSprites[`tileheight`]);
        this.primerSpriteSobreUno = parseInt(datosSprites[`firstgid`])
        this.altoImagenMedidoSprites = this.altoImagen / this.altoSprite;
        this.anchoImagenMedidoSprites = this.anchoImagen / this.anchoSprite;
        this.totalSprites = this.anchoImagenMedidoSprites * this.altoImagenMedidoSprites;
        this.sprites = [];


        for (let e = 0; e < this.totalSprites; e++) {
            let idActual = this.primerSpriteSobreUno - 1 + e
            this.sprites.push(new Sprite(this.rutaImagen, e, this.obtenerPosicion(idActual)));
        }
    }

    obtenerPosicion(id) {
        let y = Math.floor(id / this.anchoImagenMedidoSprites);
        let x = Math.floor(id % this.anchoImagenMedidoSprites);
        return new Punto(x * this.anchoSprite, y * this.altoSprite);
    }

}