console.log('ajax anidado');
let url = 'https://jsonplaceholder.typicode.com/comments/';
const HTTP_OK = 200;
//Trataremos de pedir los comentarios en orden
/*
// mi version con enfasis en callback con ARROW
function ajaxGet(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.addEventListener('load', () => {
        if (xhr.status === HTTP_OK){
            callback(xhr.response);
        }
    });
    xhr.send();
}

function getComments(id, callback) {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    if (id) {
        url += `/${id}`;
    }
    ajaxGet(url, (data) => {
        let parsedData = JSON.parse(data);
        console.log(parsedData);
        if (callback){
            callback();
        }
    })
}

getComments(1, ()=>{
    getComments(2, ()=>{
        getComments(3);
    })
});

*/

/*
Utilizamos una funcion para cada peticion y la llamamos adentro
Esta version es una forma crota de hacerlo
function getCommentario1() {
    let url = 'https://jsonplaceholder.typicode.com/comments/1';
    ajaxGet(url, (data) => {
        let parsedData = JSON.parse(data);
        console.log(parsedData);
        getCommentario2();
    })
}
function getCommentario2() {
    let url = 'https://jsonplaceholder.typicode.com/comments/2';
    ajaxGet(url, (data) => {
        let parsedData = JSON.parse(data);
        console.log(parsedData);
        getCommentario3();
    })
}
function getCommentario3() {
    let url = 'https://jsonplaceholder.typicode.com/comments/3';
    ajaxGet(url, (data) => {
        let parsedData = JSON.parse(data);
        console.log(parsedData);
    })
}*/

/* 1 - AJAX anidado utilizando callbacks (ECMAScript 5)
function getComentarioCallback(num, debug, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url+num);
    xhr.addEventListener('load', () => {
        if (xhr.status == 200){
            let respuesta = JSON.parse(xhr.response);
            if(debug) console.log(respuesta);
            if(cb) cb(respuesta);
        }
    });
    xhr.send();
}

//empieza la pyramid of doom
getComentarioCallback(1,true, () => {
    getComentarioCallback(2, true, ()=>{
        getComentarioCallback(3,true, () => {
            getComentarioCallback(4, true, ()=>{
                getComentarioCallback(5,true, () => {
                    getComentarioCallback(6, true, ()=>{
                        getComentarioCallback(7,true, () => {
                            getComentarioCallback(8, true, ()=>{
                                getComentarioCallback(9,true, () => {
                                    getComentarioCallback(10, true, null);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
*/

/*
1 - AJAX con promise (ECMAScript 6)
function getComentarioPromise(num, debug) {
    //a la promesa en su constructor le pasamos un callback
    // tiene 2 parametros que son 2 callbacks
    // el primero se dispara cuando se cumple la promesa y el segundo cuando falla
    //al crearse el objeto Promise se ejecuta el callback
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get', url+num);
        xhr.addEventListener('load', () => {
            if (xhr.status === HTTP_OK){
                let respuesta = JSON.parse(xhr.response);
                if(debug) console.log(respuesta);
                resolve(respuesta); //se llama asi, tanto resolve como reject solo reciben un parametro, si necesito mas puedo usar un objeto
            } else {
                let error = {
                    title: 'error de status 1 - AJAX',
                    body: xhr.status,
                };
                reject(error);
            }
        });
        xhr.addEventListener('error', (e)=>{
            let error = {
                title: 'error general 1 - AJAX',
                body: e,
            };
            reject(error);
        });
        xhr.send();
    });
}


//hasta aqui tenemos la declaración, ahora veremos el uso
//recordar que si la arrow no tiene cuerpo, es un return implicito
//si tenemos que usar u ncuerpo de codigo hay que tener un return EXPLICITO (como en el 5)
//sii cualqueira falla se corta el ciclo de ejecucion y va al catch
getComentarioPromise(1, true)
    .then(() =>getComentarioPromise(2,true))
    .then(() =>getComentarioPromise(3,true))
    .then(() =>getComentarioPromise(4,true))
    .then(() =>{
        return getComentarioPromise(5,true)
    })
    .then(() =>getComentarioPromise(6,true))
    .then(() =>getComentarioPromise(7,true))
    .then(() =>getComentarioPromise(8,true))
    .then(() =>getComentarioPromise(9,true))
    .then(() =>getComentarioPromise(10,true))
    .catch(error => {
        console.log(error);
    });*/

