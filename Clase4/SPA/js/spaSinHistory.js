//En esta funcion devolvemos el objeto para que el listener se con figure de manera externa
function ajax(url, metodo) {
    let http_metodo = metodo || 'get'; //Si metodo es undefined uso el de la derecha (ECMA6)
    let xhr = new XMLHttpRequest();
    let urlNoCache = url + `?${Date.now()}`;
    xhr.open(http_metodo, urlNoCache); //forma de forzar el NO cacheo automatico del navegador solicitando una url diferente cada vez
    xhr.send();
    return xhr;
}

// funcion de utilidad de cargar vista
function cargarVista(vista, target, callback) {
    let archivo = vista + '.html';
    let xhr = ajax(archivo);
    xhr.addEventListener('load', () => {
        // console.log(xhr.status);
        if (xhr.status == 200) {
            target.innerHTML = xhr.response;
            if(callback){
                callback();
            }
        }
    });
}


let main = document.querySelector('main');
let nav = document.querySelector('#nav');

cargarVista('home', main);
cargarVista('navbar', nav, () => {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            let id = link.id;
            // console.log(id);
            cargarVista(id, main);
        })
    });
});


