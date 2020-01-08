console.log('Ajax Binario');
let form = document.querySelector('form');
let img = document.querySelector('img');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //form [0] es el primer elemento del form
    // value nos da un fakepath
    // console.log(form[0].value);
    //console.dir nos da los contenidos del objeto
    //console.dir(form);
    //files es un array con los archivos seleccionados
    //cada archivo tiene una propiedad nombre
    let archivo = form[0].files[0].name;
    cargarImagen(archivo);

});

function cargarImagen(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', `img/${url}`);
    xhr.responseType = 'blob';
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let imagenBlob = xhr.response;
            let url = URL.createObjectURL(imagenBlob);
            img.src = url;
        }
    });
    xhr.send();
}

cargarImagen(url);
