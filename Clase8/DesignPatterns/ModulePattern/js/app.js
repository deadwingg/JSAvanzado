console.log('Module!');
//funcion autoinvocada
(function () {
    'use strict'; // conviene para evitar la posibilidad de olvidar var let o const y se cree una propiedad global
    let clave = 'clave';
    function getClave() {
        return calcularAlgoritmo(clave);
    }

    function setClave(valor){
        clave = valor;
    }

    function calcLongitudCircunferencia(r) {
        return 2*Math.PI*r;
    }

    function wrapperCalcCirc(r) {
        return calcLongitudCircunferencia(r);
    }
    function calcularAlgoritmo(clave){
        return clave.toUpperCase();
    }
    console.log('Libreria cargada');

    window.libreria ={
        getClave,
        setClave,
        calcLongCirc: wrapperCalcCirc,
    } // si el nombre de la funcion y de la clave son lo mismo podemos usar esta sintaxis reducida
})();