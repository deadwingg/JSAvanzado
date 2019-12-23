"use strict" //macro que cambia al modo estricto
console.log("Connected")
//global variables are created in  the BOM (browser object model)
//is represented in the object "window"
var num = 4;
var num = 5;
var num2 = 7;

for(let i=0; i < 5; i++){
    console.log(i)
}
//console.log(i) let

if ( true ) {
    let a = 5
    console.log(a)
}
// console.log(a)

//  -------------------------------------------------------  //
//           Nuevos constructores de funciones en ES6        //
//  -------------------------------------------------------  //

// named one
function sumar(a, b) {
    return a+b;
}

//constant variable 
const restar = function(a,b){
    return a - b
}

//Arrow function or lambda expression
const multiplicar = (a, b) => a * b
// `` como delimitador, ${varName} para insertar la variable, parecido a las EL
const prtMensaje = (msj, name) => { console.log(`${msj} ${name}, como estas`)}
//Para retornar objeto en oneliner debe ir entre parentesis
const getPersona = () => ({nombre: "Pedro", edad: 32}) 


console.log(sumar(2,6))
console.log(restar(2,6))
console.log(multiplicar(2,6))
prtMensaje("hola", "juan");
console.log(getPersona());

//Perdida de this en una funcion auto-invocada
//funcion anonima que se ejecuta en el mismo lugar (revelator pattern)
//entre parentesis va la definicion de la anon func y despues () para llamarla
/*
var persona = (function(){
    this.edad = 32;
    
    return {
        getedad: function(){
            return this.edad;
        }
    }
})()
 - esto falla porque this ya no guarda referencia a lafuncion externa, sino al objeto? - 
*/

//en las arrow functions this se mantiene  
var persona = (() => {
    this.edad = 32;
    return {
        getEdad: () => this.edad
    }
})()
console.log(persona.getEdad())

// with numbers booleans an strings  we got valuecopy
var a1  = 1;
var b1 = a1;
a1 = 10;
console.log(a1);
console.log(b1);

var c1  = true;
var d1 = c1;
c1 = false;
console.log(c1);
console.log(d1);

var e1  = 'hola';
var f1 = e1;
e1 = 'mundo';
console.log(e1);
console.log(f1);


//with objects we got reference copy

var o1 = [1, 2, 3];
var o2 = o1;
o1[0] = 11;
console.log(o1);
console.log(o2);

var o3 = {x:1};
var o4 = o3;
o3.x = 11;
console.log(o3);
console.log(o4);