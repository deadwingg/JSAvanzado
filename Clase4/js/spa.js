//En esta funcion devolvemos el objeto para que el listener se con figure de manera externa
function ajax(url, metodo) {
    let http_metodo = metodo || 'get'; //Si metodo es undefined uso el de la derecha (ECMA6)
    let xhr = new XMLHttpRequest();
    xhr.open(http_metodo, url + `?${Date.now()}`); //forma de forzar el NO cacheo automatico del navegador
    xhr.send();
    return xhr;
}

let main = document.querySelector('main');
console.log(main);
let links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let id = link.id;
        console.log(id);
        let archivo = id + '.html';
        let xhr = ajax(archivo);
        xhr.addEventListener('load', () => {
            console.log(xhr.status);
            if (xhr.status == 200) {
                main.innerHTML = xhr.response;
            }
        })
    })
})