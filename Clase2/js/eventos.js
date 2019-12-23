console.log("connected");

const uno = () => {
    console.log('Soy la funcion 1')
}
const dos = () => {
    console.log('Soy la funcion 2')
}

function prueba(item, callback) {
    console.log(item);
    callback();
}

prueba(1,dos);
var but = document.querySelector('#btn');
but.onclick = () => {
    prueba(1, dos);
}
