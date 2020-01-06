//En esta funcion devolvemos el objeto para que el listener se con figure de manera externa
function ajax(url, metodo) {
    let http_metodo = metodo || 'get'; //Si metodo es undefined uso el de la derecha (ECMA6)
    let xhr = new XMLHttpRequest();
    xhr.open(http_metodo, url);
    xhr.send();
    return xhr;
}

