let ajax = {
    cargarArchivo: (ruta, callback) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            /*
            * 0 - UNSENT - no iniciada la peticion
            * 1 - OPENED - conectado al servidor
            * 2 - HEADERS_RECIEVED - petcion recibida
            * 3 - LOADING - procesando peticion
            * 4 - DONE - peticion finalizada respuesta preparada
            */
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    // console.log(JSON.parse(request.responseText))
                    callback(JSON.parse(request.responseText));
                } else if (request.status === 400) {
                    console.log('err')
                } else {
                    console.log('resultado inesperado')
                }
            }
        };
        request.open("GET", ruta, true);
        request.send();
    }
};