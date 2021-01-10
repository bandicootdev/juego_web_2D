class Tile {

    constructor(xEnTiles, yEnTiles, z, ancho, alto, sprite) {
        this.rectangulo = new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
        this.zIndex = z;
        this.sprite = sprite;
        this.idHtml = `x${xEnTiles}y${yEnTiles}z${z}`
        this.html = '<div id="' + this.idHtml + '"></div>'
    }


    aplicarStilos() {
        if (!document.getElementById(this.idHtml)) {
            throw(`${this.idHtml} no existe en la hoja`);
        }
        let x = this.sprite.posicionEnHoja.x;
        let y = this.sprite.posicionEnHoja.y;
        document.getElementById(this.idHtml).style.position = 'absolute';
        document.getElementById(this.idHtml).style.left = (this.rectangulo.x + this.rectangulo.ancho) + 'px';
        document.getElementById(this.idHtml).style.top = (this.rectangulo.y + this.rectangulo.alto) + 'px';
        document.getElementById(this.idHtml).style.width = this.rectangulo.ancho + 'px';
        document.getElementById(this.idHtml).style.height = this.rectangulo.alto + 'px';
        document.getElementById(this.idHtml).style.zIndex = `${this.zIndex}`;
        document.getElementById(this.idHtml).style.background = `url('${this.sprite.rutaOrigen}')`
        document.getElementById(this.idHtml).style.backgroundPosition = `-${x}px -${y}px`;
        document.getElementById(this.idHtml).style.backgroundClip = 'border-box'
        document.getElementById(this.idHtml).style.outline = "1px solid transparent"

    }

}