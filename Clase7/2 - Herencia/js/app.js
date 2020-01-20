'use strict';
console.log('Herencia!');
let a = 124; // si omito el tipo de constructor en modo n oestricto se crea como var
let objEstatico = Object.create(null, {
    x: {
        value: 1
    }
});
let objDinamico = Object.create(null, {
    x: {
        value: 1,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
objEstatico.x = 11; // si no tengo el use strict la operacion no tiene exito pero no da error, lo cual es un problema para detectarlo

/* modificacionde l prototipo
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

//Prueba de modificacion on the fly
Persona.prototype.cumplirAnios = function (){
    this.edad++;
}; // con el prototype tenemos propiedades de "clase", la tienen
let ana = new Persona('Ana',20);
let jose= new Persona('Jose',30);
Persona.prototype.saludo = function (){
    console.log('Hola');
}; //SE puede modificar el prototipoo on the fly y se aplica a todos los objetos


Persona.prototype.saludo = function () {
    console.log('saludo')
};

function Empleado(sueldo) {
    this.sueldo = sueldo;
}
Empleado.prototype.trabajar = function () {
    console.log('Trabajando...')
};

let juan = new Persona('Juan', 23);
let empleado1 = new Empleado(20000);*/

/*
//          HERENCIA JS6
//-------------------------------------
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludo() {
        console.log('Saludo...')
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    trabajar() {
        console.log('Trabajando...')
    }
}

let ivan = new Empleado('Ivan', 25, 18000);*/
/*
//          HERENCIA JS5 (a traves de las funciones constructoras)
//---------------------------------------------------------------------------

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
Persona.prototype.saludar = function () {
    console.log('Saludando...')
};
function Empleado(nombre, edad, sueldo) {
    this.sueldo = sueldo;
    Persona.call(this, nombre, edad) // al llamar en contexto de this "unimos" los atributos ahora
}

//le ponemos el proto de persona, con esto tenemos los metodos
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.trabajar = function () {
    console.log('Trabajando...')
};

let empleado1 = new Empleado('ana', 18,20000);
*/

/*
//          HERENCIA JS5 (a traves de los prototipos)
//---------------------------------------------------------------------------
//generamos los prototipos base
let persona = {
    saludo: function () {
        console.log('Hola!!!!!');
    }
};

let maria = Object.create(persona);
let pedro = Object.create(persona);

let empleado =  {
    trabajar: function () {
        console.log('Trabajando...')
    }
};
//creo el objeto con el proto de persona y agrego como segundo aprametro un objeto de configuracion con ls de empleado
let empleado1 = Object.create(persona, {
    trabajar: {
        value: function () {
            console.log('Trabajando...')
        },
        writable:true,
        configurable: true,
        enumerable: true,
    }
});*/

// Com parativa entre fc en ES5 y clases en JS6
// Objeto con class
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludo() {
//         console.log('Saludo...')
//     }
//     static x() {
//         console.log('x');
//     }
// }
//
// let juan = new Persona('Juan', 23);
//
//Objeto con func constructora (JS5)
// function Persona(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
// }
// Persona.prototype.saludar = function () {
//     console.log('Saludando...')
// };
//
//
// let juan = new Persona('Juan', 23);
// Persona.x = true; //propiedad que solo perteneces a la clase (simil static pero las instancias la tienen)
// console.dir(juan);

//Funciones autoinvocadas (para proteger acceso)
//--------------------------------------------------
(function(numero) {
    let privada = true;
    console.log(privada);
    console.log(numero);
})(33);
