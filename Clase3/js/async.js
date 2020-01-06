/*
Asincronico: no en orden (!)
Callback hell ! (ECMA5)
Promise (sincronismo no bloqueante) (ECMA6)
async await (ECMA7)
 */

/*
// croteando
console.log('tarea1');
for (let i = 0; i < 1e9; i++);
console.log('tarea2');
for (let i = 0; i < 1e9; i++);
console.log('tarea3');
for (let i = 0; i < 1e9; i++);
console.log('tarea4');
for (let i = 0; i < 1e9; i++);
console.log('OTRA TAREA');
*/

/*
//Asincronisando con callbacks
console.log('tarea1');
setTimeout(()=> {
    console.log('tarea2');
    setTimeout(()=> {
        console.log('tarea3');
        setTimeout(()=> {
            console.log('tarea4');

        },2000);
    },2000);
},2000);
console.log('OTRA TAREA');
 */

let xhr = new XMLHttpRequest();
//Evento con readystatechange
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4) {
        /*if(xhr.status == 200){
        console.log(xhr.response);
        } else {
            console.log(`Error de comunicacion ${xhr.status}`);
        }*/
    }
    if (xhr.readyState == 2) {
        /*let header = xhr.getAllResponseHeaders();
        console.log(header);*/
        let tipo = xhr.getResponseHeader('content-type');
        console.log(tipo);
        if(tipo != 'text/html'){
            //xhr.abort();
        }
    }
});

//timeout esta en ms, 0 es infinito
xhr.timeout = 0;
//podemos genera el evento por timeout
xhr.addEventListener('timeout', ()=> {
    console.log('error de timeout');
});

//tenemos el evento load que se da cuando finaliza la comunicacion
xhr.addEventListener('load', () => {
    if(xhr.status == 200){
        console.log(xhr.response);
    } else {
        console.log(`Error de comunicacion ${xhr.status}`);
    }
});
xhr.open('GET', 'texto.txt');
//Agregando un evento puedo hacer un trace de los cambios de estado
xhr.send();

// readyState: 0 ->instanciado 1->configurado 2->intercambio de headers 3->transf de info 4->finaliza la comunicacion

// forma crota de obtener la respuesta con retardo
/*
setTimeout(()=> {
    console.log(xhr.readyState);
    console.log(xhr.response);
}, 10);
 */

/*
En xhr el readystate nos indica con 4 si terminó
en status nos da el codigo http de la respuesta
200 OK 404 Not Found
 */