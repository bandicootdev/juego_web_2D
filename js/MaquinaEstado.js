const maquinaEstado = {
    estadoActual: null,
    iniciar: () => {
        maquinaEstado.cambiarEstado(listadoEstado.MAPAMUNDI)
    },
    cambiarEstado: (estado) => {
        switch (estado) {
            case listadoEstado.CARGANDO: {
                //estado actual cargando
                break
            }
            case listadoEstado.MENU_INICIAL: {
                break
            }
            case listadoEstado.NIVEL: {
                break
            }
            case listadoEstado.MAPAMUNDI: {
                maquinaEstado.estadoActual = new EstadoMapaMundi(listadoEstado.MAPAMUNDI);

                break
            }
            default: {
                break
            }
        }
    },
    actualizar: () => {
        maquinaEstado.estadoActual.actualizar();
    },
    dibujar: () => {
        maquinaEstado.estadoActual.dibujar();
    }
}