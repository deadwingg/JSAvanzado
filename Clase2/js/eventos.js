if (false){
console.log("connected");

const uno = (e) => {
    console.log('Soy la funcion 1');
    console.log(e);
};
const dos = () => {
    console.log('Soy la funcion 2')
};

function prueba(item, callback) {
    console.log(item);
    callback();
}

var button = document.querySelector('#btn');

//Via propiedad
/*
button.onclick = () => {
    prueba("Propiedad", uno);
}
 */
//Via event lister
/*
button.addEventListener("click",
    () => prueba("Listener", dos));

 */

button.addEventListener("click", uno);
button.addEventListener("click", dos);
button.addEventListener("click", () => console.log("Via Arrow"));
button.addEventListener("click",
    function(e){
        console.log("Via funcion");
        console.log(e);
});
//Se agregan todos, no como en el parametro que al cambiarlo se sobreescribe el valor anterior

//Estructura de callbacks
// En sintaxis tradicional

function restar(a, b, cb){
    if (cb){
        cb(a, b, a-b);
    }
}

restar(5, 6 , function(a, b, res){
    console.log(`El resultado de ${a} - ${b} es ${res}`);
});



//Como arrow function
const sumar = (a, b, cb) => {
    if (cb){
        cb(a, b, a+b);
    }
};

sumar(5, 6 ,
    (a, b, res) => console.log(`El resultado de ${a} + ${b} es ${res}`));


let outer= document.querySelector("#outer");
let middle= document.querySelector("#middle");
let inner= document.querySelector("#inner");

outer.addEventListener("click", () => {
    console.log("click 3")
}, true);
middle.addEventListener("click", () => {
    console.log("click 2")
}, true);
inner.addEventListener("click", () => {
    console.log("click 1")
}, true);

// la propagacion por defecto
// es del elemento mas cercano al mas lejano, esto se llama "bubbling"
// si quiero propagar al reves se llamaria "capturing"
// con un tecer parametro en addEventListener puedo cambiar esta direccion

}
let btnCreado = false;
let estatico = document.querySelector("#estatico");
estatico.addEventListener('click', () => {
    console.log("Soy estático");
    if (!btnCreado){
        let dinamico = document.createElement('button');
        dinamico.innerText = "DINAMICO";
        dinamico.id = 'dinamico';
        document.body.appendChild(dinamico);
        let remove = document.createElement('button');
        remove.innerText = "REMOVE";
        remove.id = 'remove';
        document.body.appendChild(remove);

        btnCreado = true;
    }
});

// let dinamico = document.querySelector("#dinamico");
document.addEventListener('click', (e) => {
    let id = e.target.id;
    // console.log('click sobre document', id);
    if (id === 'dinamico'){
        console.log('Soy dinamico');
    }
    if (id === 'remove'){
        document.body.removeChild(document.querySelector('#dinamico'));
        document.body.removeChild(document.querySelector('#remove'));
        btnCreado = false;
    }

});