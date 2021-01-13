let mando = {
    objecto: null,
    eventosDisponibles: 'ongamepadconnected' in window,
    conectado: false,
    iniciar: () => {
        // ongamepadconnected no es totalmente soportado, segun mdn se debe dejar que el usuario pulse un boton para que gamepadconnected se active
        if (mando.eventosDisponibles) {
            window.addEventListener('gamepadconnected', mando.conectar);
            window.addEventListener('gamepaddisconnected', mando.desconectado)
        } else {
            mando.actualizar();
        }
    },
    conectar: e => {
        console.log(e.gamepad)
        mando.objecto = e.gamepad;
        mando.identificar();
    },
    desconectado: e => {
        console.log(`mando desconectado del indice ${e.gamepad.index}: ${e.gamepad.id} `)
    },
    actualizar: () => {
        if (!mando.eventosDisponibles) {
            mandos = null;
            try {
                mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
                mando.objecto = mandos[0];
                if (!mando.conectado) {
                    mando.conectado = true;
                    mando.identificar();
                }
            } catch (err) {
                console.log(err.message)
            }
        }
        if (!mando.objecto) {
            return;
        }
        // revisar que el mando este activo;
        if (mando.botonPulsado(mando.objecto.buttons[0])) {
            console.log('Mando: X');
            mando.identificar();
        }
    },
    botonPulsado: boton => {
        if (typeof boton === 'object') {
            return boton.pressed;
        }
        return boton === 1.0;
    },
    identificar: () => {
        console.log(`mando conectado en el indice ${mando.objecto.index}: ${mando.objecto.id}, botones: ${mando.objecto.buttons.length}, ejes: ${mando.objecto.axes.length}`);
    }
}