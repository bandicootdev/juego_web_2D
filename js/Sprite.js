class Sprite {
    constructor(ruta, idSobreZero, posicionEnHoja) {
        let elementoRuta = ruta.split("/");
        console.log(elementoRuta)
        this.rutaOrigen = `img/${elementoRuta[elementoRuta.length - 1]}`;
        console.log(this.rutaOrigen)
        this.idSobreZero = idSobreZero;
        this.idSobreUno = idSobreZero + 1;
        this.posicionEnHoja = posicionEnHoja;
    }
}