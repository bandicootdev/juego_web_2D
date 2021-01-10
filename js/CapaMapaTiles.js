class CapaMapaTiles {
    constructor(datosCapa, indiceZ, anchoTiles, altoTiles, paletasSprites) {
        this.anchoEnTiles = parseInt(datosCapa.width);
        this.altoEnTiles = parseInt(datosCapa.height);
        this.x = parseInt(datosCapa.x)
        this.y = parseInt(datosCapa.y)
        this.z = indiceZ;
        this.tiles = [];

        this.altoEnTiles.map(y => {
            this.anchoEnTiles.map(x => {
                let idSprite = datosCapa[x + y * this.anchoEnTiles]
                if (idSprite === 0) {
                    this.tiles.push(null)
                } else {
                    let spriteActual = this.encontrarSpritePaletaId(idSprite, paletasSprites)
                    this.tiles.push(new Tile(x, y, indiceZ, anchoTiles, altoTiles, spriteActual))
                }
            })
        })
    }

    encontrarSpritePaletaId(idSprite, paletasSprite) {
        paletasSprite.map(e => {
            if (idSprite >= e.primerSpriteSobreUno && idSprite < e.totalSprites + e.primerSpriteSobreUno + 1) {
                return e.sprites[Math.abs(e.primerSpriteSobreUno - 1 - idSprite)]
            }
        })
        // throw
    }

}