/*
ASYNC-AWAIT(ECMAScript 7)

function getComentarioPromise(num, debug) {
    //a la promesa en su constructor le pasamos un callback
    // tiene 2 parametros que son 2 callbacks
    // el primero se dispara cuando se cumple la promesa y el segundo cuando falla
    //al crearse el objeto Promise se ejecuta el callback
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get', url+num);
        xhr.addEventListener('load', () => {
            if (xhr.status === HTTP_OK){
                let respuesta = JSON.parse(xhr.response);
                if(debug) console.log(respuesta);
                resolve(respuesta); //se llama asi, tanto resolve como reject solo reciben un parametro, si necesito mas puedo usar un objeto
            } else {
                let error = {
                    title: 'error de status 1 - AJAX',
                    body: xhr.status,
                };
                reject(error);
            }
        });
        xhr.addEventListener('error', (e)=>{
            let error = {
                title: 'error general 1 - AJAX',
                body: e,
            };
            reject(error);
        });
        xhr.send();
    });
}

//Ajax anidado utilizando async await
//ejemplo de promesa con settimeout
const retardo1 = ms => new Promise((resolve, reject) => setTimeout(resolve, ms, 'fin retardo1'));
const retardo2 = ms => new Promise((resolve, reject) => setTimeout(resolve, ms, 'fin retardo2'));
const retardo3 = ms => new Promise((resolve, reject) => setTimeout(resolve, ms, 'fin retardo3'));


//Ajax anidado utilizando async await
async function getComentarios() {
    //con console.log interno
    // try {
    //     await getComentarioPromise(1, true);
    //     await getComentarioPromise(2, true);
    //     await getComentarioPromise(3, true);
    //     await getComentarioPromise(4, true);
    //     await getComentarioPromise(5, true);
    //     await getComentarioPromise(6, true);
    //     await getComentarioPromise(7, true);
    //     await getComentarioPromise(8, true);
    //     await getComentarioPromise(9, true);
    //     await getComentarioPromise(10, true);
    // } catch (e) {
    //     console.log(e);
    // }
    //Con console.log externo
    try {
        let awaitRespuesta = await getComentarioPromise(1, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(2, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(3, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(4, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(5, false);
        console.log(awaitRespuesta);
        let mensaje = await retardo(5000);
        console.log(mensaje);
        awaitRespuesta = await getComentarioPromise(6, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(7, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(8, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(9, false);
        console.log(awaitRespuesta);
        awaitRespuesta = await getComentarioPromise(10, false);
        console.log(awaitRespuesta);
    } catch (e) {
        console.log(e);
    }
}

getComentarios();


//Ejemplo de race

Promise.race([retardo1(8000), retardo2(5000), retardo3(4000)]).then(console.log);
Promise.all([retardo1(8000), retardo2(5000), retardo3(4000)]).then(console.log);
*/

//Ajax con fetch() (ECMAScript 6)
/*
//fetch retorna una promise(!)
fetch(url)
    .then(respuesta => {
        return respuesta.json()
    })
    .then(json => console.log(json));
*/

function getComentarioFetch(id,debug) {
    return fetch(url+`${id}`)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(json => {
            if(debug) console.log(json);
            return Promise.resolve(json) //llamo al metodo  para retornar una promesa
        });
}

//vanilla promise
// getComentarioFetch(1,true)
//     .then(() => getComentarioFetch(2,true))
//     .then(() => getComentarioFetch(3,true))
//     .then(() => getComentarioFetch(4,true))
//     .then(() => getComentarioFetch(5,true))
//     .then(() => getComentarioFetch(6,true))
//     .then(() => getComentarioFetch(7,true))
//     .then(() => getComentarioFetch(8,true))
//     .then(() => getComentarioFetch(9,true))
//     .then(() => getComentarioFetch(10,true));

//async-await
async function getComentariosFetch() {
    try {
        await getComentarioFetch(1, true);
        await getComentarioFetch(2, true);
        await getComentarioFetch(3, true);
        await getComentarioFetch(4, true);
        await getComentarioFetch(5, true);
        await getComentarioFetch(6, true);
        await getComentarioFetch(7, true);
        await getComentarioFetch(8, true);
        await getComentarioFetch(9, true);
        await getComentarioFetch(10, true);
    } catch (e) {
        console.log(e);
    }
}
getComentariosFetch();