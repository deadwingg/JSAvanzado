console.log('Objetos en JS');

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
for (let key in c){
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


function suma (a, b){
    return (typeof a != 'undefined'? a : 0) + (typeof b != 'undefined'? b : 0)
}

console.log(suma(6,7,8));