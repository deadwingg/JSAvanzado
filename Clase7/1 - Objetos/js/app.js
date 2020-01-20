console.log('1 - 2 - Objetos en JS');
if (0) {
//hay 4 maneras de crear un objeto
//---------------------------------------------------------------------------------------------
//                          Forma literal(prototipo default)
//---------------------------------------------------------------------------------------------
    let a = {
        nombre: 'juan',
    };
//un objeto que creo en forma literal hereda las propiedades del objeto padre
//cada objeto que creamos tiene ya funcionalidad heredada, de Object
//al haber sido declarado de forma literal no tenemos control acerca del prototipo que usamos
//con las otras maneras podremos determinar cual será el prototipo

//hasOwnProperty retorna true si tiene la propiedad, false otherwise
    console.log(a.hasOwnProperty('nombre'));
    console.log(a.hasOwnProperty('edad'));

//---------------------------------------------------------------------------------------------
//      Creacion de objetos utilizando un prototipo especifico con Object.create
//---------------------------------------------------------------------------------------------
//si quiero determinar el prototipo lo declaro
    let prototipo = {
        saludo: function () {
            console.log('hola');
        }
    };
    let prototipo2 = {
        saludo: function () {
            console.log('hola');
        }
    };
//con object.create le paso el prototipo que quiero usar, previamente definido en forma literal
    let b = Object.create(prototipo);
    b.saludo();

//prototipo.isPrototypeOf() devuelve true si es prototipo, flase otherwise
    console.log(prototipo.isPrototypeOf(b));
    console.log(prototipo2.isPrototypeOf(b));

//---------------------------------------------------------------------------------------------
//              Configuracion avanzada de objetos con Object.create
//---------------------------------------------------------------------------------------------
    let c = Object.create(null, {
        x: {
            value: 1,
            writable: false, //(no) se puede cambiar
            enumerable: false, // (no) se puede recorrer
            configurable: false, // (no) se puede eliminar
        }
    });

    console.log(c);
    c.x = 10;
    delete c.x;
    for (let key in c) {
        console.log(key)
    }
    console.log(c);

//---------------------------------------------------------------------------------------------
//              FUNCIONES
//---------------------------------------------------------------------------------------------

    function foo() {

    }

    console.dir(foo);
//una funcion e sun objeto, ergo puede tener propiedades
    foo.x = true;
    console.log(foo.x);

//also puede ser el prototipo de un objeto, a esto le llamamos funcion constructora
//en js las funciones son variadicas, podes llamarla con un numero de parametros diferentes .
// si llamas con par de mas se toman los primeros, si son de menos los sobrantes son undefined


    function suma(a, b) {
        return (typeof a != 'undefined' ? a : 0) + (typeof b != 'undefined' ? b : 0)
    }

    console.log(suma(6, 7, 8));

//---------------------------------------------------------------------------------------------
//              SCOPE
//---------------------------------------------------------------------------------------------

    var a1 = 2;

    function foo2(c) {
        var b = 10;
        console.log("a1 = " + a1, "b = " + b, "c = " + c);
    }

    foo2(50);

    console.log("a1 = " + a1);
// console.log("b = " + b); ERROR b has function scope
// console.log("c = " + c); ERROR c (a parameter) has function scope

    function foo3(c) {
        console.log("variables vistas desde foo3 = ", a1, c);
    }

    foo3();


//---------------------------------------------------------------------------------------------
//              CLOSURES
//---------------------------------------------------------------------------------------------

function externa(x) {
    function interna(y) {
        console.log(y+x);
    }
    return interna
}

let resultado = externa(50);
resultado(10);
console.dir(resultado);

//this es una referencia al objeto en el que esta contenida la funcion


function foo4() {
    console.log(this);
}
foo4(); // window

let personaEjemplo = {
    nombre: 'Carlos',
    saludo: function () {
        console.log(this);
    },
};

personaEjemplo.saludo(); // persona
//cambiar el contexto de una función (this es automático)

function ctx(a, b) {
    console.log(this, a, b);
}
//formas de ejecutar una funcion
//normal
ctx(5,6);
//apply
ctx.apply({
    x:1
}, [5, 6]); // apply tiene un segundo parametro, un array con los parametros restantes
//call
ctx.call({
    x:1
}, 5, 6);// toma el resto de los parametros de manera normal



/*
//no logramos obj independientes
let persona = {
    nombre: null,
    edad: null,
};*/

//Logramos objetos independientes con una funcion constructora
function personaConstructora() {
    let p = {
        nombre: null,
        edad: null,
    };
    return p;
}

let juan = personaConstructora();
let maria = personaConstructora();
juan.nombre = 'Juan';
juan.edad = 15;
maria.nombre = 'maria';
maria.edad = 23;
console.log(juan, maria);


//funcion constructora con parametros

function personaParametrizada(nombre, edad) {
    let p = {
        nombre: nombre,
        edad: edad,
    };
    return p;
}
let carlos = personaParametrizada('carlos');
let jose = personaParametrizada('jose');


//constructores (!) al llamar con el operador new se crea un objeto y se lo referencia al this,
// se lo pasa a la funcion constructora junto con los parametros, permitiendonos
//crear los atributos correspondientes en una sintaxis mas compacta
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let ivan = new Persona('Ivan', 25);
let marcos = new Persona('Marcos', 29);

} // fin if

