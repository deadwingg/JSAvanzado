console.log('Ajax externo!');
let url = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json';
let xhr = new XMLHttpRequest();

xhr.open('get', url);
console.log(xhr.status);

xhr.addEventListener('load', ()=> {
        console.log(xhr.status);
    if (xhr.status == 200){
        let respuesta = xhr.response;
        if(xhr.getResponseHeader('content-type').includes('application/json')){
            let respuestaJSON = JSON.parse(respuesta);
            console.log(respuestaJSON);
        }
    }
});
xhr.send();

// para que esto funcione en los headers de la respuesta, el servidor tiene que haber incluido el allow-content-origin
// que nos permite acceder a la informacion, caso contrario el navegador aborta la transferencia de datos.
// existe llamado JSONP que nos permite saltear esa protección si el backend lo permite
