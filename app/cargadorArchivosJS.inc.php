<?php

$date = new DateTime();

$fuentesJavascript = [

    'js/Rectangulo.js',
    'js/Sprite.js',
    'js/Tile.js',
    'js/CapaMapaTiles.js',
    'js/PaletaSprite.js',
    "js/listadoEstados.js",
    'js/ajax.js',
    'js/estadoMapaMundi.js',
    'js/MaquinaEstado.js',
    'js/Punto.js',
    'js/Mapa.js',
    'js/teclado.js',
    'js/mando.js',
    'js/dimensiones.js',
    'js/buclePrincipal.js',
    'js/inicio.js',
];

foreach ($fuentesJavascript as $fuente) {
    echo '<script src = "' . $fuente . '?' . $date->getTimestamp() . '" ></script >';
}