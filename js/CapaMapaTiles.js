class CapaMapaTiles {
    constructor(datosCapa, indiceZ, anchoTiles, altoTiles, paletasSprites) {
        this.anchoEnTiles = parseInt(datosCapa.width);
        this.altoEnTiles = parseInt(datosCapa.height);
        this.x = parseInt(datosCapa.x)
        this.y = parseInt(datosCapa.y)
        this.z = indiceZ;
        this.tiles = [];

        for (let y = 0; y < this.altoEnTiles; y++) {
            for (let x = 0; x < this.anchoEnTiles; x++) {
                let idSprite = datosCapa.data[x + y * this.anchoEnTiles]
                // console.log(idSprite)
                if (idSprite === 0) {
                    this.tiles.push(null);
                } else {
                    let spriteActual = this.encontrarSpritePaletaId(idSprite - 1, paletasSprites)
                    this.tiles.push(new Tile(x, y, indiceZ, anchoTiles, altoTiles, spriteActual))
                }
            }
        }

        // this.altoEnTiles.map(y => {
        //     this.anchoEnTiles.map(x => {
        //         let idSprite = datosCapa[x + y * this.anchoEnTiles]
        //         if (idSprite === 0) {
        //             this.tiles.push(null)
        //         } else {
        //             let spriteActual = this.encontrarSpritePaletaId(idSprite, paletasSprites)
        //             this.tiles.push(new Tile(x, y, indiceZ, anchoTiles, altoTiles, spriteActual))
        //         }
        //     })
        // })
    }

    encontrarSpritePaletaId(idSprite, paletaSprites) {
        // console.log(idSprite)
        // console.log(paletaSprites)
        for (let s = 0; s < paletaSprites.length; s++) {
            if (idSprite >= paletaSprites[s].primerSpriteSobreUno - 1 && idSprite < paletaSprites[s].totalSprites + paletaSprites[s].primerSpriteSobreUno + 1) {
                console.log('entro aqui')
                return paletaSprites[s].sprites[Math.abs(paletaSprites[s].primerSpriteSobreUno - 1 - idSprite)];
            }
        }
        // paletasSprite.map(e => {
        //     if (idSprite >= e.primerSpriteSobreUno && idSprite < e.totalSprites + e.primerSpriteSobreUno + 1) {
        //         return e.sprites[Math.abs(e.primerSpriteSobreUno - 1 - idSprite)]
        //     }
        // })
        // throw new Error(`El ID sobre zero ${idSprite} del exprite no existe`)
    }

}