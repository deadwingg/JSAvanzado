console.log('Revelator!');
//funcion autoinvocada
const libreria = (function () {
    'use strict'; // conviene para evitar la posibilidad de olvidar var let o const y se cree una propiedad global
    let clave = 'clave';
    function getClave() {
        return calcularAlgoritmo(clave);
    }

    function setClave(valor){
        clave = valor;
    }

    function calcLongitudRectangulo(b,h) {
        return 2*b + 2*h;
    }

    function wrapperCalcRect(a,b) {
        return calcLongitudRectangulo(a,b);
    }
    function calcularAlgoritmo(clave){
        return clave.toLowerCase();
    }
    console.log('Libreria cargada');

    return {
        getClave,
        setClave,
        calcLongRect: wrapperCalcRect,
    } // si el nombre de la funcion y de la clave son lo mismo podemos usar esta sintaxis reducida
})();